import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Dispatch,
  SetStateAction,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import imageDataToAscii from "../helper/ImageToAscii";

function Model() {
  const ref = useRef<Mesh>(null);

  const result = useLoader(GLTFLoader, "/assets/locomotive.glb");

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.005;
  });

  return <primitive ref={ref} object={result.scene} />;
}

function Asciify({
  setAscii,
  children,
}: {
  setAscii: Dispatch<SetStateAction<string>>;
  children?: any;
}) {
  const [data, setData] = useState<Uint8ClampedArray>(new Uint8ClampedArray());

  // const setAsciiFromContextFuncRef = useRef(() => {});
  // const hiddenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  // const hiddenContextRef = useRef<CanvasRenderingContext2D | null>(null);
  // const hiddenImageRef = useRef<HTMLImageElement | null>(null);

  const { width, height } = useThree((state) => {
    return {
      width: Math.floor(state.viewport.width * state.viewport.factor),
      height: Math.floor(state.viewport.height * state.viewport.factor),
    };
  });

  // useEffect(() => {
  //   // set up canvas ref
  //   const canvas = document.createElement("canvas");
  //   hiddenCanvasRef.current = canvas;
  //   document.getElementById("root")?.appendChild(canvas);

  //   // set up context ref
  //   hiddenContextRef.current = hiddenCanvasRef.current.getContext("2d");

  //   // set up image ref
  //   const img = document.createElement("img");
  //   hiddenImageRef.current = img;
  //   document.getElementById("root")?.appendChild(img);
  // }, []);

  // function setRefsFromImageURL(url: string) {
  //   if (!hiddenImageRef.current) return;

  //   hiddenImageRef.current.src = url;

  //   hiddenContextRef.current?.drawImage(
  //     hiddenImageRef.current,
  //     0,
  //     0,
  //     width,
  //     height
  //   );

  //   // data.current =
  //   //   hiddenContextRef.current?.getImageData(0, 0, width, height)?.data ||
  //   //   new Uint8ClampedArray();

  //   // console.log(data.current.every((val) => val === 0));
  // }

  const setAsciiFromContextFuncRef = () => {
    // console.log(data.current.every((val) => val === 0));

    if (data.length === 0) return;

    const ascii = imageDataToAscii(data, width, height, 2);

    setAscii(() => ascii);
  };

  // useAnimationFrame(setAsciiFromContextFuncRef);

  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
  }, 1);

  useFrame(({ gl }) => {
    // setRefsFromImageURL(gl.domElement.toDataURL());
    const context = gl.domElement.getContext("webgl2");
    var pixels = new Uint8ClampedArray(
      (context?.drawingBufferWidth || 0) *
        (context?.drawingBufferHeight || 0) *
        4
    );
    context?.readPixels(
      0,
      0,
      context.drawingBufferWidth,
      context.drawingBufferHeight,
      context.RGBA,
      context.UNSIGNED_BYTE,
      pixels
    );
    // const imgData = context?.getImageData(0, 0, width, height)?.data;
    // console.log(context);

    setData(pixels || new Uint8ClampedArray());
  }, 2);

  useFrame(() => {
    setAsciiFromContextFuncRef();
  }, 3);

  return <>{children}</>;
}

export default function Train() {
  const [ascii, setAscii] = useState("");
  const hiddenCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    hiddenCanvasRef.current = canvas;
    // document.getElementById("root")?.appendChild(canvas);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <pre>
        <p
          className="font-mono leading-none text-center
                      xs:text-6xs md:text-5xs lg:text-4xs
                    text-neutral-500"
        >
          {ascii}
        </p>
      </pre>
      <Canvas
        gl={{
          powerPreference: "low-power",
          canvas: hiddenCanvasRef.current || undefined,
        }}
        camera={{
          fov: 20,
          near: 0.1,
          far: 100,
          position: [0, 2, 20],
        }}
        style={{
          position: "absolute",
          width: "200px",
          height: "125px",
        }}
      >
        <Asciify setAscii={setAscii}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          {/* <Box position={[-1.2, 0, 0]} /> */}
          {/* <Box position={[1.2, 0, 0]} /> */}
          <Suspense fallback={<>"NULL"</>}>
            <Model />
          </Suspense>
        </Asciify>
      </Canvas>
    </div>
  );
}
