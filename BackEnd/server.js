const express = require("express");
const bodyParser = require('body-parser')
const {createServer} = require("http");
const path = require("path");
const app = express();
const httpServer = createServer(app);
const {Server} = require("socket.io");
const {ProductController} = require("../BackEnd/Controllers/productController");
let productController = new ProductController();

app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const io = new Server(httpServer, {});

io.on("connection", (socket) => {
    socket.on("send_message", function (message) {
        io.emit("podcast", message)
    })
});

app.get("/products", productController.list);
app.post("/products", productController.create)




const Port = 1000;
httpServer.listen(Port, function () {
    console.log("app start and listen to port " + Port)
})
