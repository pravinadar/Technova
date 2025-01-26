"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { UserIcon } from "lucide-react"; // Import a profile icon

export default function ProfilePage() {
  const [details, setDetails] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phone: "",
    dob: "",
    gender: "",
    profilePic: null, // Adding profile picture field
  });

  // Simulating API call to fetch user details
  useEffect(() => {
    const fetchUserDetails = async () => {
      // Replace with your API endpoint
      const userDetails = {
        street: "123 Main St",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        pinCode: "400001",
        phone: "9876543210",
        dob: "2000-01-01",
        gender: "Male",
        profilePic: null, // Initial value
      };
      setDetails(userDetails);
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "profilePic" && files.length > 0) {
      setDetails((prevDetails) => ({ ...prevDetails, profilePic: files[0] }));
    } else {
      setDetails((prevDetails) => ({ ...prevDetails, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated details:", details);
    // Call API to save updated details
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
        <motion.div
          className="flex items-center justify-center mb-6"
          variants={itemAnimation}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
            {details.profilePic ? (
              <img
                src={URL.createObjectURL(details.profilePic)}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <UserIcon className="text-white w-12 h-12" />
            )}
          </div>
        </motion.div>
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-indigo-800"
          variants={itemAnimation}
        >
          Your Profile
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
            <label
              htmlFor="profilePic"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Picture
            </label>
            <input
              id="profilePic"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </motion.div>
          <motion.div variants={itemAnimation}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Update Profile
            </Button>
          </motion.div>
        </form>
        <motion.p
          className="mt-4 text-center text-sm text-gray-600"
          variants={itemAnimation}
        >
          Go back to{" "}
          <Link
            href="/dashboard"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
          >
            Dashboard
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
