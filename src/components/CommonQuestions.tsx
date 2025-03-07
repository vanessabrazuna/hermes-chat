import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { query } from '../data/query'

interface CommonQuestionsProps {
  [id: string]: boolean
}

export function CommonQuestions() {
  const [showAnswer, setShowAnswer] = useState<CommonQuestionsProps>({})

  const handleWithCommonQuestions = (id: string) => {
    setShowAnswer((prevShowAnswer) => ({
      ...prevShowAnswer,
      [id]: !prevShowAnswer[id],
    }))
  }

  return (
    <section
      className="max-w-6xl w-full px-6 mt-32 md:mt-52 mb-36 flex flex-col md:p-20 bg-slate-100 rounded-2xl"
      id="faq"
    >
      <div className="flex justify-start items-center mt-16 md:mt-0">
        <h2 className="text-navyBlue text-[22px] md:text-[34px] leading-[30px] md:leading-[120%] font-bold mb-12 my-12">
          Perguntas
        </h2>
      </div>

      <div>
        {query.map((queries) => {
          const { id, question, response } = queries
          const expand = showAnswer[id] || false

          return (
            <div
              className="text-[17px] md:text-lg leading-[23px] md:leading-6 md:w-auto w-11/12 mb-12"
              key={id}
            >
              <div
                className="flex justify-between items-center w-full"
                onClick={() => handleWithCommonQuestions(id)}
              >
                <span className="font-bold text-zinc-800 cursor-pointer">
                  {question}
                </span>

                <div style={{ transition: 'transform 0.3s' }}>
                  {expand ? (
                    <Minus className="text-navyBlue" />
                  ) : (
                    <Plus className="text-navyBlue" />
                  )}
                </div>
              </div>

              <p
                className={`text-base md:text-lg leading-6 w-auto md:w-11/12 text-mediumBeige mt-6 transition-all duration-300 ${showAnswer[id] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {response}
              </p>

              <div className="h-px bg-zinc-300 mt-8" />
            </div>
          )
        })}
      </div>
    </section>
  )
}
