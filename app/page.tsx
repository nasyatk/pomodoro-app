import { TimerCircle} from "@/components/TimerCircle";
import { Time } from "@/components/TimerDisplay"

export default function Page(){
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <TimerCircle progress={.9}/>
      <Time timeLeft={46}/>
    </main>
  )
}