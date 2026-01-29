const ClusterSection = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#4a4e7c] via-[#5a5d8c] to-[#4a4e7c]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Photo Slide Placeholder */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 aspect-[4/5] flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-gray-800">photo</p>
                                <p className="text-4xl md:text-5xl font-bold text-gray-800">slide</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Cluster
                            <br />
                            Rumah Kos Premium
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed text-white/90">
                            BeverlyKos adalah kos modern dengan kamar nyaman, lingkungan tertata,
                            dan lokasi strategis—pilihan praktis untuk tinggal tenang sekaligus
                            bernilai jangka panjang.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClusterSection;
