import { useState } from 'react'

export function BurguerMenu() {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="flex items-center justify-between py-8">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON space-y-2" onClick={toggleMenu}>
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={isOpen ? 'showMenuNav bg-Beige' : 'hideMenuNav'}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setOpen(false)}
            >
              {/* Close button (optional) */}
              <svg
                className="h-9 w-9 mt-[-0.55rem] mr-[-1.3rem] text-navyBlue"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            {/* Menu items */}
            <ul className="flex flex-col items-center justify-between min-h-[350px]">
              <li className="relative text-white font-semibold text-2xl w-fit block after:block after:content-['']  after:absolute after:h-[2px] after:bg-navyBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                <a href="#exemplos" onClick={toggleMenu}>
                  EXEMPLOS
                </a>
              </li>

              <li className="relative text-white font-semibold text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-navyBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">
                <a href="#ferramentas" onClick={toggleMenu}>
                  FERRAMENTAS
                </a>
              </li>

              <li className="relative text-white font-semibold text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-navyBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                <a href="#demo" onClick={toggleMenu}>
                  DEMO
                </a>
              </li>

              <li className="relative text-white font-semibold text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-navyBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">
                <a href="#planos" onClick={toggleMenu}>
                  PLANOS
                </a>
              </li>

              <li className="relative text-white font-semibold text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-navyBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                <a href="#faq" onClick={toggleMenu}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </section>
      </nav>

      {/* Styling */}
      <style>
        {`
          .hideMenuNav {
            display: none;
          }

          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }

          /* Hamburger menu styling */
          .hamburger {
            width: 30px;
            height: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: .25rem;
            cursor: pointer;
          }

          .hamburger span {
            display: block;
            width: 100%;
            height: 3px;
            background: navy;
            border-radius: 3px;
            transition: transform 0.3s, opacity 0.3s;
          }

          .hamburger.open span:nth-child(1) {
            transform: translateY(6px) rotate(45deg);
          }

          .hamburger.open span:nth-child(2) {
            opacity: 0;
          }

          .hamburger.open span:nth-child(3) {
            transform: translateY(-6px) rotate(-45deg);
          }
        `}
      </style>
    </div>
  )
}
