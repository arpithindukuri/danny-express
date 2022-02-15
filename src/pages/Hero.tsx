import Train from "../components/Train";

export default function Hero() {
  return (
    <div
      className="flex xs:flex-col xl:flex-row-reverse
                justify-around items-center
                box-border xs:p-16 md:p-32 xl:p-52"
    >
      <div className="flex flex-col justify-center">
        <Train />
      </div>
      <div className="w-fit flex flex-col justify-center">
        <HeroText type="secondary" text="hi, welcome to" />
        <div className="flex w-fit">
          <HeroText type="primary" text="danny." />
          <HeroText type="primary-colored" text="express" />
        </div>
      </div>
    </div>
  );
}

function HeroText({
  text,
  type,
}: {
  text: string;
  type: "secondary" | "primary" | "primary-colored";
}) {
  var size = "";
  var weight = "";
  var color = "";

  if (type === "secondary") {
    size = "xs:text-lg md:text-2xl lg:text-4xl";
    weight = "font-light";
    color = "text-neutral-500";
  }

  if (type === "primary") {
    size = "xs:text-2xl md:text-4xl lg:text-6xl";
    weight = "font-medium";
    color = "text-neutral-300";
  }

  if (type === "primary-colored") {
    size = "xs:text-2xl md:text-4xl lg:text-6xl";
    weight = "font-medium";
    color = "text-orange-500";
  }

  return <div className={`${size} ${weight} ${color}`}>{text}</div>;
}
