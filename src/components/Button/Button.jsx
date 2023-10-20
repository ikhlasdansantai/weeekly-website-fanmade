export default function Button({ color, size, className, onClick, children }) {
  const variants = {
    colors: {
      red: "",
      default: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
    },
    size: {
      small: "px-3 py-2 text-sm",
      base: "px-5 py-2.5 text-sm",
    },
  };

  return (
    <button className={`font-medium rounded-lg ${className} ${variants.colors[color || "default"]} ${variants.size[size || "base"]}`} onClick={onClick}>
      {children}
    </button>
  );
}
