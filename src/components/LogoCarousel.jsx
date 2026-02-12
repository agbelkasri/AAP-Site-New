// Import logo images
import adientLogo from '../assets/images/logos/adient.png'
import autokinitonLogo from '../assets/images/logos/autokiniton.png'
import gmLogo from '../assets/images/logos/gm.png'
import goldeGroupLogo from '../assets/images/logos/golde-group.png'
import learLogo from '../assets/images/logos/lear.png'
import metalsaLogo from '../assets/images/logos/metalsa.png'
import nyxLogo from '../assets/images/logos/nyx.png'
import opmobilityLogo from '../assets/images/logos/opmobility.png'
import stellantisLogo from '../assets/images/logos/stellantis.png'
import thyssenkruppLogo from '../assets/images/logos/thyssenkrupp.png'
import toyoSeatLogo from '../assets/images/logos/toyo-seat.png'
import voestalpineLogo from '../assets/images/logos/voestalpine.png'

const clients = [
  { name: 'Adient', logo: adientLogo },
  { name: 'Autokiniton', logo: autokinitonLogo, size: 'h-12 max-w-[180px]' },
  { name: 'GM', logo: gmLogo, size: 'h-12 max-w-[180px]' },
  { name: 'Golde Group', logo: goldeGroupLogo, size: 'h-9 max-w-[160px]' },
  { name: 'Lear', logo: learLogo },
  { name: 'Metalsa', logo: metalsaLogo },
  { name: 'NYX', logo: nyxLogo },
  { name: 'OP Mobility', logo: opmobilityLogo },
  { name: 'Stellantis', logo: stellantisLogo },
  { name: 'Thyssenkrupp', logo: thyssenkruppLogo, size: 'h-12 max-w-[180px]' },
  { name: 'Toyo Seat', logo: toyoSeatLogo, size: 'h-12 max-w-[180px]' },
  { name: 'Voestalpine', logo: voestalpineLogo },
]

export default function LogoCarousel() {
  const duplicatedClients = [...clients, ...clients]

  const renderTrack = (highlight = false) => (
    <div
      className="flex items-center gap-10 px-4 shrink-0"
      style={{
        animation: 'ticker-scroll 35s linear infinite',
      }}
    >
      {clients.map((client) => (
        <div
          key={client.name}
          className={`flex-shrink-0 flex items-center justify-center ${client.size || 'h-7 max-w-[120px]'}`}
        >
          <img
            src={client.logo}
            alt={client.name}
            className={`h-full w-auto object-contain transition-none mix-blend-multiply ${
              highlight
                ? 'brightness-110'
                : 'grayscale opacity-50'
            } ${client.className || ''}`}
          />
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-1 overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)', backdropFilter: 'blur(12px)' }}>
      {/* Scrolling container */}
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.45), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.45), transparent)' }} />

        {/* Base layer - grayscale and dimmed */}
        <div className="flex overflow-hidden">
          {renderTrack(false)}
          {renderTrack(false)}
        </div>

        {/* Highlight layer - full color, masked to center only */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none flex"
          style={{
            maskImage: 'linear-gradient(90deg, transparent 35%, black 48%, black 52%, transparent 65%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 35%, black 48%, black 52%, transparent 65%)',
          }}
        >
          {renderTrack(true)}
          {renderTrack(true)}
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  )
}
