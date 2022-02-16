export default function NormalText({
  type,
  text,
}: {
  type: "primary";
  text: string;
}) {
  var size = "";
  var font = "";
  var color = "";

  if (type === "primary") {
    size = "xs:text-sm md:text-md lg:text-lg leading-tight";
    font = "font-light font-mono";
    color = "text-neutral-500";
  }

  return <div className={`w-fit ${size} ${font} ${color}`}>{text}</div>;
}
