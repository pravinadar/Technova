"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    (<motion.nav
      className="bg-white bg-opacity-90 backdrop-blur-md py-4 px-6 flex items-center justify-between sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <Link href="/" className="text-xl font-bold">
        Logo
      </Link>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up / Login</Button>
      </motion.div>
    </motion.nav>)
  );
}

