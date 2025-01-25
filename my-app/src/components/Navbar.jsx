"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-white bg-opacity-20 backdrop-blur-md py-4 px-6 flex items-center justify-between sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl font-bold text-indigo-800">
        CommunityImpact
      </Link>
      <div className="flex space-x-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/login">
            <span
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
            >
              Log In
            </span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/signup">
            <span
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
            >
              Sign Up
            </span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/Name">
            <span
              className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
            >
              Info
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
