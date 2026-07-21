"use client"

import { useState, useEffect } from "react"

// Durasi timer dalam detik (25 menit)
const DURATION = 25 * 60

export default function Home() {
  // Sisa waktu dalam detik
  const [timeLeft, setTimeLeft] = useState(DURATION)
  // Apakah timer sedang berjalan
  const [isRunning, setIsRunning] = useState(false)

  // Ukuran SVG
  const size = 300
  const strokeWidth = 12
  const radius = (size - strokeWidth) / 2

  // Keliling lingkaran (2πr) — panjang total garis circle
  const circumference = 2 * Math.PI * radius

  // Progress 0-1: 1 = penuh, 0 = habis
  const progress = timeLeft / DURATION

  // Seberapa banyak garis yang "disembunyikan" — makin kecil timeLeft, makin banyak yang hilang
  const strokeDashoffset = circumference * (1 - progress)

  useEffect(() => {
    // Kalau timer tidak jalan, tidak perlu jalanin interval
    if (!isRunning) return

    // Jalanin fungsi setiap 1000ms (1 detik)
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        // Kalau tinggal 1 detik atau kurang, stop
        if (prev <= 1) {
          clearInterval(interval) // matiin interval
          setIsRunning(false)     // ubah state jadi berhenti
          return 0                // pastiin berhenti di 0
        }
        return prev - 1 // kurangi 1 detik
      })
    }, 1000)

    // Cleanup: matiin interval kalau component unmount atau isRunning berubah
    return () => clearInterval(interval)
  }, [isRunning]) // useEffect ini re-run setiap kali isRunning berubah

  // Format detik jadi MM:SS
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0")
  const seconds = (timeLeft % 60).toString().padStart(2, "0")

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-6">
      <svg width={size} height={size}>
        {/* Lingkaran background (abu-abu) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        {/* Lingkaran progress (biru) — berubah seiring waktu */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference} // total panjang garis
          strokeDashoffset={strokeDashoffset} // bagian yang disembunyikan
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // mulai dari atas, bukan kanan
        />
        {/* Teks countdown di tengah */}
        <text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-4xl font-bold"
          fill="currentColor"
        >
          {minutes}:{seconds}
        </text>
      </svg>

      <div className="flex gap-3">
        {/* Satu tombol untuk start dan pause */}
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        {/* Reset: stop timer dan kembalikan ke durasi awal */}
        <button onClick={() => { setIsRunning(false); setTimeLeft(DURATION) }}>
          Reset
        </button>
      </div>
    </main>
  )
}