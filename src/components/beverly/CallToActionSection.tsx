const CallToActionSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Side - YouTube Video */}
                    <div className="relative">
                        <div className="bg-[#2d3e68] rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                            {/* YouTube Embed Placeholder - Replace with actual YouTube URL */}
                            <div className="text-center">
                                <p className="text-6xl md:text-7xl font-bold text-black">yutub</p>
                            </div>
                            {/* Uncomment and replace VIDEO_ID with actual YouTube video ID:
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Beverly Kost Investment Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2d3e68] mb-6 leading-tight uppercase">
                            HIDUP HANYA SEKALI,
                            <br />
                            MASA LEWATKAN INVESTASI PROPERTI?
                        </h2>

                        <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
                            Kesempatan investasi rumah kos premium full furniture mulai 2,5M.
                        </p>

                        <p className="text-base md:text-lg font-bold text-gray-900">
                            Amankan unit sekarang sebelum terjual habis !!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
