export default function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
      {children}
    </button>
  );
}
