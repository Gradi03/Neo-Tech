"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of professional services, including DStv signal correction, satellite dish installation and replacement, LNB replacement, decoder error repair (such as E48-32 and no communication from primary decoder), Extraview and Triple View setup, communal DStv system installation, re-cabling, and TV wall mounting. We also provide CCTV camera installation for homes and businesses, sound bar and home theater setup, and TV repairs for all major brands.",
  },
  {
    question: "Do you install CCTV systems?",
    answer:
      "Absolutely. We install high-quality CCTV camera systems for residential, commercial, and complex properties. Our installations are tailored to your property’s layout and include full system setup, remote access configuration, and motion-based recording for 24/7 surveillance and security.",
  },
  {
    question: "How long does an installation take?",
    answer:
      "Standard DStv installations take approximately 1 to 2 hours, depending on the complexity of the setup. CCTV system installations typically take 2 to 4 hours for small to medium-sized properties, and may vary for larger buildings or multi-camera systems.",
  },
  {
    question: "Can I monitor my CCTV remotely?",
    answer:
      "Yes, all our CCTV systems support remote access. Once installed, we configure your system so you can monitor your cameras in real time from your smartphone, tablet, or computer — whether you're at home or away, anywhere in the world.",
  },
  {
    question: "Do you offer a guarantee on your work?",
    answer:
      "Yes, every service we provide — from DStv and CCTV installations to TV mounting and decoder troubleshooting — is backed by a workmanship guarantee. This ensures quality results and peace of mind for all our customers.",
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
