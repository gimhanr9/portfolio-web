import { useEffect, useState } from 'react';

const useCountdown = (time) => {
  const countdownTime = time;
  const [countdown, setCountdown] = useState(countdownTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }

      if (countdown === 0) {
        setCountdown(countdownTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return countdown;
};

export { useCountdown };
