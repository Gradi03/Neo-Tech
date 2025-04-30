import { motion } from "framer-motion";
import { SatelliteDish, Tv2, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Services() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <Head>
        <title>
          DStv Installation, TV Mounting & CCTV | Neo DStv Technology
        </title>
        <meta
          name="description"
          content="Professional DStv installations, TV wall mounting, and CCTV security setups across Cape Town and the Western Cape. Get fast, reliable service today!"
        />
        <meta
          name="keywords"
          content="DStv installation Cape Town, TV mounting Cape Town, CCTV installation Western Cape, DStv repairs, TV wall mounting, CCTV security systems, Neo DStv Technology"
        />
        <meta
          property="og:title"
          content="DStv Installation, TV Mounting & CCTV | Neo DStv Technology"
        />
        <meta
          property="og:description"
          content="Trusted DStv and CCTV services in Cape Town. Contact Neo DStv Technology today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://neodstvtechnologies.co.za/services"
        />
        <link
          rel="canonical"
          href="https://neodstvtechnologies.co.za/services"
        />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Expert DStv Installation, Repairs, TV Mounting, and CCTV Security
          Systems across Cape Town and the Western Cape.
        </p>
      </motion.div>

      {/* DStv Installation Services */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/DstvDish.webp"
            alt="DStv Dish Installation"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
            <SatelliteDish /> DStv Installation & Repairs
          </h2>
          <p className="text-gray-700 mb-4">
            Enjoy hassle-free DStv installation and repairs with our trusted
            team. We fix signal problems, replace dishes, swap Smart LNBs,
            install new cabling, and set up Extra View or communal systems.
            <br />
            <br />
            We use only original parts and rust-resistant 90cm dishes for
            strong, reliable connections. Whether you’re setting up a single
            home or a full apartment complex, we’ve got you covered.
            <br />
            <br />
            Our friendly experts work neatly, respect your space, and make sure
            everything is tested and ready before we leave. Fast response times,
            honest advice, and professional results your satisfaction is our
            priority.
          </p>
          <Link href="/contact">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
              Book a DStv Service
            </button>
          </Link>
        </motion.div>
      </div>

      {/* TV Mounting Services */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
            <Tv2 /> TV Wall Mounting & Sound Systems
          </h2>
          <p className="text-gray-700 mb-4">
            Get a sleek, professional look with our expert TV mounting services.
            We securely mount TVs of all sizes from compact displays to large
            home theater screens ensuring perfect alignment, safety, and optimal
            viewing angles.
            <br />
            <br />
            We expertly conceal all cables behind walls or in custom channels
            for a clean, minimalist look, and professionally install soundbars,
            surround sound systems, and streaming devices.
            <br />
            <br />
            Whether it's drywall, brick, or concrete walls, our team is equipped
            with the right tools and techniques to deliver a flawless
            installation. We also provide TV repairs for all major brands,
            restoring your device to peak performance and extending its
            lifespan.
            <br />
            <br />
            Choose us for reliable workmanship, high-quality materials, and an
            entertainment setup you'll love coming home to.
          </p>
          <Link href="/contact">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
              Mount My TV
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/TVmounting.webp"
            alt="TV Mounting"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>

      {/* CCTV Installation Services */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/cctv.webp"
            alt="CCTV Installation"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
            <Camera /> CCTV Camera Installations
          </h2>
          <p className="text-gray-700 mb-4">
            Keep your property safe 24/7 with our high-performance CCTV
            solutions. We specialize in installing indoor and outdoor cameras
            with full HD video, powerful night vision, and remote viewing
            straight from your smartphone.
            <br />
            <br />
            Our custom-designed layouts eliminate blind spots, giving you
            complete peace of mind whether you're at home, at work, or on the
            go. Get instant mobile alerts for suspicious activity, and integrate
            your CCTV system with alarms or smart home technology for even
            greater control.
            <br />
            <br />
            Protect what matters most we also offer ongoing maintenance and fast
            upgrade options to keep your security system ahead of threats.
            <br />
            <br />
            Our team of certified security experts brings years of hands-on
            experience to every project. We work closely with you to understand
            your unique security needs and deliver a reliable, affordable
            solution tailored just for you. With professional installation and
            unmatched customer support, you can trust us to keep your premises
            secure today and into the future.
          </p>
          <Link href="/contact">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
              Get Protected Today
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-blue-700 text-white p-10 rounded-xl text-center shadow-lg"
      >
        <h3 className="text-3xl font-bold mb-4">
          Ready for Fast, Reliable Service?
        </h3>
        <p className="text-lg mb-6">
          We proudly serve Cape Town and the entire Western Cape. Let us handle
          your installation or repair with precision and care.
        </p>
        <Link href="/contact">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Get a Free Quote
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
