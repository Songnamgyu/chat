//express 라이브러리 사용한다는 설정
const express = require("express");
//express 실행할 내용을 app에 담기
const app = express();
//서버 주소를 위한 설정
const path = require("path");

//webSocket를 사용하기 위해 http 가져오기
const http = require("http");
//server 변수 설정
const server = http.createServer(app);

//socketIO 설정
const socketIO = require('socket.io')
const io = socketIO(server);

console.log(__dirname);
//경로알려주기
app.use(express.static(path.join(__dirname,"src")));
//환경설정
const PORT = process.env.PORT || 3000;

//io 통해서 메시지 받기
io.on("connection", (socket) => {
   //chat.js에서 보낸 socket 채팅 내용 받기 -> socket.on('채팅방이름',()=>{});
    socket.on("chatting", (data) => {
        console.log("data",data);
    })
})

//서버 실행 명령어 app.listen('포트',명령어);
server.listen(PORT, () => console.log(`server is Running ${PORT}`));