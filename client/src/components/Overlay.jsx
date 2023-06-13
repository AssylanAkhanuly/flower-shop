import React from 'react'

function Overlay({children}) {
  return (
    <div className="html-overlay">
      {children}
    </div>
  )
}

export default Overlay