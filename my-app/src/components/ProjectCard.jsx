'use client'
import { useState } from "react";
import { Bookmark } from "lucide-react";

export default function ProjectCard({
  projectImage,
  profileImage,
  title,
  username,
  timeLeft,
  fundingPercent,
  hoverDetails,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm max-h-min overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <img
        src={projectImage}
        alt="Project"
        className="w-full h-48 object-cover"
      />

      {/* Hover Details */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex flex-col justify-between">
          <p className="text-sm">{hoverDetails}</p>
          <p className="text-xs">Category: Plays</p>
          <p className="text-xs">Location: Greenpoint, NY</p>
        </div>
      )}

      {/* Card Content */}
      <div className="p-4 bg-white flex flex-col gap-2 relative">
        {/* Bookmark */}
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="absolute top-4 right-4 bg-white p-1 rounded-full shadow-md"
        >
          <Bookmark
            size={20}
            className={isBookmarked ? "text-blue-600 fill-current" : "text-gray-600"}
          />
        </button>

        {/* Profile and Title */}
        <div className="flex items-center gap-3">
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{username}</p>
          </div>
        </div>

        {/* Time Left and Funding */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-500">{timeLeft} left</p>
          <p className="text-sm font-semibold text-green-600">{fundingPercent}% funded</p>
        </div>
      </div>
    </div>
  );
}
