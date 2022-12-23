import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import { TeslaSVGLogo } from "../components/TeslaSVGLogo";
import { MenuButton } from "../components/MenuButton";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between py-4">
        <h1 className="lg:basis-1/3">
          <Link href="/">
            <TeslaSVGLogo />
          </Link>
        </h1>
        <nav className="hidden lg:block lg:basis-1/3">
          <Navbar />
        </nav>
        <div className="lg:basis-1/3">
          <MenuButton />
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
