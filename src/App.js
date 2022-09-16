import React, { useState } from 'react';
import "./styles.css";

var emojis={
    "😊": "smiling",
    "😳": "disbelief",
    "😔": "sad",
    "👍🏽": "good luck",
    "❤️": "love",
    "🤞🏽": "finger's crossed",
    "🫂":"hug",
    "😂": "hahaha",
    "😜": "naughty",
    "😑": "annoyance"
}

var emojiList=Object.keys(emojis)

export default function App() {
  var [meaning, setMeaning] = useState("")

  function inputDisplay(e) {
    meaning=e.target.value
    if (meaning in emojis) {
      meaning=emojis[meaning]
    }
    else {
      meaning="oops...not available 😥"
    }
    setMeaning(meaning)
  }

  function emojiClick(item) {
    meaning=emojis[item]
    setMeaning(meaning)
  }

  return (
    <div className="App">
      <h1>emotionary :)</h1>
      <input onChange={inputDisplay} type="text" placeholder="enter emoji to search"/>
      <h1> {meaning} </h1>
      <ul>
        {
          emojiList.map(item => {
            return <li onClick={() => emojiClick(item)} style={{cursor:"pointer"}}> {item} </li>;
          })
        }
      </ul>
    </div>
  );
}
