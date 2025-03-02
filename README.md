# rgane

## Project Setup

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

### Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables. Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    MONGO_URI=<your-mongodb-uri>
    PORT=<your-server-port>
    LINKEDIN_CLIENT_ID=<>
    LINKEDIN_CLIENT_SECRET=<>
    ```

4. Start the backend server:
    ```bash
    npx nodemon server.js 
    ```

## Tech Stack Used

- **MongoDB**: Database
- **Express.js**: Backend framework
- **React**: Frontend library
- **Node.js**: Runtime environment

## Implementation

This project follows the Model-View-Controller (MVC) architecture.

### Backend
The backend is built using Express.js and connected to a MongoDB database. The RESTful APIs handle CRUD operations, user authentication, and other business logic.

### Frontend
The frontend is created using React. It communicates with the backend through RESTful APIs, provides a dynamic user interface, and handles state management.

Feel free to customize this file further to better match your project's requirements!
