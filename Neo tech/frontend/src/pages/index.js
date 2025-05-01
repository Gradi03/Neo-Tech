import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import FaqItems from "@/components/FaqItems";
import Head from "next/head"; // ADD THIS at the top with your other imports
import { SatelliteDish } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <main className="flex flex-col bg-white text-gray-800 font-sans">
      <Head>
        <title>
          Neo DStv Technology | DStv & CCTV Installers in Cape Town & WC
        </title>

        <meta
          name="description"
          content="DStv installations, repairs, upgrades & CCTV setup in Cape Town & Western Cape. 24/7 accredited technicians. Fast, same-day service."
        />
        <meta
          name="keywords"
          content="DStv installation Cape Town, CCTV setup, DStv repair Western Cape, same-day DStv service, accredited DStv technicians"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Neo DStv Technology" />
        <meta name="publisher" content="Neo DStv Technology" />
        <link rel="canonical" href="https://neodstvtechnologies.co.za/" />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Neo DStv Technology | Trusted DStv & CCTV Installers"
        />
        <meta
          property="og:description"
          content="Accredited DStv & CCTV technicians offering fast, same-day installations across Cape Town & Western Cape."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neodstvtechnologies.co.za/" />
        <meta
          property="og:image"
          content="https://neodstvtechnologies.co.za/og-image.webp"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Neo DStv Technology | DStv & CCTV Services in Cape Town"
        />
        <meta
          name="twitter:description"
          content="Get professional DStv & CCTV installation, upgrades, and repairs across Cape Town & Western Cape with 24/7 expert support."
        />
        <meta
          name="twitter:image"
          content="https://neodstvtechnologies.co.za/og-image.webp"
        />

        {/* Geo Location Tags */}
        <meta name="geo.region" content="ZA-WC" />
        <meta name="geo.placename" content="Cape Town" />
        <meta name="geo.position" content="-33.918861;18.423300" />
        <meta name="ICBM" content="-33.918861, 18.423300" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Neo DStv Technology",
              image: "https://neodstvtechnologies.co.za/og-image.webp",
              url: "https://neodstvtechnologies.co.za/",
              telephone: "+27 72 159 8813",
              address: {
                "@type": "PostalAddress",
                streetAddress: "105 Cook Street",
                addressLocality: "Cape Town",
                addressRegion: "Western Cape",
                postalCode: "7460",
                addressCountry: "ZA",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "20:00",
              },
              description:
                "Accredited DStv and CCTV installation specialists in Cape Town. Fast, affordable, and reliable services.",
            }),
          }}
        />
      </Head>

      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white py-32 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/dish.jpg" // Make sure you use a better combined background image
            alt="CCTV and DStv Installation"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400 text-black p-4 rounded-full shadow-lg">
              <SatelliteDish className="w-10 h-10" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Complete DStv, CCTV & TV Setup Services
          </h1>

          <p className="text-lg md:text-2xl mb-8 font-medium max-w-2xl mx-auto">
            From DStv signal repairs and dish replacements to expert TV wall
            mounting, CCTV installation, and sound system setup we deliver fast,
            reliable service trusted by 1000+ households across the Western
            Cape.
          </p>

          {/* Call to Action */}
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
          >
            Get Your Free Quote
          </Link>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <StatsSection />

      {/* ABOUT PREVIEW */}
      <section className="py-20 px-6 bg-gray-100">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <Image
              src="/accredited.jpg"
              alt="Accredited DStv Installer"
              width={600}
              height={400}
              className="rounded-xl shadow-xl object-cover w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-800">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              Neo DStv Technologies is a Cape Town-based service provider
              proudly supporting homes and businesses across the Western Cape.
              With over 10 years of experience, we’re known for fast,
              affordable, and reliable DStv and CCTV solutions that are
              guaranteed to meet your needs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our services include DStv signal correction, dish replacement,
              error code repair, LNB replacement, communal setups, TV wall
              mounting, sound bar setup, CCTV camera installation, TV repairs
              (all brands), and full Extraview or Triple View configurations.
              Fully accredited and committed to same-day service, our expert
              team ensures top-tier workmanship and customer satisfaction every
              time.
            </p>
            <Link
              href="/about"
              passHref
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Left Column: Service Description */}
          <div>
            <h2 className="text-4xl font-extrabold text-blue-800 mb-6">
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              At Neo DStv Technologies, we provide complete installation,
              upgrade, and repair services for DStv, CCTV, and home
              entertainment systems. Whether you need a dish replacement, signal
              error fix, or a full multi-room setup we ’ve got you covered with
              fast and affordable solutions.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Our services include DStv signal correction, satellite dish
              replacement, LNB replacement, Extraview and Triple View setup,
              communal installations, re-cabling, and TV wall mounting. We also
              install and configure CCTV camera systems and sound bars for
              complete home or office security and surround sound.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              We specialize in troubleshooting issues like the E48-32 signal
              error and decoder communication failures. Our technicians are
              fully accredited and bring years of experience to every job,
              ensuring quality workmanship and long-term performance.
            </p>
            <p className="text-xl text-gray-700 mb-8">
              Trusted by clients across the Western Cape, we’re committed to
              delivering professional service with a customer-first approach.
              All work is backed by a service guarantee to ensure your
              satisfaction and peace of mind.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <Link href="/contact">
                <button className="bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full sm:w-auto">
                  Get a Free Quote
                </button>
              </Link>
              <Link href="/services">
                <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-all duration-300 w-full sm:w-auto">
                  Learn More About Our Services
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Service Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/installed.jpg"
              alt="DStv technician working"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full max-h-80 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* FAQ SECTION */}
      <FaqItems />
    </main>
  );
}
