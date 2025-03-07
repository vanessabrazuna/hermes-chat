import { useEffect, useState } from 'react'
import { BurguerMenu } from '../utils/BurguerMenu'

import LogoHemesChat from '../assets/logos/hermeschat.png'
import LogoIco from '../assets/logos/ico.png'

export function Header() {
  const [isMediumScreen] = useState(window.innerWidth >= 768)
  const [top, setTop] = useState(true)

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header>
      <div
        className={`fixed left-0 top-0 right-0 bottom-0 z-20 w-full h-20 px-auto px-2 py-10 flex justify-around items-center md:gap-5 ${!top && `bg-zinc-50 shadow-md`}`}
      >
        <div>
          {isMediumScreen ? (
            <a href="/">
              <img
                src={LogoHemesChat}
                className="block w-46 h-9"
                alt="Logo HermesChat"
              />
            </a>
          ) : (
            <a href="/">
              <img
                src={LogoIco}
                className="block w-10 h-10"
                alt="Logo LogoIco"
              />
            </a>
          )}
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-12 font-bold">
            <a href="/#exemplos">
              <li className="hover:text-golden cursor-pointer">EXEMPLOS</li>
            </a>

            <a href="#ferramentas">
              <li className="hover:text-golden cursor-pointer">
                FERRAMENTAS
              </li>
            </a>

            <a href="#demo">
              <li className="hover:text-golden cursor-pointer">DEMO</li>
            </a>

            <a href="#planos">
              <li className="hover:text-golden cursor-pointer">PLANOS</li>
            </a>

            <a href="#faq">
              <li className="hover:text-golden cursor-pointer">FAQ</li>
            </a>
          </ul>
        </nav>

        <a
          href="https://app.hermeschat.com.br/signup"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="h-12 md:h-14 w-48 md:w-40 bg-golden text-zinc-50 rounded-xl font-bold hover:brightness-110 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 order-1"
          >
            CONECTE-SE
          </button>
        </a>
        <div className="block md:hidden">
          <BurguerMenu />
        </div>
      </div>
    </header>
  )
}
