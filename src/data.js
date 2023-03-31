  import img1 from './assets/crew/image-douglas-hurley.png'
  import img1a from "./assets/crew/image-douglas-hurley.webp"
  import img2 from './assets/crew/image-mark-shuttleworth.png'
  import img2a from './assets/crew/image-mark-shuttleworth.webp'
  import img3 from "./assets/crew/image-victor-glover.png"
  import img3a from "./assets/crew/image-victor-glover.webp"
  import img4 from "./assets/crew/image-anousheh-ansari.png"
  import img4a from "./assets/crew/image-anousheh-ansari.webp"
  import tech1 from "./assets/technology/image-launch-vehicle-portrait.jpg"
  import tech1a from "./assets/technology/image-launch-vehicle-landscape.jpg"
  import tech2 from "./assets/technology/image-spaceport-portrait.jpg"
  import tech2a from "./assets/technology/image-spaceport-landscape.jpg"
  import tech3 from "./assets/technology/image-space-capsule-portrait.jpg"
  import tech3a from "./assets/technology/image-space-capsule-landscape.jpg"
  
  export const crew = [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": img1,
        "webp": img1a
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": img2,
        "webp": img2a
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": img3,
        "webp": img3a
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": img4,
        "webp": img4a
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]

export const technology = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": tech1,
        "landscape": tech1a
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": tech2,
        "landscape": tech2a
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": tech3,
        "landscape": tech3a
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
