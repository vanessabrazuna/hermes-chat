import { useEffect, useRef } from 'react'

import RDStation from '../assets/sponsors/rdStation.png'
import Calendly from '../assets/sponsors/calendly.png'
import Hotsmart from '../assets/sponsors/hotsmart.png'
import Shopify from '../assets/sponsors/shopify.png'
import Favorito from '../assets/sponsors/favorito.svg'
import ActiveCampaing from '../assets/sponsors/active-campaing.png'

interface Sponsor {
  src: string
  alt: string
}

const sponsors: Sponsor[] = [
  { src: RDStation, alt: 'Logo do Cliente' },
  { src: Calendly, alt: 'Logo do Cliente' },
  { src: Hotsmart, alt: 'Logo do Cliente' },
  { src: Shopify, alt: 'Logo do Cliente' },
  { src: Favorito, alt: 'Logo do Cliente' },
  { src: ActiveCampaing, alt: 'Logo do Cliente' },
]

export function CarouselAnimation() {
  const listRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const totalWidth = list.scrollWidth / 2
    const cloneCount = Math.ceil(window.innerWidth / totalWidth) + 1

    for (let i = 0; i < cloneCount; i++) {
      list.innerHTML += list.innerHTML
    }

    const startAnimation = () => {
      list.style.transition = 'transform 0s'
      list.style.transform = 'translateX(0)'
      requestAnimationFrame(() => {
        list.style.transition = 'transform 10s linear'
        list.style.transform = `translateX(-${totalWidth}px)`
      })
    }

    list.addEventListener('transitionend', startAnimation)
    startAnimation()

    return () => {
      list.removeEventListener('transitionend', startAnimation)
    }
  }, [])

  return (
    <main className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-3">
        <div className="text-center">
          <div className="flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              ref={listRef}
              className="flex items-center justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none gap-20"
            >
              {sponsors.map((sponsor, index) => (
                <li key={index}>
                  <img
                    src={sponsor.src}
                    alt={sponsor.alt}
                    className="w-36 md:w-44"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

const styles = `
@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-infinite-scroll {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  animation: infinite-scroll 20s linear infinite;
}
`

const styleSheet = document.createElement('style')
styleSheet.type = 'text/css'
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
