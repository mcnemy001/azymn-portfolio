export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black-100">
      <div className="flex space-x-2">
        <div className="w-4 h-4 rounded-full bg-cyan-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-cyan-500 animate-bounce delay-150"></div>
        <div className="w-4 h-4 rounded-full bg-cyan-500 animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
