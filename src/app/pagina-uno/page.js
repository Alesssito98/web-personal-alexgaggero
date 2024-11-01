'use client'

import Image from "next/image"

export default function Home() {
  return (
    <div class="flex flex-col content-center m-8">

      <div class="flex justify-center align-middle m-8">
        
        <div class="flex text-white rounded-lg shadow-lg overflow-hidden max-w-2xl">
          <div class="rounded-full border-1 overflow-hidden m-8">
            <Image src="/AlexPerfil.jpeg" width={800} height={800} alt="Foto de perfil Alex" class="object-cover"/>
          </div>

          <div class="w-px bg-gray-600"></div>

          <div class="max-w-2xl p-4">
            <h2 class="text-xl font-semibold mb-2">Alex Gaggero Susperregui</h2>
            <p class="text-gray-300">Bienvenido a mi página personal. Esta página ha sido creada con React utilizando NextJS, CSS y Tailwind para un trabajo de la uni.</p>
          </div>
        </div>

      </div>

      <div><h1>PÁGINA PERSONAL - ALEX GAGGERO</h1></div>

    </div>

  );
}
