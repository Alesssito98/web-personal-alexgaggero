import Link from "next/link"

export default function NavBar() {
    return (
      <div class="navbar">
         
        <h1>Alex Gaggero</h1>
        <li>
          <ul id="izquierda">
            <Link href={"/pagina-uno/"}>
              <button>Inicio</button>
            </Link>
          </ul>
          <ul>
          <Link href={"/pagina-dos/"}>
            <button>Trabajos Web</button>
          </Link>
          </ul>
          <ul id="derecha">
          <Link href={"/pagina-tres/"}>
            <button>Trabajos Diseño Digital</button>
          </Link>
          </ul>
        </li>

      </div>
    );
  }