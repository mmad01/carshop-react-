🚗 CarShop React
CarShop React is a frontend application built with React and Create React App, designed to simulate a car dealership interface. It utilizes json-server to provide mock backend data, facilitating development and testing without the need for a real backend.

🛠️ Technologies Used
React

JavaScript

json-server

HTML/CSS


🚀 Getting Started
Prerequisites
Node.js and npm installed on your machine.

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Mohammad-mehdi-Azimi/carshop-react-.git
Navigate to the project directory:

bash
Copy
Edit
cd carshop-react-
Install dependencies:

bash
Copy
Edit
npm install
📦 Running the Application
Start the Mock Backend Server
The application uses json-server to simulate a backend. Ensure you have json-server installed globally:
Stack Overflow

bash
Copy
Edit
npm install -g json-server
Then, start the server:

bash
Copy
Edit
json-server --watch data/db.json --port 8484
This will start the server at http://localhost:8484.

Start the React Application
In a separate terminal window, start the React development server:

bash
Copy
Edit
npm start
The application will open in your default browser at http://localhost:3000.

🖼️ Screenshots
![image](https://github.com/user-attachments/assets/3d883a02-96b3-4c7f-9774-bfb5272aaa7f)

![image](https://github.com/user-attachments/assets/8887d061-f084-411d-96f7-447fc55f1b25)

![image](https://github.com/user-attachments/assets/586857b8-9a35-459d-a424-3e9059c3b9c0)


📁 Project Structure
plaintext
Copy
Edit
carshop-react-/
├── data/
│   └── db.json          # Mock database for json-server
├── public/
├── src/
│   ├── components/      # React components
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
📄 License
This project is licensed under the MIT License.

