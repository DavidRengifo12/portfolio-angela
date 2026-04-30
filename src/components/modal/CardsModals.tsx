import type { IconType } from "react-icons"

type Color = "green" | "blue" | "orange" | "purple"

interface cardModalProps {
  title: string
  iconCardModal: IconType
  description: string
  numeros: number
  color: Color
  textoFooter?: string
}

const colorClass: Record<Color, string> = {
  green: "card-green",
  blue: "card-blue",
  orange: "card-orange",
  purple: "card-purple"
}

const badgeClass: Record<Color, string> = {
  green: "card-green-badge",
  blue: "card-blue-badge",
  orange: "card-orange-badge",
  purple: "card-purple-badge"
}

const borderTopClass: Record<Color, string> = {
  green: "border-green-200",
  blue: "border-blue-200",
  orange: "border-orange-200",
  purple: "border-purple-200"
}

export default function CardModals({
  title,
  iconCardModal: Icon,
  description,
  numeros,
  color,
  textoFooter
}: cardModalProps) {

  return (
    <div >
    <div className={`text-center rounded-xl border p-6 ${colorClass[color]} shadow-lg transition-transform duration-300 hover:scale-105`}>

      {/* número */}
      <div className={`w-8 h-8  flex items-center justify-center rounded-full ${badgeClass[color]}`}>
        {numeros}
      </div>

      {/* icon */}
      <div className="flex justify-center mt-4">
        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${badgeClass[color]}`}>
          <Icon className="text-white text-xl" />
        </div>
      </div>

      {/* título */}
      <h4 className="mt-4 text-lg font-semibold">
        {title}
      </h4>

      {/* descripción */}
      <p className={`text-gray-600 mt-4 pt-4 border-t-2 ${borderTopClass[color]}`}>
        {description}
      </p>

      {/* footer */}
      {textoFooter && (
        <div className="mt-4">
          <div className={` py-2 text-gray-800 rounded-md $`}>
            {textoFooter}
          </div>
        </div>
      )}

    </div>
    </div>
  )
}