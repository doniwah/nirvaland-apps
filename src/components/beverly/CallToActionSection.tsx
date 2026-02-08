const CallToActionSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Side - Video */}
                    <div className="relative flex justify-center">
                        <div className="bg-[#2d3e68] rounded-2xl overflow-hidden shadow-2xl w-full max-w-[320px]">
                            <iframe
                                src="https://player.mux.com/dvdcnsnm2wf2m1cb5tg7Bsx7ZtcVYsG9S7TrU01htZoQ?metadata-video-title=Video+Detail+Interior&video-title=Video+Detail+Interior"
                                style={{ width: '100%', border: 'none', aspectRatio: '9/16' }}
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowFullScreen
                            ></iframe>
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
