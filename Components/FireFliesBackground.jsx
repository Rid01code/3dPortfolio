"use client"
import React, { useEffect, useState } from 'react'


const createFireFlies = () => ({
    id: Math.random(),
    top: `${Math.random()*100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random()*5 + 5}s`
})
const FireFliesBackground = () => {

    const [fireFlies, setFireFlies] = useState([])
    
    useEffect(() => {
        const addFireFliesPeriodically = () => {
            const newFireFly = createFireFlies()
            setFireFlies(currentFireFlies => [...currentFireFlies.slice(-20), newFireFly])
        }

        const interval = setInterval(addFireFliesPeriodically, 1000)
        return() => clearInterval(interval)
    },[])

    return (
        <div>
            <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
                {fireFlies.map((firefly) => {
                    return (
                        <div
                            key={firefly.id}
                            className='absolute rounded-full bg-firefly-radial w-4 h-4'
                            style={{
                                top: firefly.top,
                                left: firefly.left,
                                animation: `move ${firefly.animationDuration} infinite alternate`
                            }}>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FireFliesBackground