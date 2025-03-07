/* import { CarouselAnimation } from '../utils/CarouselAnimation' */
import Video from '../assets/videos/video.mp4'

export function DemoWatch() {
  return (
    <section
      className="max-w-6xl w-full mt-48 px-6 flex flex-col py-10 md:py-32 md:px-10 bg-slate-100 rounded-2xl"
      id="demo"
    >
      <div className="flex justify-center items-center h-72 text-start mt-4 md:mt-0 mb-2 md:mb-20 flex-col md:flex-row gap-5">
        <div className="flex flex-col flex-1 justify-center items-start">
          <h2 className="text-[22px] md:text-[34px] leading-[30px] md:leading-[120%] font-bold w-auto mb-4 text-navyBlue">
            Assista Uma <span className="text-Beige">Demonstração:</span>
          </h2>
          <span className="text-[17px] md:text-[18px] leading-[23px] md:leading-[25px] text-zinc-800 w-full mb-5">
            Em Menos De 10 Minutos, Você Consegue Criar O Que Levaria Um Time de
            Programação Semanas Para Fazer...
          </span>
        </div>

        <div className="flex-1 justify-center items-center flex md:h-full pb-56 md:pb-0">
          <video
            src={Video}
            controls
            className="w-96 h-64 md:w-full md:h-full object-cover rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="flex justify-center items-start gap-3 flex-col md:flex-row">
        <div className="flex justify-center items-center flex-col">
          <strong className="text-lg md:text-[22px] leading-6 md:leading-[30px] font-bold text-start w-auto text-zinc-900 mb-4">
            Conecte seu WhatsApp com o sistema que você quiser e vice versa.
          </strong>
          <span className="text-[17px] md:text-[18px] leading-[23px] md:leading-[25px] text-zinc-800 w-full md:w-auto md:mt-1">
            Utilize nossa API para integrar qualquer sistema à sua conta do
            HermesChat de forma extremamente fácil e rápida. Você também pode
            enviar dados de dentro do HermesChat para qualquer ferramenta
            externa utilizando a nossa API de integração e WebHook.
          </span>
        </div>

        <div className="mt-2 md:mt-20 mb-20 md:mb-32">
          <span className="text-[17px] md:text-[18px] leading-[23px] md:leading-[25px] text-zinc-800 w-full md:w-auto">
            Para tornar as integrações ainda mais fáceis, o HermesChat está
            totalmente integrado ao Zapier - maior ferramenta de
            automação/integração do planeta. Você instantaneamente poderá
            conectar seu HermesChat a um universo de mais de 3000 aplicativos
            sem precisar saber uma linha se quer de programação.
          </span>
        </div>
      </div>

     {/*  <CarouselAnimation /> */}
    </section>
  )
}
