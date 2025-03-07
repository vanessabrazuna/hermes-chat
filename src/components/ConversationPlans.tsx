import { Check } from 'lucide-react'
import 'animate.css'

export function ConversationPlans() {
  return (
    <section className="max-w-6xl w-full mt-48 flex flex-col px-6 " id="planos">
      <div className="mb-0 md:mb-5">
        <h2 className="text-navyBlue text-[22px] md:text-[34px] leading-[30px] md:leading-[120%] text-start md:text-center w-auto font-bold mt-24 md:mt-0 mb-10">
          Escolha Um Plano
          <span className="text-Beige"> HermesChat </span>
          Que É Certo Para Você
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-auto md:w-10/12 mx-auto">
        <div className="rounded-2xl ring-1 ring-zinc-300 flex justify-center items-center flex-col">
          <div className="pt-[0vh]">
            <div className="h-45 flex justify-center items-center flex-col rounded-2xl bg-slate-100 animate__animated animate__zoomIn animate-fade [scale:1] opacity-1 [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:400px]">
              <h3 className="text-[22px] leading-[30px] font-bold text-mediumBlue p-5">
                STARTER
              </h3>
              <strong className="text-3xl leading-[120%] text-zinc-800">
                R$ 199/mes
              </strong>
              <span className="text-[18px] leading-6 text-center text-zinc-800 p-5">
                Todas as funcionalidades que um pequeno/médio negócio precisa
                para automatizar o atendimento e vendas do WhatsApp.
              </span>
              <span className="text-base leading-[22px] text-center text-zinc-800 mb-10">
                Entregue as respostas que seus clientes estão procurando.
              </span>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>1 número de WhatsApp conectado</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso a um painel de controle</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso a um CRM para contatos</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso a criação de etiquetas</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso a criação de campos personalizados</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso a campanhas de link</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso ao bate papo (5 atendentes inclusos)</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso a campanhas de QR code</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso ao criador de automações</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Fluxos de conversa (robôs) ilimitados</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Filas de Atendimento</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-navyBlue flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Sequências Ilimitadas</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-end h-full pb-8 pt-6">
            <a
              href="https://api.whatsapp.com/send/?phone=5521965194348"
              target="_blank"
              className="w-[240px] md:w-[270px]"
              rel="noreferrer"
            >
              <button
                type="button"
                className="w-[240px] md:w-[270px] h-14 bg-mediumBlue text-zinc-50 hover:brightness-110 rounded-xl font-semibold cursor-pointer"
              >
                COMEÇAR AGORA
              </button>
            </a>
          </div>
        </div>

        <div className="rounded-2xl ring-1 ring-zinc-300 flex justify-center items-center flex-col">
          <div className="pt-[0vh]">
            <div className="h-45 flex justify-center items-center flex-col rounded-2xl bg-slate-100 animate__animated animate__zoomIn animate-fade [scale:1] opacity-1 [animation-timeline:view()] [animation-range-start:cover] [animation-range-end:400px]">
              <h3 className="text-[22px] leading-[30px] font-bold text-mediumBeige p-5">
                PRO
              </h3>
              <strong className="text-3xl leading-[120%] text-zinc-800">
                R$ 297/mes
              </strong>
              <span className="text-[18px] leading-6 text-center text-zinc-800 p-5">
                A melhor escolha para quem atende muitas pessoas todos os dias e
                precisa de uma ferramenta poderosa para escalar as vendas no
                WhatsApp.
              </span>
              <span className="text-base leading-[22px] text-center text-zinc-800 mb-10">
                Não coloque limites nas suas vendas.
              </span>
            </div>
          </div>

          <div className="p-5">
            <span className="text-base leading-[22px] text-mediumBeige text-start">
              + TODAS Funcionalidades do <strong>STARTER</strong>
            </span>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-1">
              <div className="text-zinc-800 flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso ao disparador de mensagens</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-zinc-800 flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Acesso a integrações</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-zinc-800 flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Atendentes ilimitados</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-zinc-800 flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Integração via Zapier</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-zinc-800 flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Integração via Webhook</li>
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 text-zinc-950 mt-px">
              <div className="text-zinc-800 flex justify-center items-center">
                <Check />
              </div>
              <ul className="text-base leading-[22px] text-zinc-800">
                <li>Integração via API</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-end h-full pb-8 pt-6">
            <a
              href="https://api.whatsapp.com/send/?phone=5521965194348"
              target="_blank"
              className="w-[240px] md:w-[270px]"
              rel="noreferrer"
            >
              <button
                type="button"
                className="w-[240px] md:w-[270px] h-14 bg-mediumBeige text-zinc-50 hover:brightness-110 rounded-xl font-semibold cursor-pointer"
              >
                COMEÇAR AGORA
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
