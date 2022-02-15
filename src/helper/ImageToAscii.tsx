// const AsciiLookup = "@%#*+=-:. ";
// const AsciiLookup = "$@B%#*qwZOzt/\\|()1?-_+~<>;:,\"^`'. ";
const AsciiLookup =
  "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

export default function imageDataToAscii(
  data: Uint8ClampedArray,
  imageWidth: number,
  imageHeight: number,
  factor: number = 10
): string {
  var result = "";

  for (let j = imageHeight - 1; j > 0; j -= factor) {
    for (let i = 0; i < imageWidth; i += factor) {
      const dataIndex = Math.floor((j * imageWidth + i) * 4);

      if (dataIndex >= data.length) continue;

      const r = data[dataIndex];
      const g = data[dataIndex + 1];
      const b = data[dataIndex + 2];
      const a = data[dataIndex + 3];

      const luminosity = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

      // if (r !== 0) {
      //   console.log(r);
      // }

      const val = a < 1 ? luminosity * a : luminosity;

      const char = AsciiLookup.charAt(
        Math.floor((1 - luminosity) * (AsciiLookup.length - 1))
      );

      if (char === undefined) result += "  ";
      else result += char + char;
    }

    result += "\n";
  }

  return result;
}
