export default function AuthBox({ children }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-800px] h-[500px] bg-white rounded-xl shadow-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}