import { FaStethoscope, FaCheckCircle } from "react-icons/fa";
import { Impacto, Metricas, Solucion } from "../../data/DataModalClinica";
import { CiCircleCheck, CiDatabase } from "react-icons/ci";
import { GiBatteryPack } from "react-icons/gi";
import { LuTrendingUp } from "react-icons/lu";
import { BsDiagram2 } from "react-icons/bs";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { useState } from "react";
import ModalVideo from "./video-modal/ModalVideo";

interface Props {
  onClose: () => void;
}

export default function ModalHistoriaClinica({ onClose }: Props) {
  
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);


  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      {/* CONTENEDOR */}
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-6xl relative">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition"
        >
          ✕
        </button>

        {/* MODAL */}
        <section className="p-4 lg:p-6 rounded-xl bg-white max-h-[90vh] overflow-y-auto ">
          
          <div className="grid lg:grid-cols-2 gap-4">

            {/* IZQUIERDA */}
            <div className="rounded-3xl shadow-xl p-6 space-y-4">

              {/* HEADER */}
              <div className="flex items-center gap-4">
                <div className="bg-indigo-600 p-3 rounded-xl">
                  <FaStethoscope className="text-white text-xl" />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Automatización de Historia Clínica Ocupacional
                </h2>
              </div>

              <p className="text-slate-500 text-sm">
                Transformé un proceso manual en un sistema automatizado en Excel con macros,
                reduciendo tiempos y costos.
              </p>

              {/* MÉTRICAS */}
              <div className="grid grid-cols-3 gap-3">
                {Metricas.map((item, i) => (
                  <div key={i} className="border rounded-2xl p-3">
                    <div className="text-indigo-600 text-lg mb-1">
                      {item.icon}
                    </div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CONTEXTO */}
              <div>
                <div className="flex items-center mb-2 gap-2">
                  <GiBatteryPack className="text-purple-500 text-xl p-1 bg-purple-100 rounded-full"/>
                  <h3 className="font-semibold text-slate-800 text-sm">Contexto</h3>
                </div>
                <p className="text-slate-600 text-xs">
                  El médico diligenciaba
                  <span className="text-purple-600 font-semibold"> 10 historias diarias </span>
                  en formatos de
                  <span className="text-purple-600 font-semibold"> 4 hojas </span>,
                  generando lentitud y costos.
                </p>
              </div>

              {/* SOLUCIÓN */}
              <div>
                <div className="flex items-center mb-2 gap-2">
                  <CiCircleCheck className="text-green-800 text-xl bg-green-100 rounded-full"/>
                  <h3 className="font-semibold text-slate-800 text-sm">Mi solución</h3>
                </div>

                <p className="text-slate-600 text-xs">
                  Diseñé un{" "}
                  <span className="text-green-900 font-semibold">
                    sistema automatizado en Excel
                  </span>{" "}
                  con macros.
                </p>

                <ul className="space-y-1 text-xs text-slate-600 pt-2">
                  {Solucion.map((item, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <FaCheckCircle className="text-green-500 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMPACTO */}
              <div>
                <div className="flex items-center mb-2 gap-2">
                  <LuTrendingUp className="text-orange-600 text-xl bg-orange-100 rounded-full"/>
                  <h3 className="font-semibold text-slate-800 text-sm">Impacto</h3>
                </div>
                <ul className="space-y-1 text-xs text-slate-600">
                  {Impacto.map((item, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <FaCheckCircle className="text-orange-400 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* DERECHA */}
            <div className="flex flex-col gap-4">

              <img
                src="/AntesDespues.jpeg"
                alt=""
                className="rounded-2xl w-full max-h-[200px] object-cover"
              />

              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl shadow p-3">
                  <BsDiagram2 className="text-purple-600 mb-2" />
                  <img src="/flujo.jpeg" alt="" className="rounded w-full" />
                </div>

                <div className="bg-white rounded-2xl shadow p-3">
                  <CiDatabase className="text-purple-600 mb-2" />
                  <img src="/diagrama.jpeg" alt="" className="rounded w-full" />
                </div>
              </div>

              {/* CTA */}
              <div className="bg-green-50 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 text-white p-2 rounded-full">
                    <BiMoviePlay />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      Así funciona en la práctica
                    </p>
                  </div>
                </div>

                <button onClick={() =>  {setVideoId("/public/VideoPortfolio.mp4"); setOpenVideoModal(true)}} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                  <IoPlayCircleOutline className="text-2xl"/>
                  <span className="text-sm">Ver reel del sistema</span>
                </button>
              </div>

            </div>

          </div>
        </section>

      </div>
      {
        openVideoModal && videoId &&(
          <ModalVideo onClose={() => {setVideoId("/public/VideoPortfolio.mp4"); setOpenVideoModal(false)}} videoId={videoId} />
        )
      }
    </div>
  );
}