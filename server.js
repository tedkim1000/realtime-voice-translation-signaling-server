// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// 클라이언트 연결 시 이벤트 처리
io.on('connection', (socket) => {
  console.log('새 클라이언트가 연결되었습니다.');

  // 클라이언트가 join 메시지를 보낼 때 처리
  socket.on('join', (data) => {
    console.log(`클라이언트 joined: ${JSON.stringify(data)}`);
    // 필요에 따라 룸 관리를 추가할 수 있음
    socket.broadcast.emit('join', data);
  });

  // SDP offer 처리
  socket.on('offer', (data) => {
    console.log('Offer 수신:', data);
    socket.broadcast.emit('offer', data);
  });

  // SDP answer 처리
  socket.on('answer', (data) => {
    console.log('Answer 수신:', data);
    socket.broadcast.emit('answer', data);
  });

  // ICE candidate 처리
  socket.on('candidate', (data) => {
    console.log('Candidate 수신:', data);
    socket.broadcast.emit('candidate', data);
  });

  // 클라이언트 연결 종료 처리
  socket.on('leave', (data) => {
    console.log('클라이언트가 떠났습니다:', data);
    socket.broadcast.emit('leave', data);
  });

  socket.on('disconnect', () => {
    console.log('클라이언트 연결 종료');
  });
});

// 서버 실행
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`시그널링 서버가 ${PORT} 포트에서 실행 중입니다.`);
});


// 새로추가
// server.js
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// 클라이언트 연결 시 이벤트 처리
io.on('connection', (socket) => {
  console.log('새 클라이언트가 연결되었습니다.');

  // 클라이언트가 join 메시지를 보낼 때 처리
  socket.on('join', (data) => {
    console.log(`클라이언트 joined: ${JSON.stringify(data)}`);
    // 필요에 따라 룸 관리를 추가할 수 있음
    socket.broadcast.emit('join', data);
  });

  // SDP offer 처리
  socket.on('offer', (data) => {
    console.log('Offer 수신:', data);
    socket.broadcast.emit('offer', data);
  });

  // SDP answer 처리
  socket.on('answer', (data) => {
    console.log('Answer 수신:', data);
    socket.broadcast.emit('answer', data);
  });

  // ICE candidate 처리
  socket.on('candidate', (data) => {
    console.log('Candidate 수신:', data);
    socket.broadcast.emit('candidate', data);
  });

  // 클라이언트 연결 종료 처리
  socket.on('leave', (data) => {
    console.log('클라이언트가 떠났습니다:', data);
    socket.broadcast.emit('leave', data);
  });

  socket.on('disconnect', () => {
    console.log('클라이언트 연결 종료');
  });
});

// 서버 실행
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//  console.log(`시그널링 서버가 ${PORT} 포트에서 실행 중입니다.`);
//  });
