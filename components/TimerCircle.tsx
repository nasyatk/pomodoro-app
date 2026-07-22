"use client"

function TimerCircle({progress}: {progress: number}) {
   //dimensi circle
  const size = 300
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
   <svg width={size} height={size}>
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
         stroke={progressStroke}
         strokeWidth={strokeWidth}
         strokeDasharray={circumference}

         strokeDashoffset={strokeDashoffset}
         strokeLinecap="round"
         transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
   </svg>
  )
}

export {TimerCircle}