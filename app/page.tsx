"use client"
import { useState, useEffect } from "react"

import { TimerCircle} from "@/components/TimerCircle";
import { Time } from "@/components/TimerDisplay"
import { Button } from "@/components/ui/button";

const DURATION = 25 * 60

export default function Page(){

  const [timeLeft, setTimeLeft] = useState(DURATION)
  const [isRunning, setIsRunning] = useState(false)

  const progress = timeLeft / DURATION

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])
  //pelajari lagi isi use effect ini

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <TimerCircle progress={progress}/>
      <Time timeLeft={timeLeft}/>
      <div className="flex gap-3">
        {/*start*/}
        <Button variant="outline" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </Button>
        {/*reset*/}
        <Button variant="destructive" onClick={() => { setIsRunning(false); setTimeLeft(DURATION) }}>
          Reset
        </Button>
      </div>

    </main>
  )
}