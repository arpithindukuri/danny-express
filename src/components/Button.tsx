// The following code is derived from
// https://www.luckymedia.dev/blog/creating-a-reusable-button-component-with-react-and-tailwind

export default function Button({ children }: { children: any }) {
  return (
    <button
      className="leading-none px-6 py-4 rounded-md
                      bg-stone-300 hover:bg-orange-600
                      text-neutral-600 hover:text-neutral-100
                      text-lg font-medium
                      hover:scale-110
                      transition-all
                      active:scale-100 neumorphic-flat"
      type="button"
    >
      {children}
    </button>
  );
}
