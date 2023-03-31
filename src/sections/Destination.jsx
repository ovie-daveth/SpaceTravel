import React, { useEffect, useState } from 'react'
import img1 from "../assets/destination/image-moon.png"
import img1a from "../assets/destination/image-moon.webp"
import img2 from "../assets/destination/image-mars.png"
import img2a from "../assets/destination/image-mars.webp"
import img3 from "../assets/destination/image-europa.png"
import img3a from "../assets/destination/image-europa.webp"
import img4 from "../assets/destination/image-titan.png"
import img4a from "../assets/destination/image-titan.webp"

export const destinations = [
  {
    name: "Moon",
    images: {
      png: img1,
      webp: img1a
    },
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  {
    name: "Mars",
    images: {
      png: img2,
      webp: img2a
    },
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  {
    name: "Europa",
    images: {
      png: img3,
      webp: img3a
    },
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    name: "Titan",
    images: {
      png: img4,
      webp: img4a
    },
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
]


const Destination = () => {

  const destine = [
    {
      id: 1,
      name: destinations[0].name,
    },
    {
      id: 2,
      name: destinations[1].name,
    },
    {
      id: 3,
      name: destinations[2].name,
    },
    {
      id: 4,
      name: destinations[3].name,
    },
  ]
  const [isDestination, setIsDestination] = useState(destinations)
  const [isActive, setIsActive] = useState(1)

  useEffect(() => {
    const filteredDestination = destinations.filter((item) => item.name === 'Moon')
    setIsDestination(filteredDestination)
  }, [setIsActive])

  const setActive = (itemid) => {
    setIsActive(itemid)
    if(itemid === 1){
      const filteredDestination = destinations.filter((item) => item.name === 'Moon')
      setIsDestination(filteredDestination)
    }else if(itemid === 2){
      const filteredDestination = destinations.filter((item) => item.name === 'Mars')
      setIsDestination(filteredDestination)
    } else if (itemid === 3 ){
        const filteredDestination = destinations.filter((item) => item.name === 'Europa')
        setIsDestination(filteredDestination)
      } else{
        const filteredDestination = destinations.filter((item) => item.name === 'Titan')
        setIsDestination(filteredDestination)
      }
  }
  return (
    <section className='content two' id="destination">
     {
      isDestination.map((item, index) => (
        <div className='destination'
         key={index}>
             <div className='dest__title'>
                <h1><span>01</span> PICK YOUR DESTINATION</h1>
                <img key={index} src={item.images.png} alt="alter" /> 
            </div>
            <div className='dest__desc'>
              <ul>
              {
                destine.map((item)=> (
                  <li 
                  onClick={() => setActive(item.id)}
                  className={`${isActive === item.id ? 'active' : ''}`}
                  key={item.id}>{item.name}</li>
                ))
              }
          </ul>
          <div className='moon'>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <div className='addons'>
                <div className='distance'>
                  <span>Avg Disatnce</span>
                  <span>{item.distance}</span>
                </div>
                <div className='time'>
                  <span>EST.TRAVEL.TIME</span>
                  <span>{item.travel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
     }
    </section>
  )
}

export default Destination
