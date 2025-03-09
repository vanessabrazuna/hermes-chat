import { Helmet } from 'react-helmet-async'
import Chatting1 from '../assets/images/chatting-1.png'

export function Hero() {
  return (
    <>
      <Helmet>
        <title>HermesChat</title>
        <meta
          name="description"
          content="A Ferramenta Mais Fácil Para Organizar o atendimento da sua empresa!"
        />
      </Helmet>

      <section className="flex md:flex-row flex-col mt-16 md:mt-32 items-center px-6">
        <div className="flex flex-1 justify-center items-start flex-col mt-5">
          <h1 className="text-3xl md:text-5xl font-bold w-11/12 md:w-auto leading-32 text-navyBlue text-start py-10 text-wrap">
            A Ferramenta Mais Fácil Para Organizar o atendimento da sua empresa!
          </h1>
          <p className="text-zinc-700 w-11/12 md:w-auto leading-6 text-start text-lg text-wrap">
            Agora você pode revolucionar seu marketing, geração de leads,
            atendimento e muito mais. Em poucas horas, você cria o seu robô e
            organiza todo o atendimento da sua empresa.
          </p>

          <a
            href="https://app.hermeschat.com.br/signup"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="w-44 md:w-48 h-12 bg-golden text-zinc-50 rounded-xl font-bold hover:bg-mediumBeige transition-colors duration-300 mt-10 md:mt-8"
            >
              COMEÇAR AGORA
            </button>
          </a>
        </div>

        <div className="flex-1 justify-center items-center hidden md:block">
          <img
            src={Chatting1}
            className="w-[600px] h-[600px] animate-bounce"
            alt="Menino e menina com o celular nas mãos"
          />
        </div>
      </section>

      <style>
        {`
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-30px);
            }
          }
          .animate-bounce {
            animation: bounce 5s infinite;
          }
        `}
      </style>
    </>
  )
}
