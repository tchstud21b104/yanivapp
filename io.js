import io from "socket.io-client";

const socket = io("https://yaniv-server-yuval.herokuapp.com/", {
  autoConnect: false,
});

socket.connect();

socket.emit("onJoinRoom", "111");
socket.emit("onGetPlayerName", "app");

socket.on("onClientDisconnect", () =>
  alert("Sorry, the game is over.\nthe other player has left the game.")
);

socket.on("onRoomFull", (roomName) =>
  alert(`Room ${roomName} is full, client - disconnected`)
);

socket.on("onGameStart", (cards) => {
  console.log("onGameStart");
});
