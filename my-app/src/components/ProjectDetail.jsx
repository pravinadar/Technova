'use client'
import React, { useState } from 'react';
import Navbar from './Navbar';

function ProjectDetail({
    title = 'Untitled Project',
    media = [],
    budget = 0,
    funded = 0,
    contributors = 0,
    hoursLeft = 0,
}) {
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const progress = budget > 0 ? (funded / budget) * 100 : 0;

    const handlePrev = () => {
        setCurrentMediaIndex((prevIndex) =>
            prevIndex === 0 ? media.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentMediaIndex((prevIndex) =>
            prevIndex === media.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (!media || media.length === 0) {
        return (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-2xl shadow-lg">
                <p className="text-gray-500">No media available for this project.</p>
            </div>
        );
    }

    return (
        <div>

            <Navbar />
            <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-2xl shadow-lg mx-auto h-screen">
                {/* Media Carousel Section */}
                <div className="h-full md:w-1/2 flex flex-col items-center space-y-4 pr-4">
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
                        {media[currentMediaIndex].type === 'image' ? (
                            <img
                                src={media[currentMediaIndex].url}
                                alt="Project Media"
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <video
                                controls
                                className="w-full h-auto"
                                style={{ height: '400px' }}
                            >
                                <source src={media[currentMediaIndex].url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                    {/* Carousel Controls */}
                    <div className="flex justify-between w-full">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-300 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-gray-300 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition"
                        >
                            Next
                        </button>
                    </div>
                </div>


                {/* Details Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{title}</h1>

                    {/* Progress Section */}
                    <div className="w-full bg-white p-4 rounded-xl shadow-md mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-gray-700 font-semibold">Goal: ${budget.toLocaleString()}</p>
                            <p className="text-gray-700 font-semibold">Funded: ${funded.toLocaleString()}</p>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-4">
                            <div
                                className="bg-green-500 h-4 rounded-full"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{progress.toFixed(2)}% funded</p>
                    </div>

                    {/* Additional Info Section */}
                    <div className="w-full mt-6 text-gray-700">
                        <p className="text-lg font-semibold">Contributors: {contributors}</p>
                        <p className="text-lg font-semibold">Time Left: {hoursLeft} hours</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-around w-full">
                        <button className="bg-green-500 text-white px-6 py-2 rounded-xl shadow-md hover:bg-green-600 transition">
                            Back this project
                        </button>
                        <button className="bg-gray-300 px-6 py-2 rounded-xl shadow-md hover:bg-gray-400 transition">
                            Remind me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
