// pages/blog.js

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Why Professional DStv Installation Matters",
    excerpt:
      "Avoid costly mistakes and signal issues with expert DStv installation services. Learn why hiring professionals is a smart move for your home or business.",
    slug: "professional-dstv-installation",
  },
  {
    title: "Top Benefits of Installing CCTV Cameras for Your Property",
    excerpt:
      "Protect your assets and loved ones with modern CCTV solutions. Discover the advantages of installing security cameras with Neo DStv Technology.",
    slug: "benefits-cctv-cameras",
  },
  {
    title: "Common DStv Signal Problems and How We Fix Them",
    excerpt:
      "From E48-32 errors to dish misalignments, learn how our team resolves DStv issues quickly and efficiently for Cape Town residents.",
    slug: "common-dstv-problems",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Neo DStv Technology</title>
        <meta
          name="description"
          content="Stay informed with Neo DStv Technology's blog. Discover tips on DStv installations, CCTV security, and expert advice to protect your property and improve your entertainment experience."
        />
        <meta
          name="keywords"
          content="DStv Installation Cape Town, CCTV Installation Western Cape, DStv Repairs, Home Security Systems, Satellite Services"
        />
        <meta name="author" content="Neo DStv Technology" />
      </Head>

      <section id="Blog" className="py-20 bg-blue-50 px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold text-blue-800 mb-6">Our Blog</h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Learn expert tips on DStv installations, CCTV security, and home
            entertainment solutions. Helping you stay safe, connected, and
            entertained across Cape Town and the Western Cape.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 font-bold hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Ready to Upgrade Your Home or Business?
          </h2>
          <p className="text-gray-700 mb-8">
            Contact us today for professional DStv and CCTV services across Cape
            Town and the Western Cape.
          </p>
          <Link href="/contact">
            <button className="bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Get a Free Quote
            </button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
