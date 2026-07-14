import React from 'react'
import steps from "../../data/fields.js"


function Roadmap({field}) {
  const fields = steps.find(
    item => item.id == field
  )
  return (
    <div className="flex flex-wrap gap-5 mt-10">
        {
            fields?.technologies.map((item) => (
                <div className="w-72 h-24 bg-cover bg-center rounded" key={item.id} style={{backgroundImage:`url(${item.image})`}}>
                    <div className="text-left">
                        <h2 className=" text-white text-2xl font-bold">{item.name}</h2>
                    </div>
                    <p className="text-3xl text-white text-right top-0">{item.step}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Roadmap
