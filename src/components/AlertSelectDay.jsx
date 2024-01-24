import React from 'react'

function AlertSelectDay() {
  return (
    <>
      <section className="w-screen h-dvh flex justify-center items-center absolute top-0 left-0 bg-slate-500/10 backdrop-blur">
        <article className="w-3/5 h-auto flex justify-center items-center gap-2 py-5 bg-yellow-400 text-gray-900 rounded-2xl px-5 shadow-xl shadow-black/50">
          <span className="text-sm font-semibold">Para agregar un evento, haz click en el día que prefieras. <span className="text-2xl">🤔</span></span>
        </article>
      </section>
    </>
  )
}

export default AlertSelectDay
