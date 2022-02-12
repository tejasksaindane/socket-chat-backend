const express = require("express");
const app = express();

//TODO single line
// const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    // methods: ["GET", "POST"],
    // allowHeaders: ["my-custom-header"],
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("What is Socket:", socket);
  console.log("Socket is active to be connected");

  socket.on("chat", (payload) => {
    console.log("What is payload", payload);
    io.emit("chat", payload);
  });
});

// app.listen(5000, () => console.log("server is active and running..."));

server.listen(5000, () => {
  console.log("server is listening at port 5000...");
});
