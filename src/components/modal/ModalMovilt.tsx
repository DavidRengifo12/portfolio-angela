import { FaMobileAlt, FaCheckCircle } from "react-icons/fa";
import { LuTrendingUp } from "react-icons/lu";

interface propsClick {
  onClose: () => void;
}

const listCard = [
  "En investigación y diseño conceptual",
  "Definición de flujos y experiencia de usuario",
  "Estructuración inicial de funcionalidades",
  "Evaluación de tecnologías a implementar"
];

export default function ModalMovilt({ onClose }: propsClick) {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      {/* CONTENEDOR */}
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-7xl relative">

        {/* BOTÓN CERRAR */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition z-50"
        >
          ✕
        </button>

        {/* MODAL */}
        <article className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-md border border-gray-100 shadow-2xl max-h-[90vh]">

          {/* COLUMNA IZQUIERDA */}
          <div className="flex-1 p-8 lg:p-14 flex flex-col justify-center gap-8 overflow-y-auto">
            <div className="flex items-center gap-5">
              <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg shadow-indigo-100">
                <FaMobileAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Diseño y desarrollo de aplicación móvil
              </h3>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed">
              Proyecto en desarrollo que busca ofrecer una experiencia innovadora, intuitiva y de alto valor para los usuarios.
            </p>

            <div className="bg-slate-100 border border-slate-100 rounded-3xl p-6 lg:p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="flex items-center gap-2">
                  <LuTrendingUp className="text-indigo-600 bg-white shadow-sm rounded-full p-1.5 text-3xl" />
                  <p className="font-bold text-slate-800">Estado</p>
                </span>
                <span className="bg-indigo-100/70 text-indigo-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  ● Proyecto activo
                </span>
              </div>

              <ul className="space-y-4 text-slate-600 text-sm font-medium">
                {listCard.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-indigo-500 text-lg flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMNA IMAGEN (SIN RECORTE) */}
          <div className="flex-1 relative  min-h-[400px] lg:min-h-full overflow-hidden">

            <img
              src="/movil.jpeg"
              alt="img"
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* OVERLAY GRADIENTE CORREGIDO */}
            <div className="absolute inset-0 via-slate-900/30 to-transparent" />

            {/* TEXTO */}
            <div className="absolute p-10 w-72 pb-20 lg:pb-60 flex flex-col justify-end gap-5">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md w-fit">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-white text-[10px] font-bold uppercase">
                  Proyecto en desarrollo
                </span>
              </div>

              <h3 className="text-white text-4xl font-bold leading-[1.1]">
                Exploración de solución digital
              </h3>

              <p className="text-white/80 text-md lg:text-md max-w-md leading-relaxed">
                Investigo, diseño y construyo una aplicación móvil que combina tecnología e inteligencia artificial para crear soluciones útiles y centradas en las personas.
              </p>
            </div>
          </div>

        </article>
      </div>
    </div>
  );
}