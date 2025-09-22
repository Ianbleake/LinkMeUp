import React from 'react'

export const Info = (): React.ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 py-6 px-8 md:px-12 max-w-3xl mx-auto">
      {/* Título principal */}
      <h1 className="text-3xl font-semibold text-emerald-600 self-start text-center md:text-left">
        Acerca de LinkMeUp
      </h1>

      {/* Descripción */}
      <p className="text-justify text-lg font-normal text-gray-600 leading-relaxed">
        LinkMeUp es una herramienta sencilla y ágil para ayudarte a organizar y 
        registrar grandes listas de contactos directamente en tu dispositivo.
        Con solo unos clics podrás transformar tus archivos en listas listas 
        para exportar y usar en cualquier momento.
      </p>

      {/* Sección cómo funciona */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
          Cómo funciona
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
          <li>Descarga la plantilla y completa tus contactos.</li>
          <li>Sube el archivo desde la app.</li>
          <li>Exporta la VCard e importa todos tus contactos en segundos.</li>
        </ul>
      </div>

      {/* Beneficios */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
          <li>Rápido y fácil de usar.</li>
          <li>Seguro y confiable.</li>
          <li>Compatible con múltiples dispositivos.</li>
        </ul>
      </div>

      {/* Contacto */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
          Contacto
        </h2>
        <p className="text-lg text-gray-600">
          ¿Dudas o sugerencias? Escríbenos a{" "}
          <a
            href="mailto:soporte@linkmeup.com"
            className="text-emerald-600 underline font-medium"
          >
            soporte@linkmeup.com
          </a>
        </p>
      </div>
    </div>
  )
}
