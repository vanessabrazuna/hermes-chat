import Chatting5 from '../assets/images/chatting-5.png'
import Conversation1 from '../assets/images/conversation-1.png'
import Chatting4 from '../assets/images/chatting-4.png'

export function AutomatedService() {
  return (
    <section className="max-w-6xl w-full mt-48 flex flex-col px-6">
      <div className="flex justify-center items-start md:items-center flex-col md:text-center gap-2">
        <h2 className="text-[22px] md:text-[34px] leading-[22px] md:leading-[120%] font-bold w-auto text-Beige">
          Excelente Experiência
        </h2>
        <strong className="text-[22px] md:text-[34px] leading-[28px] md:leading-[120%] font-bold w-auto mb-6 md:mb-0 text-navyBlue">
          Cliente: Transformando Ocasião em Regra
        </strong>
        <p className="text-[17px] md:text-[18px] leading-[23px] md:leading-[25px] text-zinc-800 w-auto md:w-3/4 mb-14">
          Com um atendimento automatizado você pode garantir que seu cliente
          sempre terá o melhor atendimento possível a todo momento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex justify-center items-start md:items-center flex-col">
          <img
            src={Chatting5}
            className="bg-slate-100 rounded-[20px] m-auto"
            alt="Homem apresentando um celular"
          />
          <strong className="text-navyBlue text-lg md:text-[22px] leading-6 md:leading-[30px] w-12/12 md:w-auto text-start mt-10 p-3">
            Seu Cliente Quer Uma Resposta Pra Ontem
          </strong>
          <p className="text-[17px] md:text-[18px] leading-[23px] md:leading-[25px] text-zinc-800 w-auto p-3 text-start">
            Hoje em dia até os segundos fazem uma enorme diferença. Se você não
            der a resposta que seu cliente busca no tempo dele, adivinha o que
            ele irá fazer? Buscar a resposta em outro lugar.
          </p>
        </div>

        <div className="flex justify-center items-start flex-col md:items-center">
          <img
            src={Conversation1}
            className="bg-slate-100 rounded-[20px] m-auto"
            alt="Homem e mulher apresentando um celular"
          />
          <strong className="text-navyBlue text-lg md:text-[22px] leading-6 md:leading-[30px] w-12/12 md:w-auto text-start mt-10 p-3">
            Mais Força Pro Seu Time
          </strong>
          <p className="text-[17px] md:text-[18px] leading-[23px] md:leading-[25px] text-zinc-800 w-auto p-3 text-start">
            Imagina só receber bolas livres na área para chutar a gol? É
            basicamente isso que os robôs fazem para a sua equipe. Eles recebem
            o atendimento e notificam sua equipe com todos os detalhes
            necessários para eles marcarem o gol.
          </p>
        </div>

        <div className="flex justify-center items-start flex-col md:items-center">
          <img
            src={Chatting4}
            className="bg-slate-100 rounded-[20px] m-auto"
            alt="Robo utilizando notebook"
          />
          <strong className="text-navyBlue text-lg md:text-[22px] leading-6 md:leading-[30px] w-12/12 md:w-auto text-start mt-10 p-3">
            Gere vendas e capture leads automaticamente, 24/7
          </strong>
          <p className="text-[17px] md:text-[18px] leading-[23px] md:leading-[25px] text-zinc-800 w-auto p-3 text-start">
            Você agora pode atender como os gigantes. Empresas como Facebook,
            NBA, Disney e Spotify já utilizam chatbots para aumentar suas vendas
            em até 800%... Você pode fazer o mesmo.
          </p>
        </div>
      </div>
    </section>
  )
}
