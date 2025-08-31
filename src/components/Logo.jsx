import React from 'react'
import { FaPenNib } from "react-icons/fa";


function Logo({width = '100px'}) {
  return (
     <div className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
      <FaPenNib className="text-2xl" />
      <span>AnujWrites</span>
    </div>
  )
}

export default Logo