import { Bot, ListTodo, Scan, Users, WandSparkles } from 'lucide-react'
import Notebook from '../assets/images/notebook.png'

export function Demonstration() {
  return (
    <section className="flex flex-col mt-48">
      <h2 className="w-11/12 md:w-auto text-start md:text-center text-2xl md:text-3xl font-semibold text-navyBlue mb-20 px-6">
        Deixa eu te mostrar o <span className="text-Beige">HermesChat</span>
      </h2>

      <div className="flex justify-center items-center flex-col">
        <div className="grid gap-6 place-items-center">
          <img
            src={Notebook}
            className="h-auto w-72 md:h-[36rem] md:w-full rounded-3xl"
            alt="Tela do chatbots"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 items-center md:justify-center">
          <div className="flex flex-col justify-center items-center p-3 gap-6 h-[265px] w-80 rounded-[20px] ring-1 ring-zinc-300 hover:animate-bounce cursor-pointer transition-all duration-500 ease-out">
            <div className="bg-Beige text-zinc-50 rounded-xl p-2.5 flex justify-center items-center h-[50px] w-[50px]">
              <Scan className="size-8" />
            </div>

            <div className="flex justify-center items-center">
              <p className="text-[18px] text-zinc-700 text-center">
                Conecte o seu WhatsApp ao HermesChat escaneando o QR Code na
                plataforma.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center p-3 gap-6 h-[265px] w-80 rounded-[20px] ring-1 ring-zinc-300 hover:animate-bounce cursor-pointer transition-all duration-500 ease-out">
            <div className="bg-Beige text-zinc-50 rounded-xl p-2.5 flex justify-center items-center h-[50px] w-[50px]">
              <Users className="size-8" />
            </div>

            <div className="flex justify-center items-center">
              <p className="text-[18px] text-zinc-700 text-center">
                Convide o seu time inteiro para atender e vender utilizando o
                inteligente Bate Papo ao vivo do HermesChat.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center p-3 gap-6 h-[265px] w-80 rounded-[20px] ring-1 ring-zinc-300 hover:animate-bounce cursor-pointer transition-all duration-500 ease-out">
            <div className="bg-Beige text-zinc-50 rounded-xl p-2.5 flex justify-center items-center h-[50px] w-[50px]">
              <Bot className="size-8" />
            </div>

            <div className="flex justify-center items-center">
              <p className="text-[18px] text-zinc-700 text-center">
                Selecione quais robôs você vai utilizar no seu atendimento.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 items-center md:justify-center">
          <div className="flex flex-col justify-center items-center p-3 gap-6 h-[265px] w-80 rounded-[20px] ring-1 ring-zinc-300 hover:animate-bounce cursor-pointer transition-all duration-500 ease-out">
            <div className="bg-Beige text-zinc-50 rounded-xl p-2.5 flex justify-center items-center h-[50px] w-[50px]">
              <ListTodo className="size-8" />
            </div>

            <div className="flex justify-center items-center">
              <p className="text-[18px] text-zinc-700 text-center">
                Organize suas tarefas e projetos de forma visual e eficiente com
                nosso sistema Kanban integrado.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center p-3 gap-6 h-[265px] w-80 rounded-[20px] ring-1 ring-zinc-300 hover:animate-bounce cursor-pointer transition-all duration-500 ease-out">
            <div className="bg-Beige text-zinc-50 rounded-xl p-2.5 flex justify-center items-center h-[50px] w-[50px]">
              <WandSparkles className="size-8" />
            </div>

            <div className="flex justify-center items-center">
              <p className="text-[18px] text-zinc-700 text-center">
                Sente, relaxe e veja na prática os robôs atenderem e venderem no
                automático para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
