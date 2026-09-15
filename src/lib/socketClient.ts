import { io } from 'socket.io-client';

// Replace 'http://localhost:3000' with your server's URL
const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Connected to WebSocket server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
});

export default socket;