import { Button } from "ui";

export default function Home() {
  return (
    <div className="bg-em1-40">
      <h1 className="mx-auto mb-12 text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
        GM Games Module/App
      </h1>
      <p>
        This the main landing page for the Gaming Module. This application is
        separate from GM Student App and is connected Module Federation
      </p>
      <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
        <Button href="/student">Back to Student Home</Button>
      </div>
    </div>
  );
}
