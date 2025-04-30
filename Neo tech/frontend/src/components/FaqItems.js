"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in DStv installations, signal troubleshooting, decoder upgrades, communal system setups, and CCTV camera installations.",
  },
  {
    question: "Do you install CCTV systems?",
    answer:
      "Yes, we offer professional CCTV camera installations for both residential and commercial properties, ensuring enhanced security.",
  },
  {
    question: "How long does an installation take?",
    answer:
      "DStv installations typically take 1 to 2 hours. CCTV system setups usually take 2 to 4 hours, depending on the number of cameras.",
  },
  {
    question: "Can I monitor my CCTV remotely?",
    answer:
      "Yes, our CCTV systems allow remote monitoring through a smartphone or computer from anywhere in the world.",
  },
  {
    question: "Do you offer a guarantee on your work?",
    answer:
      "Yes, all our installations, including DStv and CCTV systems, come with a workmanship guarantee for your peace of mind.",
  },
];

export default function FaqItems() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5 shadow-sm bg-white hover:bg-gray-50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-xl text-blue-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3"
                  >
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
