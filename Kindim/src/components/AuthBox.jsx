export default function AuthBox({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[800px] h-[500px] bg-white rounded-lg shadow-2xl flex overflow-hidden">
        {children}
      </div>
    </div>
  );
}
