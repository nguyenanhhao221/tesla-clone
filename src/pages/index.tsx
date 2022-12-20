import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../components/CtaButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tesla</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="model-3">
          <div className="relative z-0 h-screen w-screen">
            <div className="absolute inset-0 -z-10 h-full w-screen overflow-hidden">
              <Image
                src={
                  "https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD"
                }
                alt="model-3"
                width={500}
                height={800}
                className=" object-cover object-center md:object-fill lg:hidden"
                priority={true}
              />
              <Image
                src={
                  "https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
                }
                alt="model-3"
                width={2000}
                height={2000}
                className="hidden object-cover object-center lg:block"
                priority={true}
              />
            </div>
            <div className="grid h-full w-screen grid-cols-1 grid-rows-4 place-items-center ">
              <div className="row-start-2 text-center">
                <h1 className="text-4xl">Model 3</h1>
                <Link
                  className="font-mono underline underline-offset-2"
                  href={"/test-drive"}
                >
                  Schedule a Test Drive
                </Link>
              </div>
              <div className="row-start-4 flex w-full flex-col gap-4 px-6  md:flex-row">
                <CtaButton displayText="Buy Now" primary />
                <CtaButton displayText="Custom Order" primary={false} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
