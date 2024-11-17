# AI Bias Detective

AI Bias Detective is an interactive quiz game designed to raise awareness about biases in AI systems. Inspired by Joy Buolamwini's research and the "Unmasking AI" book, players are invited to investigate various cases to detect bias in AI systems. This project uses **React** and **Tailwind CSS** to create an engaging user experience.

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Technologies Used](#technologies-used)
- [License](#license)

## Getting Started
To get a copy of this project up and running on your local machine, follow these steps.

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine. You can check if they are installed by running the following commands:

```sh
node -v
npm -v
```
If Node.js or npm is not installed, you can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the Repository**:

   Clone this repository to your local machine using the following command:

   ```sh
   git clone https://github.com/your-username/ai-bias-detective.git
   ```

   Replace `your-username` with your GitHub username.

2. **Navigate to the Project Directory**:

   ```sh
   cd ai-bias-detective
   ```

3. **Install Dependencies**:

   Run the following command to install all the required npm packages:

   ```sh
   npm install
   ```

   This will install all the dependencies listed in `package.json`, including **React** and **Tailwind CSS**.

4. **Install Tailwind CSS** (if not installed already):

   Run the following command to install Tailwind CSS:

   ```sh
   npm install -D tailwindcss
   npx tailwindcss init
   ```

5. **Configure Tailwind CSS**:

   Add the following Tailwind imports to your `src/index.css` file:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Set Up Tailwind Configuration**:

   Make sure your `tailwind.config.js` looks like this:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

### Running the App

1. **Start the Development Server**:

   Run the following command to start the development server:

   ```sh
   npm start
   ```

   This will start the application, and you can view it by navigating to `http://localhost:3000` in your web browser.

2. **Play the Game**:

   Once the server is running, you can interact with the app and begin investigating cases of AI bias by clicking on **"Begin Investigation"**.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **JavaScript (ES6)**: Used for application logic and state management.
- **Lucide-react**: Used for rendering icons in the UI.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


