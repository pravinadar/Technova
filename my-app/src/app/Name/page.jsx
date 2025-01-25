"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function DetailsPage() {
  const [details, setDetails] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phone: "",
    dob: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Details submitted:", details);
  };

  const formAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <AnimatedBackground />
      <motion.div
        className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg z-10 w-full max-w-lg"
        initial="hidden"
        animate="visible"
        variants={formAnimation}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-indigo-800"
          variants={itemAnimation}
        >
          Enter Your Details
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Street", id: "street", type: "text" },
            { label: "City", id: "city", type: "text" },
            { label: "State", id: "state", type: "text" },
            { label: "Country", id: "country", type: "text" },
            { label: "Pin Code", id: "pinCode", type: "text" },
            { label: "Phone", id: "phone", type: "tel" },
            { label: "Date of Birth", id: "dob", type: "date" },
          ].map(({ label, id, type }) => (
            <motion.div key={id} variants={itemAnimation}>
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {label}
              </label>
              <Input
                id={id}
                type={type}
                value={details[id]}
                onChange={handleChange}
                required
                className="w-full"
              />
            </motion.div>
          ))}
          <motion.div variants={itemAnimation}>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>
            <select
              id="gender"
              value={details.gender}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </motion.div>
          <motion.div variants={itemAnimation}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Submit Details
            </Button>
          </motion.div>
        </form>
        <motion.p
          className="mt-4 text-center text-sm text-gray-600"
          variants={itemAnimation}
        >
          Return to <Link href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300">Login</Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
