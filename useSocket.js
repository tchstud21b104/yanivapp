import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

export const useSocket = ({ userId }) => {
  const ref = useRef();
  const [messages, setMessages] = useState([]);

  const send = (msg, senderId) => {
    ref.current.emit("message", {
      content: msg,
      senderId: senderId,
      userId,
      date: new Date(),
    });
  };

  const onRestartGame = (msg) => {
    console.log(msg);
    ref.current.emit("onRestartGame");
  };

  useEffect(() => {
    const socket = io("https://yaniv-server-yuval.herokuapp.com/", {
      autoConnect: false,
    });

    socket.connect();

    socket.emit("onJoinRoom", "111");
    socket.emit("onGetPlayerName", "app");

    socket.on("onClientDisconnect", () => {
      console.log("disconnected");
    });

    socket.on("onRoomFull", () => {
      console.log("onRoomFull");
    });

    socket.on("onGameStart", () => {
      console.log("onGameStart");
    });

    socket.on("onPlayersStateChange", () => {
      console.log("onPlayersStateChange");
    });

    socket.on("onCardTaken", () => {
      console.log("onCardTaken");
    });

    socket.on("onPileUpdate", () => {
      console.log("onPileUpdate");
    });

    socket.on("onTurnChanged", () => {
      console.log("onTurnChanged");
    });

    socket.on("onPlayerWin", () => {
      console.log("onPlayerWin");
    });

    socket.on("onAssaf", () => {
      console.log("onAssaf");
    });

    ref.current = socket;

    return () => socket.disconnect();
  }, [userId, onRestartGame]);

  return {
    send,
    messages,
    onRestartGame,
  };
};
