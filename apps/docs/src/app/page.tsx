import { Metadata } from "next";
import { Button } from "ui";

export const metadata: Metadata = {
  title: "GM - Docs",
};

export default function Home() {
  return (
    <div>
      <h1 className="mx-auto mb-12 text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
        GM Docs App
      </h1>
      <p>
        This the main landing page for the docs application. This application is
        separate from GM Main App and is connected via{" "}
        <a
          className="text-planning-artsAndLetters-base underline hover:text-planning-artsAndLetters-100"
          href="https://nextjs.org/docs/pages/building-your-application/deploying/multi-zones"
          target={"_blank"}
        >
          Next.js Multi Zones and next.config rewrites
        </a>
      </p>
      <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
        <Button href="/" anchor>
          GM Main App
        </Button>
      </div>
    </div>
  );
}
