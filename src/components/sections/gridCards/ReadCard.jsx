import React from 'react'
import paperclip from "../../../assets/paperclip.png"
import eye from "../../../assets/eye.png"
import read from "../../../assets/read.png"

const ReadCard = () => {
  return (
    <div className="rounded-xl mt-6 pl-7 p-5 bg-[#FFFAEC]">
            <div className="flex justify-between">
                <h1 className="text-[#E95454] text-sm font-semibold">Important Notice</h1>
                <img src={paperclip} className='w-6 h-6' alt="" />
            </div>

            <h1 className='font-medium pt-2 pb-2 text-2xl'>Captain's Bridge Order dated Nov 27, 2020</h1>

            <div className="flex justify-between">
                <div className='flex justify-start items-center'>
                <img src={eye} className='w-6 h-6' alt="" />
                <div className='ml-2 mt-0.5'>1</div>
                </div>

                <button className=''>
                  <img className='w-25 h-10' src={read} alt="" />
                </button>
            </div>
          </div>
  )
}

export default ReadCard
