import { useEffect, useState } from "react";

const CITES = [
  "Dive into Stories, One Click Away!",
  "Datepress hosts face-to-face events in various cities",
  "Your Next Great Read is Just a Tap Away!",
  "Unlock Worlds, One Book at a Time.",
];

export function Preloader() {
  const [cite] = useState(() => CITES[Math.floor(Math.random() * CITES.length)]);
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const hide = () => {
      setTimeout(() => {
        setFadingOut(true);
        setTimeout(() => setVisible(false), 500);
      }, 500);
    };

    if (document.readyState === "complete") {
      hide();
      return;
    }

    window.addEventListener("load", hide);
    return () => window.removeEventListener("load", hide);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      className="loading"
      style={{ opacity: fadingOut ? 0 : 1, transition: "opacity 500ms" }}
    >
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="round_spinner">
          <div className="spinner"></div>
          <div className="text">
            <img className="preloader-logo" src="/icons/logo-wordmark.svg" alt="LightBooks" />
          </div>
        </div>
        <h2 className="head">Did You Know?</h2>
        <p>{cite}</p>
      </div>
    </div>
  );
}
