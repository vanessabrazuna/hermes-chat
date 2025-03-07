import LogoHemesChatBeige from '../assets/logos/hermeschat-beige.png'
import { InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="md:w-screen bg-navyBlue px-6">
      <div className="flex justify-center items-center flex-col">
        <div className="max-w-6xl w-full md:w-auto bg-Beige text-navyBlue rounded-xl mt-14 md:mt-24 md:p-10">
          <div className="flex justify-center md:justify-between items-center flex-col md:flex-row py-6 px-3 md:p-2">
            <div className="flex-1">
              <h2 className="text-[22px] md:text-[34px] leading-[30px] md:leading-[120%] font-bold w-12/12 md:w-12/12 text-center md:text-start mb-4">
                Utilize o HermesChat e aproveite ao máximo o poder do marketing
                conversacional.
              </h2>
            </div>

            <div className="flex-1">
              <span className="text-[17px] md:text-lg leading-[23px] md:leading-6 text-center md:text-start md:w-auto">
                Criar robôs é fácil, divertido e comprovado para obter
                resultados!
              </span>
              <div className="flex justify-center items-center md:justify-start">
                <a
                  href="https://app.hermeschat.com.br/signup"
                  target="_blank"
                  className="w-full"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="h-14 w-full md:w-48 bg-zinc-50 text-navyBlue rounded-xl font-bold hover:brightness-125 transition ease-in-out delay-150 duration-300 mt-3 md:mt-8 shadow-lg"
                  >
                    COMEÇAR AGORA
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mt-14">
          <div className="flex justify-start items-center">
            <img
              src={LogoHemesChatBeige}
              className="w-40"
              alt="Logo HermesChat"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="mt-7 flex justify-center items-center flex-col mb-16 border-1 border-zinc-300">
              <strong className="text-lg leading-6 text-zinc-50 mb-5 text-start w-auto w-12/12">
                Quando o assunto é automação pelo WhatsApp, nós somos
                especialistas
              </strong>
              <span className="text-base leading-[22px] text-zinc-300 w-auto md:w-11/12 text-start md:mr-8">
                Conte com o time do B2B Tech para criar automações que realmente
                geram em agendamentos, visitas e vendas para o seu negócio.
              </span>
            </div>

            <div className="flex justify-start items-start flex-col md:mt-7">
              <strong className="text-lg leading-6 text-zinc-50 mb-5 text-start">
                B2B Tech
              </strong>

              <span className="text-base leading-[22px] text-zinc-300 w-auto md:w-11/12 text-start mr-8">
                B2B TECH LTDA
              </span>
              <span className="text-base leading-[22px] text-zinc-300 w-auto md:w-11/12 text-start mr-8">
                CNPJ: 48.768.751/0001-89
              </span>
              <span className="text-base leading-[22px] text-zinc-300 w-auto md:w-11/12 text-start mr-8">
                Contato: hermeschat@b2bmaker.tech
              </span>
              <span className="text-base leading-[22px] text-zinc-300 w-auto md:w-11/12 text-start mr-8">
                B2B Tech © {new Date().getFullYear()}
              </span>
            </div>

            <div className="flex justify-start items-start flex-col mt-7">
              <strong className="text-lg leading-6 text-zinc-50 mb-5 text-start">
                Fale conosco
              </strong>
              <span className="text-base leading-[22px] text-zinc-300 w-auto md:w-11/12 text-start mr-8">
                hermeschat@b2bmaker.tech
              </span>

              <div className="flex gap-5 mt-3 mb-16 md:mb-0">
                <div>
                  <a
                    href="https://www.instagram.com/b2b_tech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramLogo
                      size={40}
                      className="text-zinc-50 hover:brightness-90"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/company/b2b-tech-maker/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinLogo
                      size={40}
                      className="text-zinc-50 hover:brightness-90"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-zinc-500" />

          <div className="flex justify-between flex-col md:flex-row mt-8 mb-32 text-zinc-300">
            <span className="w-[101%] md:w-auto mb-6 md:mb-0">
              © {new Date().getFullYear()} B2B Tech Todos os direitos
              reservados
            </span>
            <span>Política de Privacidade Termos de Serviços</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
