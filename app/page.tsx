"use client";
import { useRouter } from "next/navigation"
//router

import { useState, useEffect } from "react";
import { Time } from "@/components/TimerDisplay";
import { Button } from "@/components/ui/button";
import {TimerCircle} from "@/components/TimerCircle";

const DURATION = 1 * 60;

export default function Page() {
  const router = useRouter()
  //router
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [isRunning, setIsRunning] = useState(false);

  const progress = timeLeft / DURATION;

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);


  useEffect(() => {
    if (timeLeft === 0) {
      router.push(`/break?duration=${DURATION / 60}`)
    }
  }, [timeLeft])

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-6">

{/* circular progress with timer */}
        <TimerCircle progress={progress}>
          <Time timeLeft={timeLeft} 
          className="text-6xl"/>
        </TimerCircle>

{/* tombols */}
      <div className="flex gap-2 z-10">
        <Button 
          variant="outline" className='w-25'
          onClick={() => setIsRunning((prev) => !prev)}>
              {isRunning ? "Pause" : "Start"}
        </Button>

        <Button
          variant="destructive"
          onClick={() => {
              setIsRunning(false);
              setTimeLeft(DURATION);
              }}>
          Reset
        </Button>

      </div>
    </main>
  );
}

//pelajari setInterval lagi