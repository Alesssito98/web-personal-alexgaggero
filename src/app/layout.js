import localFont from "next/font/local";
import NavBar from "./componentes/navbar";
import Footer from "./componentes/footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div class="body">
          <NavBar></NavBar>
          <div>{children}</div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
