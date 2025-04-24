# Expense Tracker with Graph 📊  
An interactive expense tracker application that allows users to record, view, and analyze their expenses with a dynamic graph using Chart.js. This is a simple yet powerful project for keeping track of personal finances. While the frontend is fully functional, the backend is still under development.  

## Features ✨  
- Add, delete, and view expenses.  
- Automatically calculate the total expenses.  
- Visualize expenses with a dynamic bar chart using Chart.js.  
- Responsive and user-friendly design.  
- Backend in progress to store and manage expenses using MongoDB.  

## Technologies Used 🛠️  
### Frontend  
- **HTML5**: For structuring the content.  
- **CSS3**: For styling and a clean UI.  
- **JavaScript**: For interactivity and DOM manipulation.  
- **Chart.js**: For rendering the expense bar chart.  

### Backend (Under Development)  
- **Node.js**: Server runtime.  
- **Express.js**: For creating API endpoints.  
- **MongoDB**: For database storage.  
- **Mongoose**: To handle MongoDB interactions.  
- **dotenv**: For environment variables.  
- **CORS**: To handle cross-origin requests.  
- **Body-parser**: To parse incoming JSON requests.  

## Folder Structure 📂  

## Files Breakdown 📄  
### `index.html`  
The main structure of the expense tracker application. Includes:  
- A form to add new expenses.  
- A list to display all expenses.  
- A section for the total expense.  
- A canvas element for the expense graph.  

### `styles.css`  
Contains the styling for a responsive and visually appealing UI. Features:  
- A gradient background.  
- A clean and centered container for the content.  
- Styling for forms, inputs, buttons, and lists.  

### `script.js`  
Handles the following functionalities:  
- Adding and removing expenses dynamically.  
- Updating the total expense.  
- Displaying the expense breakdown using Chart.js.  

### `server.js` (Backend - Under Development)  
The backend will handle storing and retrieving expense data. Current functionality:  
- **API Endpoint `/add-expense`**: Add a new expense to the database.  
- **API Endpoint `/expenses`**: Retrieve all expenses from the database.  
- MongoDB connection is set up with Mongoose.  
**Note:** The backend is still a work in progress and will include enhanced functionality in the future.  

## How to Run Locally 🏃‍♂️  
### Prerequisites  
1. Install [Node.js](https://nodejs.org/).  
2. Install [MongoDB](https://www.mongodb.com/) and set up a local/remote database.  
3. Clone this repository.  

### Steps  
#### Frontend  
1. Open `index.html` in a browser.  
2. Interact with the expense tracker (add, view, delete expenses).  

#### Backend  
1. Navigate to the project directory.  
2. Create a `.env` file and add the MongoDB URI:  
   ```plaintext  
   MONGO_URI=your_mongo_database_uri

# Install Dependencies and Run the Server  
To set up the project, follow these steps:  

```bash
npm install && node server.js  
```
