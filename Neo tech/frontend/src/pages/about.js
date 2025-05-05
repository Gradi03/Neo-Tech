import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Award, BadgeCheck, Clock, Settings, MapPin } from "lucide-react";

// Shared Framer Motion Config
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | NEO DStv Technologies</title>
        <meta
          name="description"
          content="Learn about NEO DStv Technologies: Experts in DStv installation, TV mounting, and security solutions across the Western Cape."
        />
      </Head>

      <main className="bg-white">
        {/* Hero */}
        <section className="py-16 px-6 text-center md:py-20 bg-gray-50">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-blue-600 mb-4">
              Professional Installations. Trusted Service.
            </h1>
            <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
              At NEO DStv Technologies, we bring over a decade of experience in
              connecting homes and businesses with world-class entertainment and
              security systems.
            </p>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <motion.div {...fadeInLeft}>
              <div className="relative w-full h-[250px] md:h-[350px]">
                <Image
                  src="/DstvDish.webp"
                  alt="Dstv Installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-3xl shadow-xl"
                  priority
                />
              </div>
            </motion.div>

            <motion.div {...fadeInRight}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About NEO DStv Technologies
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                We specialize in DStv installations, TV wall mounting, satellite
                repairs, CCTV security setups, and full home entertainment
                systems. Our mission is simple: deliver fast, affordable, and
                premium-quality services across Cape Town and the Western Cape.
              </p>
              <Link href="/contact" className="inline-block">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105">
                  Get In Touch
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.h2
              {...fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            >
              Our Services
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                "DStv Installations & Upgrades",
                "TV Wall Mounting Services",
                "CCTV & Surveillance Installations",
                "Satellite Dish Repairs & Maintenance",
                "Home Theatre & Entertainment Systems",
                "Custom Security System Setups",
                "TV repair for all brands",
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-center"
                >
                  <p className="text-md md:text-lg font-semibold text-gray-700">
                    {service}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <motion.div {...fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Clients Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="text-blue-600 w-6 h-6 mt-1" />
                  <p className="text-gray-700 text-base md:text-lg">
                    Over 10 Years of Industry Experience
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <BadgeCheck className="text-blue-600 w-6 h-6 mt-1" />
                  <p className="text-gray-700 text-base md:text-lg">
                    Certified Professional Installers
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-blue-600 w-6 h-6 mt-1" />
                  <p className="text-gray-700 text-base md:text-lg">
                    Quick Turnaround & Affordable Pricing
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <Settings className="text-blue-600 w-6 h-6 mt-1" />
                  <p className="text-gray-700 text-base md:text-lg">
                    Custom Solutions for Homes & Businesses
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 w-6 h-6 mt-1" />
                  <p className="text-gray-700 text-base md:text-lg">
                    Serving All Cape Town and Western Cape
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInRight}>
              <div className="relative w-full h-[250px] md:h-[350px]">
                <Image
                  src="/cctv.webp"
                  alt="CCTV Setup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-3xl shadow-xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-6 text-center bg-gray-50">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let&apos;s Connect You to the Future
            </h2>
            <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Contact NEO DStv Technologies for reliable, professional, and fast
              installations tailored to your needs.
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-transform transform hover:scale-105">
                Speak to Our Team
              </button>
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default About;
