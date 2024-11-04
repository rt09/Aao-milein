"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomManager = void 0;
let GLOBAL_ROOM_ID = 1;
class RoomManager {
    rooms;
    constructor() {
        this.rooms = new Map();
    }
    createRoom(user1, user2) {
        const roomId = this.generate();
        this.rooms.set(roomId.toString(), {
            user1,
            user2,
        });
        user1.socket.emit("new-room", {
            type: "send-offer",
            roomId
        });
    }
    onOffer(roomId, sdp) {
        const user2 = this.rooms.get(roomId)?.user2;
        user2?.socket.emit("offer", {
            sdp,
            roomId
        });
    }
    onAnswer(roomId, sdp) {
        const user1 = this.rooms.get(roomId)?.user1;
        user1?.socket.emit("answer", {
            sdp,
            roomId
        });
    }
    generate() {
        return GLOBAL_ROOM_ID++;
    }
}
exports.RoomManager = RoomManager;
