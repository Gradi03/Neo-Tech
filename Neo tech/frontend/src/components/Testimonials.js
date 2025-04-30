"use client";

import { motion } from "framer-motion";

const reviewVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const reviews = [
  {
    name: "Thabo M.",
    location: "Cape Town",
    stars: 5,
    text: "Excellent service! They arrived on time and sorted out my DStv setup in no time. Highly recommended.",
  },
  {
    name: "Ayanda P.",
    location: "Bellville",
    stars: 4,
    text: "Professional and friendly. They even explained how everything works after the install.",
  },
  {
    name: "Shaun K.",
    location: "Durbanville",
    stars: 5,
    text: "Top-notch service. Will definitely use them again if I need upgrades or repairs.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What Clients Say on Google Reviews ⭐
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={reviewVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg text-gray-800">
                  {review.name}
                </h4>
                <span className="text-sm text-gray-500">{review.location}</span>
              </div>

              <div className="flex mb-3">
                {[...Array(review.stars)].map((_, starIdx) => (
                  <svg
                    key={starIdx}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-base leading-relaxed">
                “{review.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
