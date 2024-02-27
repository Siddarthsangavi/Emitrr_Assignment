
**Emitrr Task (Exploding Kitten)** <br />
**Candidate name: Dipanshu Tiwari** <br />
**Below are the functionalities that I was able to implement successfully in my task.**
 <br />
Exploding Kitten, an online single-player card game built using React for the frontend, Redux for state management, and Golang for the backend. This game features four different card types: Cat 😼, Defuse 🙅‍♂️, Shuffle 🔀, and Exploding Kitten 💣.
 <br /> <br />
How to Play <br />
Start the Game: Click the "Start Game" button to begin the adventure. <br />
 <br /> <br />
Draw a Card: Click on the deck to draw a random card. The drawn card will be removed from the deck.
 <br /> <br />
Winning the Game: The objective is to draw all 5 cards from the deck without encountering an Exploding Kitten. If successful, you win the game!
 <br /> <br />
Card Types <br />
Cat Card 😼: Safe to draw, just a cute cat. <br />
Defuse Card 🙅‍♂️: Can be used to defuse an Exploding Kitten if drawn later. <br />
Shuffle Card 🔀: Restarts the game, shuffling the deck with 5 new cards. <br />
Exploding Kitten Card 💣: Game over if drawn! <br />
User Interaction <br />
Username: Players can create a unique username to enter the game. <br />
Leaderboard <br />
Points: Each game won earns the player one point. <br />
Redis Database: Utilizes Redis as a database to store user points. <br />
Bonus Features <br />
Real-Time Leaderboard Updates
Real-Time Points: Points on the leaderboard are updated in real-time for all users playing simultaneously. <br />
<br/>
**Instructions to run the project locally: <br />**
**1. Frontend (React) <br />**
**Setup <br />**
Open the terminal and navigate to the frontend directory: <br />
```
cd frontend
```
Install project dependencies:
```
npm install
```
Run
Start the development server:
```
npm run dev
```
Open your browser and visit http://localhost:PORT to view the application, where PORT is the port your website is running on. <br />
<br />
**2.Backend (Go) <br />**
Prerequisites: <br />
Make sure you have Redis installed and running locally on your system. <br />
**Setup <br />**
Open the terminal. <br />

Run Redis on your local machine. <br />

Navigate to the backend directory: 
```
cd backend
```
Run <br />
Execute the following command to start the Go server:
```
go run .
```
The server will start, and you can access it at http://localhost:PORT, where PORT is the port your Go server is running on.

