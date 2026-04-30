

export default function Hero() {
  return (
    <div className="relative mx-auto max-w-5xl isolate overflow-hidden min-h-[70vh] sm:min-h-[100vh] flex items-center py-24 sm:py-32 m-16">
      <img
        alt=""
        src="Perfil.jpeg"
        className="absolute inset-0 -z-10 rounded-md size-full object-cover object-right md:object-center"
      />

      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="p-12 pt-72">
        <div className="flex flex-col mx-auto max-w-4xl gap-6">
          <h4 className="text-white lg:text-4xl italic border-b-2 w-36">Portafolio</h4>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[100px] pt-64 italic">Ángela María</h2>
          <p className="text-white lg:text-2xl italic">Associate Product Owner | Analista Funcional SR | Enfoque en producto | Transformo requerimientos en soluciones claras y alineadas al negocio.</p>
        </div>
        
      </div>
    </div>
  )
}
