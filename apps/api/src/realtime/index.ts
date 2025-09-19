import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';

export function attachSockets(httpServer: HttpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3001'],
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    console.log('Client connected');
  });

  return io;
}