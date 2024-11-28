import React from 'react'
import refresh from "../../assets/refresh.png"
import ReadCard from './gridCards/ReadCard'
import Card from './gridCards/Card'

const dummyData =[{
    id : 0,
    title : "Second Officer Oliver",
    description : "submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist",
    details : "UTC 1105 | LT +6:30"
}
,
{
    id : 1,
    title : "Third Engineer Edward",
    description : "submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist",
    details : "UTC 1055 | LT +6:30"
},
// {
//     id : 3,
//     title : "",
//     description : "",
//     details : ""
// }
]

const SecondGrid = () => {
  return (
    <section className="bg-[#EBF4FF] space-y-3 border rounded-xl p-6 shadow-sm col-span-1">
          {/* Daily Stream */}
          <div className="flex justify-between">
          <h2 className="font-bold text-blue-900 pl-1 text-xl">Daily Stream</h2>
          <img src={refresh} className='w-4 h-4' alt="" />
          </div>
          <p className="text-gray-600 pb-4 font-semibold">Last updated - 4 minutes ago</p>
          <ReadCard />
          {dummyData.map((item) => (
            <Card className="" key={item.id} title={item.title} description={item.description} details={item.details} />
          ))}
          
    </section>
  )
}

export default SecondGrid
