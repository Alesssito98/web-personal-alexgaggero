import Link from "next/link";
import Image from "next/image"

export default function Home() {
    return (
      <div class="flex flex-row">

        <div class="max-w-sm border-gray-300 bg-black text-white rounded-lg shadow-lg overflow-hidden m-8">
          <div class="h-48 flex items-center justify-center m-8">
            <Image src="/ProyectoVercel.jpg" width={500} height={500} alt="Imagen de proyecto vercel" class="h-full w-full object-cover"/>
          </div>

          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">Proyecto Vercel</h2>
            <p class="text-justify text-gray-300">Este es un proyecto que realicé siguiendo el tutorial de Next dónde se utiliza Vercel para guardar una base de datos y desplegar la web. Tiene un página principal y después un menú con un menú de navegación.</p>
            <p class="text-gray-300 text-justify"><a href="https://next-js-ebon-phi.vercel.app/" target="_blank"><u>Enlace al Proyecto Vercel</u></a></p>
            <p class="text-gray-300 text-justify"><a href="https://next-js-ebon-phi.vercel.app/dashboard" target="_blank"><u>Enlace a la parte 2 del Proyecto Vercel</u></a></p>
          </div>
        </div>

        <div class="max-w-sm border-gray-300 bg-black text-white rounded-lg shadow-lg overflow-hidden m-8">
          <div class="h-48 flex items-center justify-center m-8">
            <Image src="/CV.jpg" width={500} height={500} alt="Imagen de CV" class="h-full object-cover"/>
            <Image src="/porfoliojpg.jpg" width={500} height={500} alt="Imagen de porfolio" class="h-full object-cover"/>
          </div>

          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">Proyecto CV/Porfolio HTML5UP</h2>
            <p class="text-justify text-gray-300">En este proyecto se utilizó una plantilla de HTML5UP para hacer una web que se desplegara desde un servidor Apache en Ubuntu. Finalmente se subió a GitHub y se desplegó ahí. Son un total de 2 páginas web desplegadas independientemente. En la primera hay un CV y en la segunda hay un Porfolio.</p>
            <p class="text-gray-300 text-justify"><a href="https://alesssito98.github.io/Cv-Alex-Gaggero/" target="_blank"><u>Enlace al CV</u></a></p>
            <p class="text-gray-300 text-justify"><a href="https://alesssito98.github.io/Porfolio---Alex-Gaggero/" target="_blank"><u>Enlace al Porfolio</u></a></p>

          </div>
        </div>

        <div class="max-w-sm border-gray-300 bg-black text-white rounded-lg shadow-lg overflow-hidden m-8">
          <div class="h-48 flex items-center justify-center m-8">
            <Image src="/web-sencilla.jpg" width={500} height={500} alt="Imagen de CV" class="h-full object-cover"/>
          </div>

          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">Proyecto Web-Sencilla</h2>
            <p class="text-justify text-gray-300">Este fue un proyecto colaborativo entre toda la clase para practicar el fork de GitHub. El objetivo fue realizar una web sencilla en dónde cada persona añadia o modificaba algo ya existente.</p>
            <p class="text-gray-300 text-justify"><a href="https://javi-profe.github.io/web-sencilla" target="_blank"><u>Enlace a web-sencilla</u></a></p>

          </div>
        </div>

      </div>
    );
  }