import { useEffect, useState } from "react";

const DEAL_DURATION_MS = (2 * 24 + 18) * 60 * 60 * 1000 + 45 * 60 * 1000 + 30 * 1000;

function splitDuration(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export function CountdownTimer() {
  const [deadline] = useState(() => Date.now() + DEAL_DURATION_MS);
  const [remaining, setRemaining] = useState(() => splitDuration(deadline - Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(splitDuration(deadline - Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <div className="number">{pad(remaining.days)}</div>
        <div className="label">Days</div>
      </div>
      <div className="countdown-item">
        <div className="number">{pad(remaining.hours)}</div>
        <div className="label">Hours</div>
      </div>
      <div className="countdown-item">
        <div className="number">{pad(remaining.minutes)}</div>
        <div className="label">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="number">{pad(remaining.seconds)}</div>
        <div className="label">Seconds</div>
      </div>
    </div>
  );
}
