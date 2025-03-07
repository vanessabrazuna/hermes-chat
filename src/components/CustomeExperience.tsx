import Chatting3 from '../assets/images/chatting-3.png'

export function CustomeExperience() {
  return (
    <section className="max-w-6xl w-full mt-60 flex flex-col bg-slate-100 rounded-2xl px-6">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:p-20">
          <img
            src={Chatting3}
            className="w-full h-full mx-auto mt-12"
            alt="Celular aberto no chat mensagem"
          />
        </div>

        <div className="flex flex-1 justify-center items-start gap-6 flex-col mt-16 md:mt-40">
          <h2 className="md:text-[34px] text-[22px] leading-[120%] font-bold text-navyBlue w-11/12 md:w-auto">
            O Jeito Mais Fácil de{' '}
            <span className="text-Beige">Levantar Caixa</span>
          </h2>
          <strong className="text-lg md:text-[22px] leading-6 md:leading-[30px] text-zinc-900 md:w-auto w-11/12">
            O manual no automático te dá muito mais dinheiro
          </strong>
          <p className="text-[18px] leading-[25px] text-zinc-800 w-auto md:w-10/12 pb-20 md:pb-0 md:mt-6">
            Você não precisa mais ficar enviando mensagens de um em um cliente
            quando você tiver uma nova oferta ou precisar levantar caixa rápido.
            Basta você pegar toda a lista de contatos no seu negócio, separar
            essa lista com etiquetas e mandar fluxos de conversa extremamente
            personalizados para cada uma das pessoas. Dependendo da estratégia e
            abordagem, você pode vender em poucos dias o que não vende em
            semanas ou no mês.
          </p>
        </div>
      </div>
    </section>
  )
}
