"use client"

//ts config
import { COLOR_PROGRESS } from "@/lib/config"
import React from "react"

//dimensi circle
const size = 250
const strokeWidth = 6
const radius = (size - strokeWidth) / 2
const circumference = 2 * Math.PI * radius

//style circle
const bgFill = "none"
const bgStroke = "#333333"
const progressFill = "none"
const progressStroke = "#FF2D55"

//define type
interface TimerCircleProps {
   progress: number
   children?: React.ReactNode
 }

//component
function TimerCircle({progress, children}: TimerCircleProps) {

  const strokeDashoffset = circumference * (1 - progress)

  return (
   <div>
      <svg width={size} height={size}
      className="flex justify-center"
      >
         {/* Track (background circle) */}
         <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill={bgFill}
            stroke={bgStroke}
            strokeWidth={strokeWidth}
         />
         {/* Progress circle */}
         <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill={progressFill}
            stroke={COLOR_PROGRESS}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
         />

      </svg>

         <div className="absolute flex justify-center items-center inset-0 outline outline-red-600">
            {children}     
         </div>

   </div>
  )
}

export {TimerCircle}



//circle dikasi prop children buat wadah Time 