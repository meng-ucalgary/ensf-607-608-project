import React, { Component } from 'react';
import axios from "axios";
import ReactApexChart from 'react-apexcharts';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import NavBar from './navbar';
import { Redirect } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class AddAnimalExisting extends React.Component {
    state = {
        
        filterOption: 0,
        
        name: "",
        species:"",
        subspecies:"",
        breed: "",
        type: "",
        region: "",
        tattooNum: "",
        cityTattoo: "",
        rfidNumber: "",
        microChipNumber: "",
        coatColor: "",
        continuousMedication: "",
        distinctFeature: "",
        gender: "MALE",
        ownerContact: "",


        
        
        
    };

    handledOwnerContactChange(event) {
        let num = event.target.value.replace("-","").replace(" ","").replace("(","").replace(")","");

        this.setState({ownerContact: event.target.value})
        
      }

    handledistinctFeatureChange(event) {
        this.setState({distinctFeature: event.target.value})
        
      }

    handlecontMedChange(event) {
        this.setState({continuousMedication: event.target.value})
        
      }

    handleCoatColorChange(event) {
        this.setState({coatColor: event.target.value})
        
      }

    handleMicroChipChange(event) {
        this.setState({microChipNumber: event.target.value})
        
      }

    handlerfidNumberChange(event) {
        this.setState({rfidNumber: event.target.value})
        
      }



    handlecityTattooChange(event) {
        this.setState({cityTattoo: event.target.value})
        
      }



    handletattooNumChange(event) {
        this.setState({tattooNum: event.target.value})
        
      }

    handleRegionChange(event) {
        this.setState({region: event.target.value})
        
      }

    handleTypeChange(event) {
        this.setState({type: event.target.value})
        
      }

    handleBreedChange(event) {
        this.setState({breed: event.target.value})
        
      }

    handleSubSpeciesChange(event) {
        this.setState({subspecies: event.target.value})
        
      }

    handleNameChange(event) {
        this.setState({name: event.target.value})
        
      }

      handleSpeciesChange(event) {
        this.setState({species: event.target.value})
        
      }

    handleFilter = (e) => {
        let pos = "";
        this.setState({ 
            filterOption: e.target.value,
            gender: pos, 
        });

        if(e.target.value==0){
            pos = "MALE";

        }else if(e.target.value==1){
            pos = "FEMALE";

        }

        this.setState({ 
            filterOption: e.target.value,
            role: pos, 
        });
        //this.setState({filterOption: 1});
        console.log("Role Selected", this.state.role);

    };


    

    


      handleRegister =(e)=>{
        
        const userx = this.props.match.params.user;
        const uid = this.props.match.params.uid;
        
        
        

        let message = {
            "animalId": 1,
            "name": this.state.name,
            "species": this.state.species,
            "subSpecies": this.state.subspecies,
            "breed": this.state.breed,
            "type": this.state.type,
            "region": this.state.region,
            "sex": this.state.gender,
            "birthDate": null,
            "status": "INACTIVE",
            "theOwner": {
                "contactNumber": this.state.ownerContact
            },
            "tattooNum": parseInt(this.state.tattooNum),
            "cityTattoo": this.state.cityTattoo,
            "rfidNumber": this.state.rfidNumber,
            "microChipNumber": this.state.microChipNumber,
            "coatColor": this.state.coatColor,
            "continuousMedication": this.state.continuousMedication,
            "distinctFeature": this.state.distinctFeature
        }
        
        
       
        
        const link = "http://localhost:8080/api/v1/animals";
        axios.post(link, message,{headers:{}}).then(res => {
            console.log(res);
            console.log(res.data);
          });
        //window.location.reload(false);

        this.props.history.push("/"+ userx+"/" + uid +'/animals/');
        





    };


    render() { 
        const userx = this.props.match.params.user;
        const uid = this.props.match.params.uid;
        return <React.Fragment>
            <NavBar user = {userx} uid = {uid}/>
            <div class="container">
            <div class="card" style={this.styles}>
                
                <div class="card-body">
                    <h5 class="card-title">Add and Animal</h5>
                    <div class="row">
                      <div class="col-sm">
                      < input type="text" id="inputFilter"  className="form-control" placeholder="Name" value={this.state.name} onChange={(e) =>this.handleNameChange(e)} aria-label="First Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Species" value={this.state.species} onChange={(e) =>this.handleSpeciesChange(e)} aria-label="Middle Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Sub Species" value={this.state.subspecies} onChange={(e) =>this.handleSubSpeciesChange(e)} aria-label="Last Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      
                      
                    </div>
                    <div class="row">
                      <div class="col-sm">
                      < input type="text" id="inputFilter"  className="form-control" placeholder="Breed" value={this.state.breed} onChange={(e) =>this.handleBreedChange(e)} aria-label="First Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Type" value={this.state.type} onChange={(e) =>this.handleTypeChange(e)} aria-label="Middle Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Region" value={this.state.region} onChange={(e) =>this.handleRegionChange(e)} aria-label="Last Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      
                      
                    </div>

                    <div class="row">
                      <div class="col-sm">
                      < input type="text" id="inputFilter"  className="form-control" placeholder="Tattoo Number" value={this.state.tattooNum} onChange={(e) =>this.handletattooNumChange(e)} aria-label="First Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="City Tattoo" value={this.state.cityTattoo} onChange={(e) =>this.handlecityTattooChange(e)} aria-label="Middle Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="RFID Number" value={this.state.rfidNumber} onChange={(e) =>this.handlerfidNumberChange(e)} aria-label="Last Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      
                      
                    </div>

                    <div class="row">
                      <div class="col-sm">
                      < input type="text" id="inputFilter"  className="form-control" placeholder="Micro Chip Number" value={this.state.microChipNumber} onChange={(e) =>this.handleMicroChipChange(e)} aria-label="First Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Coat Color" value={this.state.coatColor} onChange={(e) =>this.handleCoatColorChange(e)} aria-label="Middle Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Continuous Medication" value={this.state.continuousMedication} onChange={(e) =>this.handlecontMedChange(e)} aria-label="Last Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      
                      
                    </div>
                    <div class="row">
                        <div class="col-sm">
                         < input type="text" id="inputFilter"  className="form-control" placeholder="Distinct Features" value={this.state.distinctFeature} onChange={(e) =>this.handledistinctFeatureChange(e)} aria-label="First Name" aria-describedby="basic-addon2" />
                    
                        </div>
                        <div class="col-sm">
                         < input type="text" id="inputFilter"  className="form-control" placeholder="Owner's Contact Number" value={this.state.ownerContact} onChange={(e) =>this.handledOwnerContactChange(e)} aria-label="First Name" aria-describedby="basic-addon2" />
                    
                        </div>
                    </div>

                    <div class="row">
                    <select   onChange={(e) => this.handleFilter(e)} className="form-select" id="selectFilter" value={this.state.filterOption}>
                        <option value = "0">MALE</option>
                        <option value="1">FEMALE</option>
                        
                        
                    </select>

                    </div>
                   

                    <button onClick={(e) => this.handleRegister(e)} className="btn btn-primary">Add Animal</button>
                    <p></p>
                </div>
            </div>
            </div>
        </React.Fragment>;
    }
}
 
export default AddAnimalExisting;