import React, { useState } from 'react'
import Roadmap from './components/Roadmap'

function App() {
  const[selectValue , setSelectValue] = useState("Front-End")
  const[rotateIcon , setRotateIcon] = useState(false)


  return (
    <div className=" min-h-screen bg-linear-to-t from-purple-800 to-black pt-20">
      <div className="w-[50%] mr-auto ml-auto pl-18.75 pr-18.75 pb-14 bg-zinc-900 border border-zinc-700 rounded-2xl">
          <h2 className="text-center text-white text-2xl mt-16">راهنمای مسیر شما</h2>
          <div className="relative">
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)} onClick={() => setRotateIcon(!rotateIcon)} className="w-full h-10 text-white bg-zinc-900 border border-zinc-700 rounded pr-4 pl-4 mt-16 appearance-none outline-none" name="select-box">
              <option value="Front-End">فرانت اند</option>
              <option value="Back-End">بک اند</option>
              <option value="Security">امنیت</option>
              <option value="AI">هوش مصنوعی</option>
            </select>
            <svg className={`w-7 h-7 absolute left-4 bottom-1.5 text-white ${rotateIcon ? "rotate-180" : ""} transition-all duration-300 ease-in`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
          </div>

          <h2 className="text-center text-white  text-2xl mt-9">نقشه اختصاصی شما برای <span className="text-purple-800">{selectValue.length==0 ? "فرانت اند" : selectValue}</span> :</h2>
          
          <Roadmap field={selectValue} />
      </div>
    </div>
  )
}

export default App
