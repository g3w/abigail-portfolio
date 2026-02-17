"use client";

export default function Hero() {
    return (
        <section className="pt-28 pb-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white animate-fadeIn">
            {/* Profile Picture */}
            <img
                src="/images/Abigail.JPG"
                alt="Abigail Efua Tetteh"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/80 shadow-lg object-cover"
            />

            {/* Text Content */}
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    Hi, I'm Abigail Efua Tetteh
                </h1>
                <p className="text-lg md:text-xl mb-6 text-gray-200">
                    Software Engineer · Community Builder · Lifelong Learner
                </p>
                <a
                    href="/Abigail_Tetteh_CV.pdf"
                    download
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
                >
                    Download CV
                </a>
                <a href="#contact" className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                    Contact Me
                </a>
            </div>
        </section>
    );
}
