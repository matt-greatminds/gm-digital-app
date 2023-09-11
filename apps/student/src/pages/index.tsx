import { Button } from "ui";
import { useGmdpData } from "gmdp-data-provider";

export default function Home() {
  const GmdpData = useGmdpData();
  return (
    <div>
      <h1 className="mx-auto mb-12 text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
        GM Student App
      </h1>
      <p>
        This the main landing page for the Student application. This application
        is separate from GM Main App and is connected via{" "}
        <a
          className="text-planning-artsAndLetters-base underline hover:text-planning-artsAndLetters-100"
          href="https://nextjs.org/docs/pages/building-your-application/deploying/multi-zones"
          target={"_blank"}
        >
          Next.js Multi Zones and next.config rewrites. This also leverages
          Module Federation to pull in a page at runtime. Click the button below
          to see it in action.
        </a>
      </p>
      <div className="my-10">
        <p className="font-medium">Shared data:</p>{" "}
        <div className="my-3">{JSON.stringify(GmdpData)}</div>{" "}
      </div>
      <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
        <Button href="/student/games" anchor>
          Check out Student Games
        </Button>
      </div>
    </div>
  );
}
