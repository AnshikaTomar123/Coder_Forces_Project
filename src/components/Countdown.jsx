import { useEffect, useState } from "react"

function Countdown() {
  // 🎯 workshop start time (change this)
  const TARGET_DATE = new Date("2026-01-10T10:00:00") // IST time

  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = TARGET_DATE - now

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      }
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 items-center gap-6">

        {/* Text */}
        <div>
          <p className="text-sm uppercase tracking-wide text-blue-200">
            Live Workshop
          </p>
          <h2 className="text-2xl font-semibold mt-2">
            Workshop Starts In
          </h2>
        </div>

        {/* Timer */}
        <div className="flex gap-6 justify-start md:justify-end">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hrs", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Sec", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-blue-800 px-4 py-3 rounded-md text-center"
            >
              <p className="text-lg font-bold">{item.value}</p>
              <span className="text-xs text-blue-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Countdown
