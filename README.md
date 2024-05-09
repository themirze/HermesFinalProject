# Hermes Final Project

## Overview
This project serves as a fun and interactive way to learn new facts every day. It features two main components:
- A back-end built with Express.js that fetches facts from an external API.
- A front-end interface that allows users to retrieve and display these facts by clicking buttons.

## Features
- **Random Fact**: Users can get a random fact by clicking the 'Get Random Fact' button.
- **Daily Fact**: Users can get the fact of the day by clicking the 'Get Daily Fact' button.
- **Dynamic URL Update**: The URL updates to reflect the action without reloading the page, using the History API.

## How to Run the Project

### Prerequisites
You need to have Node.js installed on your computer. You can download it from [Node.js official website](https://nodejs.org/).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/themirze/hermes-final-project.git
2. Install the dependencies:
    ```bash
   npm install
3. Start the server:
    ```bash
   npm start
 
## Usage

Once the server is running, you can access the application by opening `index.html` with a server (like Live Server in VS Code) on `http://127.0.0.1:5500`. You can also directly visit:

- `http://localhost:3000/random` to see a random fact in JSON format.
<div align="center">
	<img src="https://i.imgur.com/SZtL5mF.png">
</div>
- `http://localhost:3000/daily` to see the daily fact in JSON format.
<div align="center">
	<img src="https://i.imgur.com/qM3Nk3H.png">
</div>

Click the **Get Random Fact** or **Get Daily Fact** button on the webpage to fetch and display facts.

<div align="center">
	<img src="https://i.imgur.com/0sEb6co.gif">
</div>

## Acknowledgments

Thanks to [uselessfacts.jsph.pl](https://uselessfacts.jsph.pl) for providing the facts API used in this project.
