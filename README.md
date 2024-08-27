# Music App

This project is a full-featured music application built using the MERN stack. It allows users to search for songs using the Spotify API, create playlists, favorite songs, and control playback. Users can sign up and log in using JWT authentication, and their data is securely stored in MongoDB.

## Features

User Authentication: Sign up and login using JWT tokens, with user data stored in MongoDB.
Search Songs: Search for songs using the Spotify API.
Favorite Songs: Mark songs as favorites for easy access later.
Create Playlists: Create and manage playlists.
Playback Control: Play, pause.
Pagination: Navigate between pages of search results.

## Tech Stack
Frontend:

React: Used for building the user interface.
React Router DOM: For handling routing within the app.
Axios: For making HTTP requests to the backend and the Spotify API.
Bootstrap & Bootstrap Icons: For styling and icons.
React Icons: For additional icons.

Backend:
Node.js: JavaScript runtime for the backend.
Express: Web framework for building the RESTful API.
Mongoose: MongoDB object modeling for Node.js.
JSON Web Token (JWT): For secure authentication.
bcrypt: For hashing passwords.
Joi & Joi-Password-Complexity: For data validation.
dotenv: For environment variable management.
cors: For handling Cross-Origin Resource Sharing.

## Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/music-app.git
cd music-app
Install dependencies:

For the backend:

bash
Copy code
cd backend
npm install
For the frontend:

bash
Copy code
cd frontend
npm install
Set up environment variables:

Create a .env file in the backend directory with the following variables:

env
DB=your_mongo_db_uri
JWTPRIVATEKEY=your_jwt_secret
Run the application:

Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend development server:

bash
Copy code
cd frontend
npm start
Access the application:

Open your browser and go to http://localhost:3000.

## screenShots