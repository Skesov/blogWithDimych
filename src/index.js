import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { key: 1, text: "Hey, why nobody love me?", likes: 11 },
  { key: 2, text: "It's our new program! Hey!", likes: 24 },
  { key: 3, text: "Bla bla bla", likes: 3 },
];

let friends = [
  { name: "Dimych", userID: 1, key: 1 },
  { name: "Andrew", userID: 2, key: 2 },
  { name: "Sveta", userID: 3, key: 3 },
  { name: "Sasha", userID: 4, key: 4 },
  { name: "Viktor", userID: 5, key: 5 },
  { name: "Valera", userID: 6, key: 6 },
];

let messages = [
  { key: 1, id: 1, text: "Hi" },
  { key: 2, id: 2, text: "How are you?" },
  { key: 3, id: 3, text: "Not Bad" },
  { key: 4, id: 4, text: "Whats up!!!" },
  { key: 5, id: 5, text: "Whazzup!!" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} friends={friends} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
