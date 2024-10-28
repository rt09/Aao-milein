"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require('express');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(http);
const io = new Server(server);
io.on('connection', (_socket) => {
    console.log('a user connected');
});
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
