import React from 'react'
import paperclip from "../../../assets/paperclip.png"
import eye from "../../../assets/eye.png"

const ReadCard = () => {
  return (
    <div className="rounded-xl mt-6 p-5 bg-[#FFFAEC]">
            <div className="flex justify-between">
                <h1 className="text-[#E95454] font-semibold">Important Notice</h1>
                <img src={paperclip} className='w-6 h-6' alt="" />
            </div>

            <h1 className='font-medium py-3 text-xl'>Captain's Bridge Order dated Nov 27, 2020</h1>

            <div className="flex justify-between">
                <div className='flex justify-start items-center'>
                <img src={eye} className='w-6 h-6' alt="" />
                <div className='ml-2 mt-0.5'>1</div>
                </div>

                <button className='bg-[#E95454] text-white rounded-3xl px-9 py-2'>R E A D</button>
            </div>
          </div>
  )
}

export default ReadCard
