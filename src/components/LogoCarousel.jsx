import { motion } from 'framer-motion'

// Import logo images
import adientLogo from '../assets/images/logos/adient.jpg'
import autokinitonLogo from '../assets/images/logos/autokiniton.png'
import gmLogo from '../assets/images/logos/gm.webp'
import goldeGroupLogo from '../assets/images/logos/golde-group.png'
import learLogo from '../assets/images/logos/lear.jpg'
import metalsaLogo from '../assets/images/logos/metalsa.png'
import nyxLogo from '../assets/images/logos/nyx.png'
import opmobilityLogo from '../assets/images/logos/opmobility.png'
import stellantisLogo from '../assets/images/logos/stellantis.png'
import thyssenkruppLogo from '../assets/images/logos/thyssenkrupp.png'
import toyoSeatLogo from '../assets/images/logos/toyo-seat.jpg'
import voestalpineLogo from '../assets/images/logos/voestalpine.jpeg'

const clients = [
  { name: 'Adient', logo: adientLogo },
  { name: 'Autokiniton', logo: autokinitonLogo, size: 'h-20 max-w-[220px]' },
  { name: 'GM', logo: gmLogo },
  { name: 'Golde Group', logo: goldeGroupLogo, size: 'h-16 max-w-[200px]' },
  { name: 'Lear', logo: learLogo },
  { name: 'Metalsa', logo: metalsaLogo },
  { name: 'NYX', logo: nyxLogo },
  { name: 'OP Mobility', logo: opmobilityLogo },
  { name: 'Stellantis', logo: stellantisLogo },
  { name: 'Thyssenkrupp', logo: thyssenkruppLogo, size: 'h-16 max-w-[200px]' },
  { name: 'Toyo Seat', logo: toyoSeatLogo },
  { name: 'Voestalpine', logo: voestalpineLogo },
]

export default function LogoCarousel() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="pt-2 pb-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-3">
        <p className="text-center text-[#9E9E9E] text-[10px] uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling track */}
        <motion.div
          className="flex items-center gap-10 px-4"
          animate={{
            x: [0, -160 * clients.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className={`flex-shrink-0 flex items-center justify-center ${client.size || 'h-12 max-w-[140px]'}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`h-full w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply ${client.className || ''}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
