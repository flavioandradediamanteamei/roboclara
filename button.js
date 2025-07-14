export function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 rounded font-semibold text-white" {...props}>
      {children}
    </button>
  );
}
