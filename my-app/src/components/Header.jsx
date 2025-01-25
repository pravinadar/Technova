"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    (<header
      className="bg-white bg-opacity-80 backdrop-blur-md py-12 px-6 text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        Featured Projects
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        Explore impactful projects in your community. See how you can make a difference today!
      </motion.p>
    </header>)
  );
}

