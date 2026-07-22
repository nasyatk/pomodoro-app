interface TimeProps {
   timeLeft: number;
   className?: string; //Tambahkan prop opsional
 }

function Time({timeLeft, className=""} : TimeProps){

   const minutes = Math.floor(timeLeft / 60) .toString().padStart(2, "0")
   const seconds = (timeLeft % 60) .toString().padStart(2, "0")

   return(
      <div className="mb-12">
         <p className={className}>{minutes}:{seconds}</p>
      </div>
   )
}

export {Time}

//bikin interface
//tambahkan props className tailwind ke Time