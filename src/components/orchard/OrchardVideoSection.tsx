const OrchardVideoSection = () => {
    // You can easily change this to your YouTube video ID
    // For a YouTube URL like: https://www.youtube.com/watch?v=YOUR_VIDEO_ID
    // Just replace "YOUR_VIDEO_ID" below with your actual video ID
    const youtubeVideoId = "YOUR_VIDEO_ID";

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Left Side - Video */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <iframe
                                src="https://player.mux.com/JchM01wOR8WhxpYLHI2bUEJM4v0202vmM9q81Ppv8m3sMg?metadata-video-title=demo+video&video-title=demo+video"
                                style={{ width: '100%', border: 'none', aspectRatio: '16/9' }}
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side - Call to Action Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 leading-tight">
                            HIDUP HANYA SEKALI,
                            <br />
                            MASA LEWATKAN INVESTASI PROPERTI?
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            Kesempatan investasi rumah kos premium full furniture mulai 2,5M.
                        </p>

                        <p className="text-lg md:text-xl text-gray-900 font-bold">
                            Amankan unit sekarang sebelum terjual habis !!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrchardVideoSection;
