import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../App.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto max-w-7xl px-4">
          <ul className="relative flex h-20 items-center justify-between">            
            <li className="flex items-center gap-2 sm:gap-4">
              
              {/* BTN HAMBURGUESA */}
              <button
                aria-label="Abrir menú"
                className="md:hidden"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <Link
                to=""
                className="
                  font-semibold
                  text-sm sm:text-base
                  absolute left-1/2 -translate-x-1/2
                  md:static md:translate-x-0
                  whitespace-nowrap
                "
              >
                SCRUM MASTER
              </Link>
            </li>

            <li className="hidden md:flex items-center gap-3">
              
              <button
                aria-label="contacto"
                className="
                  rounded-full bg-[#776fff] 
                  px-4 py-2 text-sm
                  whitespace-nowrap
                "
              >
                <Link to="/" className="rounded">
                  Contacto
                </Link>
              </button>

              <select
                aria-label="opciones"
                className="border rounded px-2 py-1 text-sm"
              >
                <option>ES</option>
                <option>EN</option>
                <option>FRA</option>
              </select>

            </li>

          </ul>

          {/* MOBILE */}
          {open && (
            <div className="md:hidden px-4 pb-4 space-y-3">
              
              <Link to="/" className="block">
                contacto
              </Link>

              <select aria-label="seleccion idiomas" className="w-full border rounded px-2 py-2 text-sm">
                <option>ES</option>
                <option>EN</option>
                <option>FRA</option>
              </select>

            </div>
          )}
        </nav>
      </header>
    </>
  )
}