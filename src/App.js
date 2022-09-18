import React, { useState } from "react";
import "./styles.css";

var emojis = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "👍🏽": "good luck",
  "❤️": "love",
  "🫂": "hug",
  "🤞🏽": "finger's crossed",
  "😂": "hahaha",
  "😜": "naughty",
  "😑": "annoyance"
};

var emojiList = Object.keys(emojis);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputDisplay(e) {
    meaning = e.target.value;
    if (meaning in emojis) {
      meaning = emojis[meaning];
    } else {
      meaning = "oops...not available 😥";
    }
    setMeaning(meaning);
  }

  function emojiClick(item) {
    meaning = emojis[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>emotionary :)</h1>
        <input
          onChange={inputDisplay}
          type="text"
          placeholder="enter emoji to search"
        />
        <h1 className="meaning"> {meaning} </h1>
        <ul>
          {emojiList.map((item) => {
            return <li onClick={() => emojiClick(item)}>{item}</li>;
          })}
        </ul>
      </div>
      <footer>
        <h1>nbadolla</h1>
        {/* <br> */}

        {/* <a href="mailto:badollanayan@gmail.com" className="mail"><i className="fas fa-solid fa-envelope"></i> badollanayan@gmail.com</a>
        <br><br> */}

        <a
          href="https://twitter.com/NBadolla"
          target="_blank"
          rel="noreferrer"
          className="links"
        >
          <i className="fab fa-brands fa-twitter fa-2x"></i>
        </a>

        <a
          href="https://github.com/nayanbadolla"
          target="_blank"
          rel="noreferrer"
          className="links"
        >
          <i className="fab fa-brands fa-github fa-2x"></i>
        </a>

        <a
          href="https://linkedin.com/in/nayan-badolla-043187182"
          target="_blank"
          rel="noreferrer"
          className="links"
        >
          <i className="fab fa-brands fa-linkedin fa-2x"></i>
        </a>

        {/* <a href="https://www.instagram.com/mindofillusions/?hl=en" target="_blank" rel="noreferrer" className="links">Instagram</a> */}
      </footer>
    </div>
  );
}
