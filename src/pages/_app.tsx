import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import { TeslaSVGLogo } from "../components/TeslaSVGLogo";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <header className="sticky flex items-center justify-between py-4">
        <h1>
          <Link href="/">
            <TeslaSVGLogo />
          </Link>
        </h1>
        <nav>
          <Navbar />
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
