import { Link } from "react-router-dom";
import { Contactos } from "../../data/FooterData";

export default function Footer() {
  return (
    <div className="bg-[linear-gradient(90deg,rgba(0,0,0,1),rgba(255,1))]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

        <div className="gap-10 row-gap-6 mb-8 flex justify-center">

          {/* CONTACTS */}
          <div className="space-y-2 text-sm">
            <h2 className="text-3xl sm:text-3xl md:text-5xl text-white font-bold tracking-tight text-center mb-8">
              Contactos
            </h2>

            {Contactos.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="flex items-center">
                  <Icon className="h-8 w-8 text bg-white rounded-lg" />
                  <Link
                    to='/'
                    className="ml-2 transition-colors duration-300 text-white italic font-semibold text-xl hover:text-deep-purple-800"
                  >
                    {item.value}
                  </Link>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}