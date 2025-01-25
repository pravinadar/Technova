"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    (<section className="py-12 px-6 bg-white bg-opacity-80 backdrop-blur-md">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Why the Platform?
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          Our platform connects individuals passionate about change with meaningful community-driven projects. Together,
          we can create lasting impact through collaboration and transparency.
        </motion.p>

        <motion.h3
          className="text-2xl font-semibold mb-4"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          How It Works
        </motion.h3>
        <motion.ul
          className="list-disc pl-6 mb-8 space-y-2"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <li>Create a project for a cause that matters to you.</li>
          <li>Contribute to active projects securely.</li>
          <li>Track real-time progress and impact.</li>
        </motion.ul>

        <motion.h3
          className="text-2xl font-semibold mb-4"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          Transparency & Trust
        </motion.h3>
        <motion.ul
          className="list-disc pl-6 mb-8 space-y-2"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}>
          <li>Live fund tracking</li>
          <li>Allocation breakdowns</li>
          <li>Regular updates with photos/videos</li>
        </motion.ul>

        <motion.div
          className="text-center mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}>
          <p className="text-2xl font-bold mb-4">
            Ready to make an impact? Start your journey today by exploring our featured projects!
          </p>
        </motion.div>
      </motion.div>
    </section>)
  );
}

