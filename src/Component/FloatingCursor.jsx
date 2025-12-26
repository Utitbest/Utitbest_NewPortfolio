import React, { useEffect, useState } from 'react'

const FloatingCursor = () => {
    const [point, setPoint] = useState({x: 0, y: 0})
    useEffect(()=>{
       const HandleMouseMovement = (e)=>{
            setPoint({x: e.clientX, y: e.clientY})
       }
       window.addEventListener("mousemove", HandleMouseMovement)
       return(()=>{
        window.removeEventListener("mousemove", HandleMouseMovement)
       })
    }, [])

  return (
    <div
        style={{
        position:"fixed",
        top:`${point.y}px`,
        left: `${point.x}px`,
        zIndex: "2000",
        height: "10px",
        width: '10px',
        transition: "transform 0.05s linear",
        backgroundColor: '#23ce6b',
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
    }}  
    ></div>
  )
}

export default FloatingCursor;