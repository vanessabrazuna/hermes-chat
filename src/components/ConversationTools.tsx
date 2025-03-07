import { BadgeCheck } from 'lucide-react'
import Chatting2 from '../assets/images/chatting-2.png'

export function ConversationTools() {
  return (
    <section
      className="max-w-6xl w-full mt-52 md:mt-60 flex flex-col px-6"
      id="ferramentas"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-2xl md:text-3xl w-12/12 md:w-11/12 mt-24 md:mt-0 mb-10 md:mb-20 first-letter:mb-14 text-start md:text-center font-semibold text-navyBlue">
          HermesChat Te Dá As Ferramentas E Estratégias Que Você Precisa Em Um
          Único Lugar!
        </h2>
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row gap-5">
        <div className="flex flex-1 flex-col gap-6 order-2 md:order-1">
          <h3 className="text-lg md:text-[22px] leading-6 md:leading-[30px] font-bold text-zinc-800 mt-10 md:mt-0 mb-8">
            SIM! O BotConvers Te Dá As Ferramentas e Estratégias Que Você
            Precisa Para Captar Clientes Potenciais e Aumentar Suas Vendas. De
            Forma Automática!
          </h3>
          <div className="flex items-start gap-2 text-zinc-950 mt-px">
            <div className="text-mediumBeige flex justify-center items-center">
              <BadgeCheck />
            </div>
            <ul className="text-lg">
              <li>Rapidamente Crie Conversas Inteligentes</li>
            </ul>
          </div>

          <div className="flex items-start gap-2 text-zinc-950">
            <div className="text-mediumBeige flex justify-center items-center">
              <BadgeCheck />
            </div>
            <ul className="text-lg">
              <li>Coloque Múltiplos Atendentes No Mesmo Número</li>
            </ul>
          </div>

          <div className="flex items-start gap-2 text-zinc-950">
            <div className="text-mediumBeige flex justify-center items-center">
              <BadgeCheck />
            </div>
            <ul className="text-lg">
              <li>Notifique Departamentos Específicos de Sua Empresa</li>
            </ul>
          </div>

          <div className="flex items-start gap-2 text-zinc-950">
            <div className="text-mediumBeige flex justify-center items-center">
              <BadgeCheck />
            </div>
            <ul className="text-lg">
              <li>Tenha Acesso Completo A Todas Informações Das Conversas</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center md:items-start order-1 md:order-2">
          <img
            src={Chatting2}
            alt="Menina sentada no puff com celular nas mãos."
            className="bg-slate-100 rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
