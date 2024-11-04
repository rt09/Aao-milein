"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const UserManager_1 = require("./managers/UserManager");
const express = require('express');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(http);
const io = new Server(server, ({
    cors: {
        origin: '*'
    }
}));
const userManager = new UserManager_1.UserManager();
io.on('connection', (socket) => {
    console.log('a user connected');
    userManager.addUser("randomName", socket);
});
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
