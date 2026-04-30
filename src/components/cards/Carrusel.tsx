import { useState } from "react"
import { informacionCards } from "../../data/DataCard"
import CardInfo from "./CardInfo"
import ModalCards from "../modal/ModalCards"
import ModalHistoriaClinica from "../modal/ModalHistoriaClinica";
import ModalMovilt from "../modal/ModalMovilt";



export default function CarruselCards() {
  const filas = [
    informacionCards.slice(0, 4),
//    informacionCards.slice(3, 6),
//    informacionCards.slice(6, 9),
  ]

  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-7xl space-y-4 overflow-hidden p-4 bg-[linear-gradient(90deg,rgba(0,0,0,1),rgba(255,1))]">
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-3xl md:text-5xl text-white font-bold tracking-tight text-center mb-4">
            Mi enfoque de trabajo
          </h1>
          <h4 className="text-white lg:text-3xl italic pt-4">La calidad no empieza en pruebas, empieza en el análisis.</h4>
        </div>
      
      {filas.map((fila, index) => {
        const direction =
          index === 1
            ? "animate-[scrollReverse_25s_linear_infinite]"
            : "animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]"

        return (
          <div key={index} className="overflow-hidden ">
            
            <div className={`flex w-max gap-6 ${direction}`}>
              
              {[...fila, ...fila].map((card, i) => (
                <div key={i} className="flex-shrink-0 w-[400px]">
                  <CardInfo {...card} onOpen={() => setActiveModal(card.modal)} />
                </div>
              ))}

            </div>

          </div>
        )
      })}

      <div>

        {activeModal === "cards" && (
          <ModalCards onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "clinica" && (
          <ModalHistoriaClinica onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "movil" && (
          <ModalMovilt onClose={() => setActiveModal(null)}/>
        )}
      </div>
    </div>
  )
}