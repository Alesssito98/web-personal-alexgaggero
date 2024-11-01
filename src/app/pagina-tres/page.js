import Image from "next/image"

export default function Home() {
    return (
      <div class="flex flex-row">

      <div class="max-w-sm border-gray-300 bg-black text-white rounded-lg shadow-lg overflow-hidden m-8">
        <div class="h-48 flex items-center justify-center m-8">
          <Image src="/portada.jpeg" width={500} height={500} alt="Imagen de postada canción" class="h-full w-full object-cover"/>
        </div>

        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Portada Rodry</h2>
          <p class="text-justify text-gray-300">Diseño para la portada de una canción de Rodry.</p>
          <p class="text-gray-300 text-justify"><a href="https://open.spotify.com/intl-es/artist/73TRkINpTWLP5i1ymnwpil" target="_blank"><u>Enlace al Spotify de Rodry</u></a></p>
        </div>
      </div>

      <div class="max-w-sm border-gray-300 bg-black text-white rounded-lg shadow-lg overflow-hidden m-8">
        <div class="h-48 flex items-center justify-center m-8">
          <Image src="/joker.jpeg" width={500} height={500} alt="Ilustración del joker" class="h-full object-cover"/>
        </div>

        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Ilustración Joker</h2>
          <p class="text-justify text-gray-300">En este trabajo tuvimos que dibujar una ilustración del Joker siguiendo los pasos del ilustrador Oscar Llorens.</p>
          <p class="text-gray-300 text-justify"><a href="https://oscarllorens.com/" target="_blank"><u>Enlace a la web de Oscar Llorens</u></a></p>

        </div>
      </div>

      <div class="max-w-sm border-gray-300 bg-black text-white rounded-lg shadow-lg overflow-hidden m-8">
        <div class="h-48 flex items-center justify-center m-8">
          <Image src="/dementor.jpeg" width={500} height={500} alt="ICollage dementor" class="h-full object-cover"/>
        </div>

        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Collage Dementor</h2>
          <p class="text-justify text-gray-300">Este es un collage que realicé mientras estabamos en cuarentena utilizando distintas imagenes de internet.</p>
          <p class="text-gray-300 text-justify"><a href="https://www.instagram.com/alex_graphics13?igsh=amE0dTJjc2NwaGpo" target="_blank"><u>Enlace a mi instagram de diseño</u></a></p>

        </div>
      </div>

    </div>
    );
  }