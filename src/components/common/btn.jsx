import React from 'react'

export const Btn = (props) => {
  const { text } = props  
  return (
    <div class="flex justify-center">
        <button class="mt-6 px-5 py-1 bg-(--btn) text-white rounded-md hover:bg-(--btn-hover) transition ">
          {text}
        </button>
    </div>
  )
}
