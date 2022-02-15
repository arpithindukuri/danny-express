import { MutableRefObject, useEffect, useRef } from "react";

/**
 * Following code is from:
 * https://css-tricks.com/using-requestanimationframe-with-react-hooks/
 */
export default function useAnimationFrame(
  // callbackRef: MutableRefObject<(deltaTime: number) => void>,
  callback: (deltaTime: number) => void
) {
  const requestRef = useRef(0);
  const previousTimeRef = useRef(0);

  const animate = (time: number) => {
    const deltaTime = time - previousTimeRef.current;
    // callbackRef.current(deltaTime);
    callback(deltaTime);

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);
}
