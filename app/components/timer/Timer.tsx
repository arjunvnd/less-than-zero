"use client";
"// @ts-nocheck";
import React, { useEffect, useState } from "react";
import styles from "./timer.module.css";

const SingleCounter = ({
  value,
  text,
}: {
  value: number | string;
  text: string;
}) => {
  return (
    <div className={styles["single-count"]}>
      <span className={styles.count}>{value}</span>
      <p>{text}</p>
    </div>
  );
};

// Example usage:
const targetDate = "2025-06-06T00:00:00"; // Set your target date here

const Timer = () => {
  const [counter, setCounter] = useState({
    days: "100",
    hours: "12",
    minutes: "60",
    seconds: "60",
  });
  useEffect(() => {
    function startCountdown(targetDate: string): void {
      const target = new Date(targetDate);

      const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        // If the target date has passed, stop the countdown
        if (difference <= 0) {
          clearInterval(interval);
          console.log("Countdown finished!");
          return;
        }

        // Calculate the days, hours, minutes, and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const formattedHours = String(hours).padStart(2, "0");
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");

        // Log the countdown to the console

        setCounter({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          days,
          hours: formattedHours,
          minutes: formattedMinutes,
          seconds: formattedSeconds,
        });
      }, 1000); // Update every 1 second
    }
    startCountdown(targetDate);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <SingleCounter text="Days" value={counter.days} />
        <SingleCounter text="Hours" value={counter.hours} />
        <SingleCounter text="Minutes" value={counter.minutes} />
        <SingleCounter text="Seconds" value={counter.seconds} />
      </div>
    </>
  );
};

export default Timer;
