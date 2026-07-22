"use client"
import { COLOR_PROGRESS } from "@/lib/config"
import React from "react"

interface TimerCircleProps {
   progress: number
   children?: React.ReactNode
 }

function TimerCircle({progress, children}: TimerCircleProps) {
   //dimensi circle
  const size = 250
  const strokeWidth = 12
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  const strokeDashoffset = circumference * (1 - progress)

   //style circle
  const bgFill = "none"
  const bgStroke = "#333333"
  const progressFill = "none"
   const progressStroke = "#FF2D55"

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

         <div className="absolute flex justify-center items-center inset-0
         outline outline-red-600">

            {children}
         
         </div>

   </div>
  )
}

export {TimerCircle}


//circle dikasi prop children biar di page lebih simpel