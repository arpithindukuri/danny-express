import Train from "../components/Train";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <div className="w-full bg-neutral-900 text-neutral-100">
      <section className="w-full min-h-screen">
        <Hero />
      </section>
    </div>
  );
}
