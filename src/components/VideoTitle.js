const VideoTitle = ({ title, overview }) => {
  if (!title) return null; // agar title hi missing hai to kuch mat dikhana

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-12 bg-gradient-to-r from-black via-black/50 to-transparent text-white">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
      <p className="w-1/2 text-lg mb-6 text-gray-200 drop-shadow-md">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
          ▶ Play
        </button>
        <button className="bg-gray-500/70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-700 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

