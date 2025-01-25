'use client';
import { useState } from 'react';
import { Bookmark } from 'lucide-react';

export default function ProjectCard({
  projectImage,
  profileImage,
  title,
  username,
  timeLeft,
  fundingPercent,
  description,
  categories,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative max-w-96 bg-white rounded-lg shadow-md overflow-hidden transition-transform ${
        isHovered ? 'z-20 scale-110' : 'hover:scale-105'
      }`}
      style={{ height: '430px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative w-full h-48">
        <img
          src={projectImage}
          alt="Project"
          className="object-cover w-full h-full"
        />
        {/* Bookmark Icon */}
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="absolute z-10 top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-200"
        >
          <Bookmark
            size={24}
            className={`${isBookmarked ? 'fill-black' : ''}`}
          />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-2">
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-sm text-gray-500">{username}</p>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-sm text-gray-700 mb-2 ${
            isHovered ? 'line-clamp-3' : 'truncate'
          }`}
        >
          {description}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 text-xs text-gray-600 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Time Left and Funding Info */}
        <div className="text-sm text-gray-700 flex justify-between">
          <span>{timeLeft} left</span>
          <span>{fundingPercent}% funded</span>
        </div>
      </div>
    </div>
  );
}
