import { useState } from "react";
import "./style.css";

function App() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [hearts, setHearts] = useState([]);

  const startSurprise = () => {
    setStarted(true);

    const ummas = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: Math.random() * 95,
      top: Math.random() * 85,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 3,
      size: 16 + Math.random() * 12,
      type: i % 4 === 0 ? "pop" : "rain",
    }));

    setMessages(ummas);

    const heartList = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      angle: Math.random() * 360,
      distance: 100 + Math.random() * 250,
      delay: Math.random() * 0.7,
    }));

    setHearts(heartList);
  };

  return (
    <div className="app">

      {!started && (
        <div className="welcome">
          <div className="main-heart">❤️</div>

          <h1>For My Bou</h1>

          <p>Ekta chotto surprise ache... 🥺</p>

          <button onClick={startSurprise}>
            Click Here ❤️
          </button>
        </div>
      )}

      {started && (
        <>
          <div className="center-content">
            <div className="big-heart">❤️</div>

            <h1>Ummaaaa, Bou 😘</h1>

            <p>200 ta Ummaaaa shudhu tomar jonno ❤️</p>
          </div>

          <div className="animation-layer">

            {messages.map((item) => (
              <span
                key={item.id}
                className={`umma ${item.type}`}
                style={{
                  left: `${item.left}%`,
                  top:
                    item.type === "pop"
                      ? `${item.top}%`
                      : undefined,
                  animationDelay: `${item.delay}s`,
                  animationDuration: `${item.duration}s`,
                  fontSize: `${item.size}px`,
                }}
              >
                {item.id % 3 === 0
                  ? "Ummaaaa 😘"
                  : "Ummaaaa ❤️"}
              </span>
            ))}

            {hearts.map((heart) => (
              <span
                key={heart.id}
                className="burst-heart"
                style={{
                  "--angle": `${heart.angle}deg`,
                  "--distance": `${heart.distance}px`,
                  animationDelay: `${heart.delay}s`,
                }}
              >
                ❤️
              </span>
            ))}

          </div>
        </>
      )}

    </div>
  );
}

export default App;