# User Management System  
<hr>  

## Tools and Technologies Used:  
**FrontEnd** : HTML5, CSS3, EJS  
**Server**: Node.js, Express.js  
**Database**: MongoDB (NoSQL)  
**API**: Axios  
**ODM**: Mongoose   
**Logger**: Morgan  
**Postman**
<hr>  

## Npm Packages Used:  
**Axios**: For making API requests  
**Dotenv**: For storing sensitive information  
**Body-parser**: For getting data from the front-end to use on the back-end  
**Nodemon**: To restart the server automatically and watch for changes  
**EJS**: For writing JS code in HTML file  
**Express**: For creating routes and rendering pages  
**Mongoose**: Middleware for connecting to MongoDB Atlas (Used the Mongo cloud service, not my local storage)  
**Morgan**: To log any messages on the console.  
<hr>  
  
## Running the project:  
```
npm install .
```
<hr>  
  
## Executing the project:  
Create config.env file and create PORT and MONGO_URI variables and specify their values and then run:  
```
npm start
```  
<hr>  
  
## Routes:  
1) **GET**: "/": Home route, all users are displayed in tabular format.  
2) **GET**: "/new-user": Go to the page to add a new user to the system.  
3) **GET**: "/update-user": Go to the page to update the information of an existing user.
4) **POST**: "/api/users": Database route, create a new user and add that user to the database.  
5) **GET**: "/api/users": Database route, find all the users in the database.
6) **PUT**: "/api/users/:id": Database route, used to update the information of an existing user by id in the database.  
7) **DELETE**: "/api/users/:id" Database route, delete a user from the database by id.  
<hr>  
  
## What I learned from this project:  
- This is my first full-stack project where I used front-end technologies, a Node.js runtime environment and a NoSQL database.  
- This project is special because I got the chance to see the client-server architecture in live action and also got to play around with it.  
- You can say that this project has been made by using the MJEN stack (MongoDB, JavaScript, Express.js, Node.js).  
<hr>  
  
## Notes:  
- The buttons on the website don't seem to be working as of now.   
- However, the app runs perfectly and as an alternative, you can test the app on an API platform like Postman to see the desired results.  

