"use client"

import { useState, useEffect } from "react";
import { TimerCircle } from "@/components/TimerCircle"
import { Input } from "@/components/ui/input"
import { InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"

const DURATION = 1 * 60;

export default function BreakPage() {
   const [timeLeft, setTimeLeft] = useState(DURATION);
   const [isRunning, setIsRunning] = useState(false);

   //minute & second
   const minutes = Math.floor(timeLeft / 60) .toString().padStart(2, "0")
   const seconds = (timeLeft % 60) .toString().padStart(2, "0")
   
   return (
     <main className="w-screen h-screen flex flex-col justify-center items-center gap-6">

{/* Circular progress with timer */}
         <TimerCircle progress={timeLeft / DURATION}>
         <p className="mb-12 text-6xl">
            {minutes}:{seconds}
         </p>
         </TimerCircle>
         
{/* Input logbook */}

         <div className="z-10">
            <ButtonGroup>
               <Input id="input-button-group" placeholder="Log ur progress here" />
               <Button variant="outline">Update</Button>
            </ButtonGroup>
         </div>

     </main>
   )
 } 