import { useState } from 'react'
import { CalendarCheck, CalendarDays, Headset, Users } from 'lucide-react'
import { videoSession } from '../data/videoSession'

import Phone1 from '../assets/images/phone1.jpg'
import Phone2 from '../assets/images/phone2.jpg'
import Phone3 from '../assets/images/phone3.jpg'
import Phone4 from '../assets/images/phone4.jpg'

interface VideoSession {
  id: string
  title: string
  description: string
  icon: string
}

interface VideoSessionProps {
  [key: string]: boolean
}

export function VideoSession() {
  const [showFeature, setShowFeature] = useState<VideoSessionProps>({
    [videoSession[0].id]: true,
  })
  const [currentImage, setCurrentImage] = useState(Phone1)

  const handleVideoSession = (id: string, title: string) => {
    setShowFeature({ [id]: true })

    if (title === 'Agendamento') {
      setCurrentImage(Phone1)
    } else if (title === 'CRM') {
      setCurrentImage(Phone2)
    } else if (title === 'Calendário') {
      setCurrentImage(Phone3)
    } else if (title === 'Diversos Atendentes') {
      setCurrentImage(Phone4)
    } else {
      setCurrentImage(Phone1)
    }
  }

  return (
    <section className="md:mt-44 flex flex-col px-6" id="exemplos">
      <div className="flex justify-end items-center md:mr-6 mt-28 md:mt-0">
        <h2 className="text-2xl md:text-3xl w-12/12 md:w-6/12 font-semibold text-navyBlue mb-12">
          Chega de <span className="text-Beige">perder tempo</span> com o que
          pode ser automatizado
        </h2>
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row md:h-[550px]">
        <div 
          className="hidden md:flex flex-1 justify-center items-center"
        >
          <img
            src={currentImage}
            className="rounded-md mb-8 md:mb-0 transition-all duration-500 ease-in-out h-[650px] w-auto"
            alt="Celular no chatbots"
          />
        </div>

        <div className="flex flex-1 flex-col gap-8 mt-7 md:mt-0 md:h-[550px]">
          {videoSession.map((item) => (
            <div
              key={item.id}
              className={`flex p-6 gap-4 cursor-pointer rounded-2xl transition-colors duration-300 ease-in-out ${showFeature[item.id] ? 'bg-slate-50' : 'bg-transparent'}`}
              onClick={() => handleVideoSession(item.id, item.title)}
            >
              <div>{renderIcon(item.icon)}</div>
              <div>
                <span
                  className={`text-[22px] text-zinc-800 font-semibold transition-colors duration-300 ease-in-out ${showFeature[item.id] ? 'text-zinc-50' : 'text-zinc-800'}`}
                >
                  {item.title}
                </span>
                <p
                  className="text-[18px] text-zinc-800 w-12/12 md:w-11/12 transition-height duration-500 ease-in-out"
                  style={{
                    maxHeight: showFeature[item.id] ? '300px' : '0',
                    overflow: 'hidden',
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <span className="text-[22px] font-semibold text-zinc-400 ml-14 md:ml-0">
            ... e muito mais!
          </span>
        </div>
      </div>
    </section>
  )
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'Calendar':
      return (
        <CalendarCheck className="size-8 bg-emerald-300 text-zinc-100 rounded-xl p-2.5 flex justify-center items-center h-[50px] w-[50px]" />
      )
    case 'LibraryBig':
      return (
        <Users className="size-8 bg-violet-400 text-zinc-100 rounded-xl p-2.5 flex justify-center items-center h-[50px] w-[50px]" />
      )
    case 'AppWindow':
      return (
        <CalendarDays className="size-8 bg-amber-300 text-zinc-100 rounded-xl p-2.5 flex justify-center items-center h-[50px] w-[50px]" />
      )
    case 'ThumbsUp':
      return (
        <Headset className="size-8  bg-slate-400 text-zinc-100 rounded-xl p-2.5 flex justify-center items-center h-[50px] w-[50px]" />
      )
    default:
      return null
  }
}
