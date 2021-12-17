const express = require("express");
const userRouter = require('./users/users-router');

const server = express();

server.use(express.json());

server.use('/api/users',userRouter)

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});


server.use((err, req, res, next)=> { //eslint-disable-line
  res.status(err.status ||500).json({
      message:err.message
  })
})

module.exports = server;