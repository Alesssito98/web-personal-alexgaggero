import Image from "next/image"

export default function Footer() {
    return (
      <div class="footer">
         
        <p>Página creada por Alex Gaggero Susperregui - Proyecto realizado con <a class="enlace" href="https://es.react.dev/" target="_blank"><u>React</u></a> - JS Framewor <a class="enlace" href="https://nextjs.org/" target="_blank"><u>NextJS</u></a> - <a class="enlace" href="https://u-tad.com/" target="_blank"><u>U-tad · Centro Universitario de Tecnología y Arte Digital</u></a></p>

        <div class="redes">

          <li>
            <ul>
              <a href="https://github.com/Alesssito98" target="_blank" class="social"><Image src="/github.png" width={15} height={15}/>GitHub</a>
            </ul>
            <ul>
              <a href="https://www.linkedin.com/in/alex-gaggero-susperregui-6124a1175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="social"><Image src="/linkedin.png" width={15} height={15}/>Linkedin</a>
            </ul>
            <ul>
              <a href="https://www.instagram.com/alex_graphics13?igsh=amE0dTJjc2NwaGpo" target="_blank" class="social"><Image src="/instagram.png" width={15} height={15}/>Instagram</a>
            </ul>
          </li>

        </div>

      </div>
    );
  }