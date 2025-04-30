// components/StatsSection.js
"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { CheckCircle, Clock, Wifi } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/*************  ✨ Windsurf Command ⭐  *************/
/**

/*******  a408db64-78ba-4742-ba54-9dbfce71c283  *******/
export default function StatsSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-50"
      role="region"
      aria-label="Service statistics"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Clients Choose Us
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* Happy Clients */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-all"
          >
            <CheckCircle className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-4xl sm:text-5xl font-bold text-blue-800">
              <CountUp end={1000} duration={2} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="text-gray-600 mt-2 text-lg">Happy Clients</p>
          </motion.div>

          {/* Years Experience */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-all"
          >
            <Clock className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-4xl sm:text-5xl font-bold text-blue-800">
              <CountUp end={15} duration={2} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="text-gray-600 mt-2 text-lg">Years Experience</p>
          </motion.div>

          {/* Signal Reliability */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-all"
          >
            <Wifi className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-4xl sm:text-5xl font-bold text-blue-800">
              <CountUp end={99} duration={2} enableScrollSpy scrollSpyOnce />%
            </h3>
            <p className="text-gray-600 mt-2 text-lg">Signal Reliability</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
