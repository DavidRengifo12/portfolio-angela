import { BsEye } from "react-icons/bs";
import informacionModal, { herramientasTrabajo } from "../../data/DataModal";
import CardModals from "./CardsModals";
import { useState } from "react";
import ModalImage from "./video-modal/ModalImage";

interface propsClick {
  onClose: () => void;
}

export default function ModalCards({ onClose }: propsClick) {

  const [openModalImg, setOpenModalImg] = useState(false)

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      {/* CONTENEDOR */}
      <div  onClick={(e) => e.stopPropagation()} className="w-full max-w-6xl relative">

        {/* Btn CERRAR */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition z-50"
        >
          ✕
        </button>

        {/* MODAL */}
        <div className="flex flex-col mx-auto px-4 py-6 gap-6 bg-white rounded-md max-h-[90vh] overflow-y-auto">
          
          <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            De la ambiguedad a soluciones claras
          </h3>

          <div className="border-b-4 w-24 mx-auto mt-2 border-purple-500"></div>

          <p className="text-center text-base md:text-xl">
            Transformo necesidades de negocios en soluciones claras, medibles y alineadas al usuario
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {informacionModal.map((card, i) => (
              <CardModals key={i} {...card} />
            ))}
          </div>

          {/*BUTTON MODAL IMAGEN */}
          <div className="flex items-center justify-center">
            <button 
              className="flex items-center w-52 gap-2 bg-slate-800 text-white px-10 py-2 rounded-lg text-sm"
              onClick={() => setOpenModalImg(true)}
            >
              <BsEye className="text-2xl"/>
              <span className="text-sm ">Ver ejemplo</span>
            </button>
          </div>

          {/* HERRAMIENTAS */}
          <div className="mt-6 md:mt-12 flex items-center bg-white border border-gray-200 rounded-full px-6 md:px-8 py-6 shadow-sm w-full overflow-x-auto lg:overflow-hidden">
            
            {/* Título */}
            <div className="border-r border-gray-300 pr-6 md:pr-8 min-w-[180px]">
              <h4 className="text-sm font-bold text-gray-800 leading-tight">
                Herramientas que potencian mi trabajo
              </h4>
            </div>

            {/* Lista */}
            <div className="flex items-center gap-6 md:gap-8 pl-6 md:pl-8">
              {herramientasTrabajo.map((tool, index) => (
                <div key={index} className="flex items-center gap-3 flex-shrink-0">
                  
                  <div
                    className="w-6 h-6 flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: tool.icon }}
                  />

                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {tool.nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      {
        openModalImg && <ModalImage onClose={() => setOpenModalImg(false)} />
      }
    </div>
  );
}