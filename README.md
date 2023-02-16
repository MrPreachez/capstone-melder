# Project Name: Melder

## Description:
Melder is a qualitative survey and feedback tool that allows for the intake of multiple user inputs per project and the batch processing of those inputs along with a response prompt to generate a summary or analysis statement of that feedback. Functionally It uses Create React App on the client side, with express and knex on the node.js server.  The server is connected to a MySql database.  From the server the responses and prompt are sent to OpenAI's api for proecessing.

#### note: This project includes a client and server installation
### disclaimer:  In this projects current state there is a chance there may be an issue with initial rendering if there is no data initially.  I've included a small section of json data to use as a seed to avoid that issue. 

## Table of Contents

* Installation - Front End/
* Usage/
* Scripts/
* Installation - Server Side
* Usage
* Scripts
* Lessons 
* Contributing



## Client side Installation
To get started with the project, follow these steps:

Clone the repository: git clone https://github.com/[username]/[project-name].git
Install dependencies: npm install

### Usage
Setup a .env file as per the .env.sample including your localhost.8080 as the address.
To start the app in development mode, run npm start and open http://localhost:3000 in your browser.

### The following packages are used on the client side:

* axios
* react
* react-router-dom
* sass
* pony-props - carousel
* react-type-animation(note: this package has a bug that has no current solution, it is the cause of the error signal.  A temporary fix has been accomplished to keep the warning from showing in terminal and when a fix is found at a later date, this will be updated.)

### Scripts
The project includes the following scripts:

* start: starts the app in development mode
* build: builds the app for production
* test: runs the test suite
* eject: ejects from Create React App

## Setup and Installation for Server

* Prerequisites
* Node.js and npm
* MySQL

### Installation
* Clone the repository and navigate to the server directory
* Run npm install to install the required dependencies listed in the package.json file.

### Database Setup
* Create a MySQL database for the application
* Update the knexfile.js file with your MySQL database credentials

* Create a .env file and setup like contents of the .env.sample file.  Update the DATABASE_URL with your MySQL credentials.

### Migrations
To set up the database tables, run the following commands:

* npx knex migrate: (to run the first migrations.)
* To migrate the database, run npm run migrate
* To undo the last migration, run npm run migrate:down
* To rollback all migrations, run npm run migrate:rollback
* To seed the database, run npm run seed

### Usage
* To start the server, run npm start
* To start the server in development mode with nodemon, run npm run dev



### Dependencies
* axios: ^1.3.2
* cors: ^2.8.5
* dotenv: ^16.0.3
* express: ^4.18.2
* knex: ^2.4.2
* mysql: ^2.18.1
* openai: ^3.1.0

### Endpoints
* /project: POST to create a new project, GET to retrieve all projects
* /project/:id: GET to retrieve a specific project, POST to add a new result for a project
* /input: POST to add a new response to a project
* /project/:id/result: GET to retrieve the result for a project
* /project/:id/all: GET to retrieve all data for a project
* /responses/:id: GET to retrieve all responses for a project
* /project/delete/:id: DELETE to delete a project

### JSON data for seeding or thunderclient post
This block may be used to create a project
```json
[  "creator_name": "Damon",
  "project_name": "Capstone Reflections",
  "question": "Describe your experience with the capstone project, what surprises did you have, what breakthroughs did you make and what would you do different next time?",
  "response_type": "context: graduation project reflections,\nquestion: Describe your experience with the capstone project, what surprises did you have, what breakthroughs did you make and what would you do different next time?,\nreply length: max 1000 words,\ntone: polite and light humored,\nperspective: 3rd person objective, overview summary report\noutcome: summarize overall experience, leave some relevant funny solutions for future software dev cohorts."
  ]
  ```
  This code can be used to seed responses.
```json 
[
  {
   
    "respondent_name": "Damon999",
    "response_input": "Wow!  I have to say i loved the process all in all, but i was definitely surprised by the styling aspect. getting my head around that without any style guides was hard.  Once i got into the flow i really start feeling the inspiration and really noticed how much inspiration can fuel your work.  Next time, i might do a bit more style planning, find some useful tool for visually laying out ahead of time.",
  
  },
  {
    
    "respondent_name": "ted",
    "response_input": "Loved it, feeling so inspired.  bringing all the pieces back together and applying them was so great. and to see myself actually figure it out, on my own, well with a bunch of help from my buddy google obviously, was so rewarding, i did learn something in the bootcamp after all, hehe.  ready for another challenge, next time i'll do a little more upfront planning and really value that process.",
  },
  {
    "response_input": "Well, I have to say it feels great to have that under the belt.   Thankfully i was able to remember, or reference all my notes and search for a bunch more information and managed to get it all working in the end.  I was pretty inspired by my project and i think that fuelled a couple late nights thankfully.  I'm not super stoked on the way it looks, but atleast its doing all the cool things i wanted it too.",
  }
]
```

## Lessons learned
Overall, this project challenged me to explore new areas that were incredibly rewarding. I encountered a couple of multi-step processes that required serious thought and trial and error. One such process was creating a new project, which included a couple of unfamiliar steps. For instance, I had to create a project and send its ID immediately in the response to use it for the call right away on the next page.

Another challenge was the API call to OPENAI, which had a learning curve of its own. However, through this process, I also learned how to make a call to a database to map content out beforehand, bundle all that information, structure a prompt to send to the API, receive a result, and store it back in the database.

On my results page, I initially set up three useEffect hooks to retrieve all the data for the page. However, this approach caused a number of issues, such as inconsistent success with API calls that would often time out. I realized that making the call possible with one inner join would be more efficient. Although I was able to get the inner join call to work with most of the required data, I encountered complications with mapping over the accessible data to show the responses. I plan to revisit this issue in the future to optimize the call.

In the end, I learned how to use .promise to make the call, which resolved the issues I was facing.

While i've been able to get this page up and running on Heroku and Netlify, it has come with another number of challenges i have run out of time to address.  i was looking forward to creating a project that some class members could take part in but will have to pass for now.  

Lastly, there were a handful of challenges in working woth the OpenAl api.  When it was working it was great, but I lost some considerable time to trying to understand it complexities and causes for malfunction.  That said, i'm stoked on the foundation created and look forward to keep playing.   
<img width="1630" alt="Screenshot 2023-02-15 at 8 04 43 PM" src="https://user-images.githubusercontent.com/103340031/219267723-36d74828-4277-4985-9df6-c737cb969c6b.png">

<img width="1202" alt="Screenshot 2023-02-15 at 8 06 31 PM" src="https://user-images.githubusercontent.com/103340031/219267920-3a756b34-9310-4b1f-a4a3-4b5873f0d574.png">


<img width="1202" alt="Screenshot 2023-02-15 at 8 18 27 PM" src="https://user-images.githubusercontent.com/103340031/219268209-08fa35ee-29dd-4d78-9831-0be73ca9e8f8.png">




### Contributing to Melder
Contributions are welcome! To contribute to the project, follow these steps:

Fork the repository
Create a new branch: git checkout -b feature/your-feature-name
Make your changes and commit them: git commit -m 'Add your commit message here'
Push to the branch: git push origin feature/your-feature-name
Submit a pull request



