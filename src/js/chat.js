`use strict`
const socket = io();
console.log('socket',socket);

//메시지 강제 전달 socket.emit('채팅방이름',메시지);
socket.emit("chatting", "from front");