

function Time({timeLeft} : {timeLeft : number}){

   const minutes = Math.floor(timeLeft / 60) .toString().padStart(2, "0")
   const seconds = (timeLeft % 60) .toString().padStart(2, "0")

   return(
      <p>{minutes}:{seconds}</p>
   )
}

export {Time}