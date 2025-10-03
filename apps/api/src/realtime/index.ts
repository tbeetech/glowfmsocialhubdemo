import { Server } from "socket.io";
import { createServer } from "http";
import type { Express } from "express";

export function attachSockets(app: Express, server: ReturnType<typeof createServer>) {
  const io = new Server(server, { cors: { origin: "*" } });

  const reactions = io.of("/reactions");
  reactions.on("connection", (socket) => {
    socket.on("react", (payload) => {
      reactions.emit("update", payload);
    });
  });

  const polls = io.of("/polls");
  polls.on("connection", (socket) => {
    socket.on("subscribe", (pollId) => socket.join(pollId));
  });

  const nowPlaying = io.of("/nowplaying");
  nowPlaying.on("connection", (socket) => {
    socket.emit("status", { show: "Glow Morning Express", dj: "The Morning Crew" });
  });

  const leaderboard = io.of("/leaderboard");
  leaderboard.on("connection", (socket) => {
    socket.emit("update", []);
  });

  return io;
}