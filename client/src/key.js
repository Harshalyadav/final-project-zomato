export const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:4000"
  : "/node";

export const CLIENT_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "/";
