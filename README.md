# 🛡️ JWT Full-Stack SignUp & SignIn App 🚀

Welcome to the **JWT Full-Stack SignUp & SignIn App**! This project demonstrates a simple sign-up and sign-in functionality using JSON Web Tokens (JWT) for secure authentication in a full-stack environment. With this app, users can sign up, sign in, and view their profile data securely.

## 🔧 Features

- **Sign Up**: Register a new user with a username and password.
- **Sign In**: Authenticate a user and receive a secure JWT token.
- **User Profile**: View the logged-in user's data after signing in.
- **Logout**: Log out and remove the authentication token.

## 📚 Technologies Used

- **Frontend**: HTML, CSS, JavaScript (Axios)
- **Backend**: Node.js, Express
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: In-memory user store (for demonstration purposes)

## 📥 Installation Guide

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Ankit-Singh1234/JWT-Full-Stack-signup-signin.git
Step 2: Install Dependencies
Navigate to the project folder and install the required dependencies:

bash
Copy
Edit
cd JWT-Full-Stack-signup-signin
npm install
Step 3: Run the Application
Start the server:

bash
Copy
Edit
npm start
The backend will now be running at http://localhost:3000.

Step 4: Open the Frontend
Open the index.html file in your browser to use the application.

⚙️ How It Works
SignUp: When you sign up, your credentials (username and password) are stored in memory (this is temporary; for production, use a database).
SignIn: During sign-in, if the credentials are correct, a JWT token is generated and sent back as a response.
User Profile: Once logged in, the frontend makes an authenticated request to fetch the user's data using the stored token.
Logout: The logout functionality removes the token from local storage and clears the user information.
📊 API Endpoints
POST /signup: Register a new user

Request Body: { username, password }
Response: { msg: "You have signed up" }
POST /signin: Sign in a user

Request Body: { username, password }
Response: { token }
GET /me: Get logged-in user's profile

Request Headers: { token }
Response: { username, password }
🚨 Important Notes
The application uses JWT tokens for authentication. Make sure to store the token securely in your browser (localStorage).
In-memory storage: The user data is temporarily stored in the server memory. For production applications, you should integrate a database (e.g., MongoDB, MySQL).
The app is built with simple front-end and back-end logic for educational purposes.
🔑 JWT Authentication Flow
Sign Up: User provides username and password.
Sign In: User signs in with the credentials, and a JWT token is generated.
Access Profile: The token is sent as a header to request the logged-in user's information.
Logout: Removing the token from localStorage effectively logs the user out.
💻 Demo

👥 Contributing
Feel free to fork the repository, make changes, and submit pull requests. If you encounter any issues, please open an issue in the GitHub repository.

📜 License
This project is open-source and available under the MIT License.
