import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { Socket, io } from "socket.io-client";


const URL = " http://localhost:3000";

export const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    const [socket, setSocket] = useState < null | Socket > (null);

    useEffect(() => {
        const socket = io(URL);
        socket.on('send-offer', ({roomId}) => {
            alert("send offer plz");
            socket.emit("offer", {
                sdp: "",
                roomId
            })
        })
        socket.on("offer", ({ roomId, offer }) => { 
            alert("send answer plz");
            socket.emit("answer", {
                roomId,
                sdp: "",
            })
        })
        socket.on("anser", ({ roomId, answer }) => {
            alert("connection is done");
        })
        setSocket(socket)
    },[name])

    return <div>
       hi {name}
    </div>
}