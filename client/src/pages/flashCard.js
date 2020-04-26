import React, { useState, useEffect, useRef } from "react"


export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
       const frontHeight = frontEl.current.getBoundingClientRect().height
       const backHeight = backEl.current.getBoundingClientRect().height
       
       setHeight(Math.max(frontHeight,backHeight, 100))

    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return (
        <div 
        className={`card ${flip ? 'flip' : ''}`}
        style={{ height: height}}
        onClick={() => setFlip(!flip)}
        id="flashcard"
        >
            <div className="front" ref={frontEl} style={{color:"#000"}}>
               {flashcard.question}
               <div className="flashcard-options">
                 {flashcard.options.map(option => {
                     return <div className={`flashcard-option`}><span>{option}</span></div>
                 })}   

               </div> 
               
            </div>
            <div className="back" style ={{color:"#000"}} ref={backEl}>{flashcard.answer} <a target="_blank" href={flashcard.src}>Click Here</a></div>  
        </div>
    )
}    

