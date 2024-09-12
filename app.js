const express = require('express');
const cors = require('cors');
const { registerUser } = require('./controllers/authController');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// const http = require('http');
// const { Server } = require("socket.io");

// Create HTTP server
// const server = http.createServer(app);

// Create Socket.IO server
// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:5173", // Your React app URL
//         methods: ["GET", "POST"]
//     }
// });

app.use(express.json());
app.use(cors());

// Socket.IO connection handling
// io.on("connection", (socket) => {
//     console.log("A user Connected", socket.id);

//     // Handle user disconnecting
//     socket.on("disconnect", () => {
//         console.log("A user disconnected");
//     });

//     // socket.on("message",msg=>{
//     // socket.emit("new-message",msg);
//     //     console.log("msg is",msg);
        
//     // })
//     socket.on('joinroom',chatid=>{
//         socket.join(chatid);
//         console.log(`User joined chat romm :${chatid}`);
        
//     })
//     socket.on('sendMessage',async ({}))

// });

// Express route
// app.post('/register', function (req, res) {

//     res.status(200).json({ name: "raman" });
//     console.log("login wala chala");
    
// });
app.post('/register',registerUser);
// app.post('/login',loginUser)

// Listen using `server.listen()` to handle both HTTP and WebSockets
//TODO idhr server listen krna hai 
app.listen(PORT, function () {
    console.log(`Server running at Port ${PORT}`);
});
