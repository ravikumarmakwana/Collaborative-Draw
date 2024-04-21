# Collaborative Whiteboard App

This project is a collaborative whiteboard application that allows users to draw together in real-time. It utilizes HTML, CSS, and JavaScript for the front end, along with Bootstrap for styling, and Socket.IO for real-time communication between users.

## Features

- **Real-Time Collaboration:** Multiple users can draw together on the same whiteboard simultaneously.
- **Customizable Drawing Tools:** Users can choose different colors and brush sizes for their drawings.
- **Eraser Mode:** Includes an eraser mode for removing specific parts of the drawing.
- **Room-based Interaction:** Users can create new whiteboards or join existing ones using unique room IDs.

## Usage

### Creating a New Whiteboard

To create a new whiteboard, simply click the "Create a new Whiteboard" button on the landing page. This will generate a unique room ID for your whiteboard.

### Joining an Existing Whiteboard

To join an existing whiteboard, enter the room ID provided by the creator into the input field and click the "Join" button.

### Drawing on the Whiteboard

Once inside a whiteboard room, you can start drawing by clicking and dragging your mouse on the canvas. Choose different colors and brush sizes using the toolbar at the bottom of the page. You can also switch to eraser mode to remove specific parts of the drawing.

## Technologies Used

- **HTML, CSS, JavaScript:** Front-end development.
- **Bootstrap:** Front-end framework for styling.
- **Socket.IO:** Real-time communication between clients and server.
- **Express:** Web server framework for Node.js.
