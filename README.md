# Music App

Live-link: https://music-player-using-mern-stack-frontend.onrender.com

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
![Screenshot 2024-08-28 at 6 07 05 PM](https://github.com/user-attachments/assets/d83d8f66-c6b2-4325-a146-5c850c601a5d)


![Screenshot 2024-08-28 at 6 07 23 PM](https://github.com/user-attachments/assets/dd6bd6e1-7890-4cbf-b58d-c596fb0489b3)

![Screenshot 2024-08-28 at 10 53 25 AM](https://github.com/user-attachments/assets/a8278be6-43a7-4238-8a6a-710d1f3e8b53)

![Screenshot 2024-08-28 at 10 53 43 AM](https://github.com/user-attachments/assets/fe01b932-58d6-49ab-9fa4-b80211b06715)

![Screenshot 2024-08-28 at 10 54 00 AM](https://github.com/user-attachments/assets/73dd7b91-b55e-4ec0-9c48-756b9b7fabe5)

![Screenshot 2024-08-28 at 10 54 10 AM](https://github.com/user-attachments/assets/aa43ff21-c450-4c5a-964d-8234002895ab)

![Screenshot 2024-08-28 at 10 54 36 AM](https://github.com/user-attachments/assets/61675b05-00f5-455d-833b-5a6d53c346ef)
