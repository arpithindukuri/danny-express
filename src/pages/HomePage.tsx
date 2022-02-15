import Train from "../components/Train";

export default function HomePage() {
  return (
    <div className="w-full bg-neutral-900 text-neutral-100">
      <section
        className="w-full min-h-screen
      flex xs:flex-col lg:flex-row-reverse justify-center
      xs:p-16 md:p-32 xl:p-52"
      >
        <Train />
        <div className="flex flex-col justify-center">
          <h1 className="xs:text-2xl md:text-4xl lg:text-6xl text-neutral-500">
            hi, welcome to
          </h1>
          <div className="flex">
            <h1 className="xs:text-4xl md:text-6xl lg:text-8xl text-neutral-100">
              danny.
            </h1>
            <h1 className="xs:text-4xl md:text-6xl lg:text-8xl text-amber-500">
              express
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
