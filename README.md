# ENSF-607/608 Term Project

A project on developing a Full Stack application using agile project management with Jira. This is a combined project for two courses: ENSF-607 and ENSF-608.

## About

In this project, we created a full stack web application for School of Veterinary Medicine, University of Calgary to help manage their animals and process requests for delivering animals to teaching staff. The application is deployed at [https://the-vet-app.netlify.app](https://the-vet-app.netlify.app).

## Project Video

The project demonstration video for ENSF-607 is accessible [here](https://youtu.be/Vf3rUvGpSH0) and for ENSF-608 is accessible [here](https://youtu.be/BXmENCpNndE).

## Folder Structure

![dir tree](images/structure.png)

- [`backend`](backend) - contains back end source code
- [`docs`](docs) - various documentation on the project
- [`frontend`](frontend) - contains front end source code
- [`images`](images) - contains images for README file
- [`sql`](sql) - contains MySQL database scripts

## Sprints

The table below summarizes all the sprint information

| Sprint No | Description                        | Due Date    | Information                                                                                               |
| --------- | ---------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| 1         | Developing epics and user stories  | 15-Oct-2021 | [Jira board](https://uofeng607-888.atlassian.net/jira/software/projects/U888/boards/1/roadmap)            |
| 2         | Designing the wire-frames          | 22-Oct-2021 | [Wireframes PPT](docs/wireframes/Wireframes_Consolidated.pptx)                                            |
| 3         | Designing the required API         | 19-Nov-2021 | [Postman file](docs/api_endpoints/VetApp.postman_collection.json) and [instructions](#how-to-run-backend) |
| 4         | Developing front-end and back-end  | 03-Dec-2021 | [backend](backend) and [frontend](frontend)                                                               |
| 5         | Integrating front-end and back-end | 14-Dec-2021 | [backend](backend) and [frontend](frontend)                                                               |

**Note**: The Jira board is no longer available.

## How to build and run

Below are steps to run the application.

1. Clone the repository to your local machine.

2. Start the MySQL server on your local machine. If you are accessing the MySQL server over a network, edit the property `spring.datasource.url` in the file [application.properties](backend/src/main/resources/application.properties) and replace `localhost` with the server IP address.

3. Connect to your MySQL server using an admin user like `root`.

4. Run the below scripts on the MySQL server in the given order using `root`. These scripts will create a schema `vetdb`, a user `vetapp` with password `vetpassword`, create all necessary tables and load them with some dummy data.

   1. [01_init.sql](sql/01_init.sql)
   2. [02_tables.sql](sql/02_tables.sql)
   3. [03_views.sql](sql/03_views.sql)
   4. [04_dummy_data.sql](sql/04_dummy_data.sql)

5. **To run the backend**

   1. On your machine, navigate to the directory [backend](backend). Running the below command will get the backend server running.

      ```bash
      $ mvn clean spring-boot:run
      ```

   2. To test all the implemented API endpoints, launch Postman on your local machine.

   3. Import [this](docs/api_endpoints/VetApp.postman_collection.json) file into the Postman. You can then run all the API endpoints in the imported folder **VetApp** one by one.

   4. At any given time, you can also verify the db tables using the credentials mentioned in step #4.

6. **To run the frontend**

   1. On your machine, navigate to the directory [frontend](frontend). Running the below command will get the react server running and launch your default browser.

      ```bash
      $ npm install
      $ npm start
      ```

7. Once the testing and verification is done, you may remove all the data from your MySQL server using [10_purge.sql](sql/10_purge.sql).

## Contributors

- [Bhavyai Gupta](https://github.com/zbhavyai)
- [Michael Lee](https://github.com/mlee2021)
- [Sarang Kumar](https://github.com/sarangk3)
