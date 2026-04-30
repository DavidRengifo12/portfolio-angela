import { HiArrowRight } from "react-icons/hi"


interface prospCard {
  imageCard: string
  titleCard: string
//  descriptionCard: string
  buttonCard: string
  onOpen?: () => void
}

export default function CardInfo({
  imageCard,
  titleCard,
// descriptionCard,
  buttonCard,
  onOpen
}: prospCard) {

  return (
    <div className="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 flex flex-col h-full">
      <img
        className="w-full h-48 sm:h-52 md:h-72 object-cover rounded-sm"
        src={imageCard}
        alt={titleCard}
      />
      <h3 className="text-gray-900 text-lg md:text-2xl font-semibold ml-2 mt-4">
        {titleCard}
      </h3>
      {/*<p className="text-zinc-400 text-sm md:text-base mt-2 ml-2 mb-2">
        {descriptionCard}
      </p>*/}
       <button onClick={onOpen} className="mt-auto px-4 py-2 rounded-lg overflow-hidden group">
        <span className="flex items-center gap-2 transition-transform duration-500 group-hover:translate-x-2 font-semibold ">
          {buttonCard}
          <HiArrowRight className="w-5 h-5 text-indigo-900" />
        </span>
      </button>
    </div>
  )
}