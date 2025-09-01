import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              I&apos;m a passionate full-stack developer with 4+ years of
              experience creating digital solutions that make a difference. I
              specialize in React/Next.js development and love turning complex
              problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source projects, or mentoring
              fellow developers. I believe great software combines technical
              excellence with genuine user empathy.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                <span>4+ years of professional development experience</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                <span>50+ successful projects delivered</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                <span>Expertise in modern web technologies</span>
              </div>
            </div>

            <Link href="#contact">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center">
                Let&apos;s Work Together
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/KenPicture.png"
                alt="Picture of Kenneth"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-xl">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
