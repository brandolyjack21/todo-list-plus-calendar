import React from 'react'

function DeleteAlert() {
  return (
    <>
      <section className="w-screen h-dvh flex justify-center items-center absolute top-0 left-0 backdrop-blur">
          <article className="w-auto h-auto flex items-center gap-2 p-5 bg-red-600 text-gray-50 rounded-2xl">
            <i class="bx bx-check text-xl icon-check">
              <span className="spanBox spanBox2 bg-red-600"></span>
            </i>
            <span className="text-xl">Eliminado</span>
          </article>
        </section>
    </>
  )
}

export default DeleteAlert
