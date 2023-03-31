import React, { useEffect, useState } from 'react'
import { technology } from '../data'

const Technology = () => {
  const [tech, setTech] = useState(technology)
  const techno = [
    {
      id: 1,
      name: '1',
    },
    {
      id: 2,
      name: '2',
    },
    {
      id: 3,
      name: '3',
    },
  ]

  useEffect(() => {
    const filteredTech = technology.filter((item) => item.name === 'Launch vehicle');
    setTech(filteredTech);
  }, [])

  const [active, setIsActive] = useState(1)

  const setActive = (id) => {
      setIsActive(id);
      if (id === 1) {
        const filteredTech = technology.filter((item) => item.name === 'Launch vehicle');
        setTech(filteredTech);
      } else if (id === 2) {
        const filteredTech = technology.filter((item) => item.name === 'Spaceport');
        setTech(filteredTech);
      } else {
        const filteredTech = technology.filter((item) => item.name === 'Space capsule');
        setTech(filteredTech);
      }
    
  }
  return (
    <section className='content four' id="tech">
       <h1><span>03</span> SPACE LAUNCH 101</h1>
      {
        tech.map((item, index) => (
          <div key={index} className='tech__container'>
          <div className='desc'>
               <ul>
                  {
                   techno.map((item) => (
                     <li
                     onClick={() => setActive(item.id)}
                     className={`tech ${active === item.id ? 'tech_bg' : ""}`}
                     key={item.id}>{item.name}</li>
                   ))
                  }
               </ul>
               <div className='desc__desc'>
                 <p>THE TERMINOLOGY</p>
                 <h1>{item.name}</h1>
                 <small>{item.description}</small>
               </div>
                </div>
                <div className='tech_img'>
                <img className='portrait' src={item.images.portrait} alt="" />
                <img className='landscape' src={item.images.landscape} alt="" />
                </div>
              </div>
        ))
      }
    </section>
  )
}

export default Technology
