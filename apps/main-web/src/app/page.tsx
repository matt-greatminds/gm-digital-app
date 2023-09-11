import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GM - Main App",
};

export default function Home() {
  return (
    <div>
      <h1 className="mx-auto mb-12 text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
        GM Main App
      </h1>
      <p className="mx-auto text-center">
        {" "}
        This is the main landing page for Great Minds
      </p>
    </div>
  );
}
