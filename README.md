# Random Joke API

Welcome to the **Random Joke API**! This API serves random jokes in three different categories: English, Hindi, and Hinglish. It provides an easy way for users to get jokes via HTTP requests, and the jokes can be extended through contributions.

## Features
- Fetch random jokes from different categories.
- Categories supported: English, Hindi, Hinglish.
- Simple and easy-to-use API.

## How to Use

### Prerequisites
- Node.js (v14 or higher) must be installed.

### Steps to Run

1. Clone the repository:
```bash
$ git clone https://github.com/chaurasiya-sachin/get-random-joke-api.git
```

2. Navigate to the project directory:
```bash
$ cd get-random-joke-api
```

3. Install dependencies:
```bash
$ npm install
```

4. Run the server:
```bash
$ node index.js
```

5. Open your browser or use Postman to hit the following routes:
- Fetch any random joke:
  ```bash
  GET http://localhost:5000/
  ```
- Fetch random English joke:
  ```bash
  GET http://localhost:5000/english
  ```
- Fetch random Hinglish joke:
  ```bash
  GET http://localhost:5000/hinglish
  ```
- Fetch random Hindi joke:
  ```bash
  GET http://localhost:5000/hindi
  ```

## How to Contribute
You are welcome to contribute to this project and help make it better! Here's how you can do it:

### Step 1: Fork the Repository
Click on the 'Fork' button at the top of the repository to create your own copy.

### Step 2: Clone the Forked Repository
Clone your forked repository to your local machine:
```bash
$ git clone https://github.com/YOUR-USERNAME/get-random-joke-api.git
```

### Step 3: Create a Branch
Create a new branch for your changes:
```bash
$ git checkout -b my-feature-branch
```

### Step 4: Make Your Changes
Make the necessary changes in the codebase.

### Step 5: Commit Your Changes
After making changes, commit them:
```bash
$ git add .
$ git commit -m "Description of changes"
```

### Step 6: Push to GitHub
Push the changes to your forked repository:
```bash
$ git push origin my-feature-branch
```

### Step 7: Create a Pull Request
Go to your repository on GitHub, and you'll see the option to create a pull request. Click that button, fill in the details, and submit your pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

