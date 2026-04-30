import { SiSearxng } from "react-icons/si";
import { PiUsersThree } from "react-icons/pi";
import { GiPuzzle } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineRocketLaunch } from "react-icons/md";


export const informacionModal = [
  {
    numeros: 1,
    iconCardModal:PiUsersThree ,
    title: "Contexto",
    description:
      "Entiendo el negocio y sus necesidades. ",
    color: "green",
    textoFooter:"Stakeholder - Reunion de PO "
  },
  {
    numeros: 2,
    iconCardModal:SiSearxng ,
    title: "Análisis",
    description:
      "Identifico flujos y reglas de negocio",
    color: "blue",
    textoFooter:"Story map - flujos - investigacion"
  },
  {
    numeros: 3,
    iconCardModal:GiPuzzle ,
    title: "Definición",
    description:
      "Estructuro la solución funcional",
    color: "orange",
    textoFooter:"Historias de usuario. Criterios (BDD)"
  },
  {
    numeros: 4,
    iconCardModal:CiCircleCheck ,
    title: "Validación",
    description:
      "Aseguro Alineacion con negocio y equipo",
    color: "purple",
    textoFooter:"UAT - ajustes - iteraciones"
  },
  {
    numeros: 5,
    iconCardModal:MdOutlineRocketLaunch ,
    title: "Resultado",
    description:
      "Entrega clara y sin ambiguedad",
    color: "purple",
    textoFooter:"Menos reprocesos. Mayor calidad"
  }
] as const

export default informacionModal


export const herramientasTrabajo = [
  { nombre: "Miro", icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.48 3.32a.71.71 0 0 0-.61.35l-3.32 5.92a.71.71 0 0 0 .61 1.07h1.64l-2.02 3.6a.71.71 0 0 0 .62 1.06h1.63l-2.01 3.6a.71.71 0 0 0 .62 1.06h4.5a.71.71 0 0 0 .62-.36l5.77-10.28a.71.71 0 0 0-.61-1.07h-3.23l2.01-3.6a.71.71 0 0 0-.62-1.06h-5.63l2.01-3.6a.71.71 0 0 0-.62-1.06h-2z" fill="#050038"/><path d="M11.66 8.52a.71.71 0 0 0-.62-.36H6.55a.71.71 0 0 0-.62 1.06l2.02 3.6h-1.63a.71.71 0 0 0-.62 1.06l2.02 3.6h-1.63a.71.71 0 0 0-.62 1.06l3.32 5.91a.71.71 0 0 0 .62.36h5.63a.71.71 0 0 0 .62-1.06l-2.02-3.6h1.64a.71.71 0 0 0 .61-1.06l-2.01-3.6h1.63a.71.71 0 0 0 .62-1.06l-2.01-3.6z" fill="#FFD02F"/></svg>
` },
  { nombre: "Figma", icon: `<svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>
` },
  { nombre: "Jira", icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.534 11.23a.854.854 0 0 0-.853-.854H1.477c-.472 0-.853.381-.853.854v8.528c0 .472.381.853.853.853h5.952c.22 0 .44-.092.597-.248l3.242-3.241a.85.85 0 0 0 .266-.597v-5.295zM23.376 11.23a.854.854 0 0 0-.854-.854h-9.204c-.472 0-.853.381-.853.854v8.528c0 .472.381.853.853.853h5.953c.22 0 .439-.092.597-.248l3.242-3.241c.164-.165.266-.386.266-.597v-5.295zM23.376.854A.854.854 0 0 0 22.522 0H16.57c-.22 0-.44.092-.597.248L12.73 3.49a.85.85 0 0 0-.266.597v5.295c0 .471.381.853.853.853h9.205c.472 0 .854-.382.854-.853V.854z" fill="#0052CC"/></svg>
` },
  { nombre: "Excel / Sheets", icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0H3a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8.5L14.5 0z" fill="#0F9D58"/><path d="M14.5 0v8.5H23L14.5 0z" fill="#E8F5E9" opacity=".2"/><path d="M16 11h-8v2h8v-2zm0 4h-8v2h8v-2zm-3-8h-5v2h5V7z" fill="#fff"/></svg>
` },
  { nombre: "ChatGPT", icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.28 7.53c-.52-1.99-1.95-3.51-3.86-4.04a7.9 7.9 0 0 0-7.3.94 7.9 7.9 0 0 0-7.3-.94c-1.91.53-3.34 2.05-3.86 4.04a7.86 7.86 0 0 0 .81 6.13 7.86 7.86 0 0 0-.81 6.13c.52 1.99 1.95 3.51 3.86 4.04a7.9 7.9 0 0 0 7.3-.94 7.9 7.9 0 0 0 7.3.94c1.91-.53 3.34-2.05 3.86-4.04a7.86 7.86 0 0 0-.81-6.13 7.86 7.86 0 0 0 .81-6.13zm-10.28 10.1c-.26 0-.52-.02-.78-.07l-3.32-.61a2.82 2.82 0 0 1-2.28-2.28l-.61-3.32a2.83 2.83 0 0 1 0-1.04l.61-3.32a2.82 2.82 0 0 1 2.28-2.28l3.32-.61a2.83 2.83 0 0 1 1.04 0l3.32.61a2.82 2.82 0 0 1 2.28 2.28l.61 3.32a2.83 2.83 0 0 1 0 1.04l-.61 3.32a2.82 2.82 0 0 1-2.28 2.28l-3.32.61c-.26.05-.52.07-.78.07z" fill="#10a37f"/></svg>
` },
  { nombre: "Investigación e IA", icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.28 7.53c-.52-1.99-1.95-3.51-3.86-4.04a7.9 7.9 0 0 0-7.3.94 7.9 7.9 0 0 0-7.3-.94c-1.91.53-3.34 2.05-3.86 4.04a7.86 7.86 0 0 0 .81 6.13 7.86 7.86 0 0 0-.81 6.13c.52 1.99 1.95 3.51 3.86 4.04a7.9 7.9 0 0 0 7.3-.94 7.9 7.9 0 0 0 7.3.94c1.91-.53 3.34-2.05 3.86-4.04a7.86 7.86 0 0 0-.81-6.13 7.86 7.86 0 0 0 .81-6.13zm-10.28 10.1c-.26 0-.52-.02-.78-.07l-3.32-.61a2.82 2.82 0 0 1-2.28-2.28l-.61-3.32a2.83 2.83 0 0 1 0-1.04l.61-3.32a2.82 2.82 0 0 1 2.28-2.28l3.32-.61a2.83 2.83 0 0 1 1.04 0l3.32.61a2.82 2.82 0 0 1 2.28 2.28l.61 3.32a2.83 2.83 0 0 1 0 1.04l-.61 3.32a2.82 2.82 0 0 1-2.28 2.28l-3.32.61c-.26.05-.52.07-.78.07z" fill="#10a37f"/></svg>` },
];

