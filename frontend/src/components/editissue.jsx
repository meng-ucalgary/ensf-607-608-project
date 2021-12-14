import React from 'react';
import axios from "axios";
import NavBar from './navbar';

class EditIssue extends React.Component {
    state = {
        animal: {},
        comment: "",
        imageUrl: process.env.PUBLIC_URL + '/toobad.png',
        placeholder: "",
        apiphotos: [],
        photos:[],
        comments:[]
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const cid = this.props.match.params.cid;

        var animalIdUrl = "http://localhost:8080/api/v1/animals/" + id
        const { data: animal } = await axios.get(animalIdUrl, { headers: { 'Access-Control-Allow-Origin': true, }, });
        this.setState({ animal });

        

        var animalphotoUrl = "http://localhost:8080/api/v1/animals/" + id + "/photos"
        const { data: apiphotos } = await axios.get(animalphotoUrl, { headers: { 'Access-Control-Allow-Origin': true, }, });
        this.setState({ apiphotos });
        
        
        var photourl = null;
        var paray = [];
        for (var i = 0; i< this.state.apiphotos.length;i++){
            photourl = "http://localhost:8080/api/v1/animals/" + id+ "/photos/" + this.state.apiphotos[i]["photoId"];
            
            paray.push(photourl);

        }

        this.setState({ photos: paray});

        if(this.state.photos.length>0){
            this.setState({
                imageUrl: this.state.photos[0]
            })
        }
        

        console.log(this.state.photos.length)

        var animalCommentUrl = "http://localhost:8080/api/v1/animals/" + id + "/issues"
        const { data: comments } = await axios.get(animalCommentUrl, { headers: { 'Access-Control-Allow-Origin': true, }, });
        this.setState({ comments });

        for(i = 0; i<this.state.comments.length;i++){
            console.log("Issue ID: "+ this.state.comments[i]["issueId"]);
            if(cid === this.state.comments[i]["issueId"]){
                console.log("Found");
                this.setState({
                    idx: i,
                    placeholder: this.state.comments[i]["issueDesc"]
                })
            }
        }
        
    }

    handleChange(event) {
        this.setState({comment: event.target.value})
        
      }

    handleComment =(e)=>{
        const id = this.props.match.params.id;
        const user = this.props.match.params.user;
        const uid = this.props.match.params.uid;
        const cid = this.props.match.params.cid;

        let newDate = new Date()
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        let dateString = year.toString() + "-" + month.toString()+ "-"+day.toString();
        console.log(dateString);

        const message = {
            "issueId": cid,
            "issueDesc": this.state.comment,
            "detectedDate": null,
            "resolved": false,
            "raisedBy": {
                "userId": uid
            }
        }

        
       
        
        let link = "http://localhost:8080/api/v1/animals/" + id + "/issues/"+cid;
        axios.put(link, message,{headers:{}}).then(res => {
            console.log(res);
            console.log(res.data);
          });
        

        const status = {"status": "RED"};
        link = "http://localhost:8080/api/v1/animals/" + id;
        axios.put(link, status,{headers:{}});

        
        setTimeout(() => {
            this.props.history.push("/"+ user+"/" + uid +'/animals/'+id+"/issues");
         }, 500);





    };

    render() {
        let newDate = new Date()
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        let dateString = year.toString() + "-" + month.toString()+ "-"+day.toString();
        console.log(dateString);
        const user = this.props.match.params.user;
        const uid  = this.props.match.params.uid;
        
            return <React.Fragment>
            <NavBar user = {user} uid = {uid}/>
            
            <h2 className="display-4">Issue Logs</h2>
            <div className="row">
                <div className="col-sm">
                    <img src={this.state.imageUrl} width="300" 
                                height="300" alt="" />

                </div>
                <div className="col-sm">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Basic Details</h1>
                            <p className="lead">Animal ID: {this.state.animal["animalId"]}</p>
                                <p className="lead">Name: {this.state.animal["name"]}</p>
                                <p className="lead">Breed: {this.state.animal["breed"]}</p>
                                <p className="lead">Age: {this.state.animal["age"]}</p>
                                <p className="lead">Sex: {this.state.animal["sex"]}</p>
                                <p className="lead">Status: {this.state.animal["status"]}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Edit Issue</h1>
                        <div className="row">
                        <div className="col-sm">
                            < input type="text" id="inputFilter" className="form-control" placeholder={this.state.placeholder} aria-label="First Name" aria-describedby="basic-addon2" value={this.state.comment} onChange={(e) =>this.handleChange(e)}/>
                            <button onClick={(e) => this.handleComment(e)} className="btn btn-primary">Edit Issue</button>
                        
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>;

        


        
    }
}
 
export default EditIssue;