import React from 'react'
import hand from "../../assets/hand.png"
import ship from "../../assets/ship.png"
import merchant from "../../assets/merchant.png"

const FirstGrid = () => {
  return (
    <section className="bg-white shadow-sm col-span-1">
            <div className='border p-6 pl-8 rounded-xl border-gray-300'>
            <div className="flex justify-between pb-8">
            <img className="size-10" src={hand} alt="" />
            <img className="h-10 w-20" src={merchant} alt="" />
            </div>
          <h2 className="text-md font-medium">Second Officer</h2>
          <h1 className='text-5xl font-bold'>
          Abdul
          <br />
           Ghani
          </h1>
          <p className="text-gray-600 font-semibold text-xs mb-6">Crew ID 86526</p>
          <hr />
          <div className="last-activity">
            <h1 className='py-3 text-2xl font-semibold'>
                My Last Acivity 
            </h1>

            <h1 className='text-[#5D6F88]'>
                Submitted the Deck Log for <b className=''>1200-1600 Watch</b> at 8:16 UTC
            </h1>
          </div>
            </div>
            <div className='border pb-9 mt-3 pl-8 p-6 rounded-xl border-gray-300'>
                <div className="flex mb-2 justify-between items-center">
                    <img className="size-11" src={ship} alt="" />
                    <h1 className='font-bold text-2xl'>SGSIN - NOOSL</h1>
                </div>
                <h1 className='font-semibold'>Statements of Facts</h1>
                <h2>Current Status</h2>
                <h1 className='font-bold py-3 text-[#5A5B6A] text-lg'>Cargo First Lift</h1>
                <hr />
                <div className="flex font-semibold justify-between pt-3">
                    <h2>Next Port Call</h2>
                    <h1 className=''>ETA</h1>
                </div>
                <div className="flex mb-6 text-gray-500 font-semibold justify-between pt-3">
                    <h2>INVTZ1</h2>
                    <h1>Nov 27, 1450 UTC</h1>
                </div>
            </div>
        
        </section>
  )
}

export default FirstGrid
