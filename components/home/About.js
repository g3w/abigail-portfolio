"use client";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Abigail Tetteh, a Software Engineer passionate about mentoring, community impact, and scalable technology.",
};

export default function About() {
  return (
    
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-gray-50"
    >
    <div className="max-w-7xl mx-auto">


      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="w-40 h-40 rounded-full bg-gray-200 flex-shrink-0">
            <img
                src="/images/Abigail.JPG"
                alt="Abigail Efua Tetteh"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/80 shadow-lg object-cover"
            />
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <p className="text-gray-700 mb-3">
            I’m a Software Engineer at Bank of America, passionate about technology,
            community impact, and building solutions that make life easier.
          </p>
          <p className="text-gray-500 mt-2">
            I love mentoring young girls in STEM, attending tech events, and
            continuously learning new technologies.
          </p>
        </div>
      </div>

      {/* 👇 SOFT SECTION DIVIDER (THIS IS THE PART YOU ASKED ABOUT) */}
      <div className="mt-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </div>
    </section>
  );
}
