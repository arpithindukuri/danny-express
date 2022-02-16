export function HeroText({
  text,
  type,
}: {
  text: string;
  type: "secondary" | "primary" | "primary-colored";
}) {
  var size = "";
  var font = "";
  var color = "";

  if (type === "secondary") {
    size = "xs:text-lg md:text-2xl lg:text-4xl";
    font = "font-light";
    color = "text-neutral-500";
  }

  if (type === "primary") {
    size = "xs:text-2xl md:text-4xl lg:text-6xl";
    font = "font-medium";
    color = "text-neutral-500";
  }

  if (type === "primary-colored") {
    size = "xs:text-2xl md:text-4xl lg:text-6xl";
    font = "font-medium";
    color = "text-orange-500";
  }

  return (
    <div className={`w-fit leading-tight ${size} ${font} ${color}`}>{text}</div>
  );
}
