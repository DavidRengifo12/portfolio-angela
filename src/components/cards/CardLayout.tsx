import { informacionCards } from "../../data/DataCard"
import CardInfo from "./CardInfo"

export default function CardLayout() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {informacionCards.map((card, index) => (
            <CardInfo
              key={index}
              imageCard={card.imageCard}
              titleCard={card.titleCard}
//              descriptionCard={card.descriptionCard}
              buttonCard={card.buttonCard}
            />
          ))}
        </div>

      </div>
    </section>
  )
}