'use client';
import React, { useState } from 'react';

function ProjectDetail({
    title = 'Untitled Project',
    media = [],
    budget = 0,
    funded = 0,
    contributors = 0,
    hoursLeft = 0,
    description = '',
    faq = [],
    updates = '',
    comments = [],
}) {
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('Description');
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

    const renderContent = () => {
        switch (activeTab) {
            case 'Description':
                return (
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                        <p className="text-gray-700">{description}</p>
                    </section>
                );
            case 'FAQ':
                return (
                    <section>
                        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
                        <ul className="space-y-4">
                            {faq.map((item, index) => (
                                <li key={index} className="text-gray-700">
                                    <p className="font-medium">{item.question}</p>
                                    <p className="text-gray-600">{item.answer}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                );
            case 'Updates':
                return (
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Updates</h2>
                        <p className="text-gray-700">{updates}</p>
                    </section>
                );
            case 'Comments':
                return (
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Comments</h2>
                        <div className="space-y-4">
                            {comments.map((comment, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-4 rounded-lg shadow-sm border"
                                >
                                    <p className="text-gray-800">{comment}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-full mx-auto bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row">
                    {/* Media Carousel Section */}
                    <div className="md:w-1/2 p-6">
                        {media && media.length > 0 ? (
                            <>
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
                                <div className="flex justify-between mt-4">
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
                            </>
                        ) : (
                            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-2xl shadow-lg">
                                <p className="text-gray-500">No media available for this project.</p>
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="md:w-1/2 p-6 flex flex-col">
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

                {/* Tabs Section */}
                <div className="mt-8">
                    <div className="flex border-b">
                        {['Description', 'FAQ', 'Updates', 'Comments'].map((tab) => (
                            <button
                                key={tab}
                                className={`flex-1 text-center p-4 font-medium ${
                                    activeTab === tab
                                        ? 'border-b-2 border-blue-500 text-blue-500'
                                        : 'hover:bg-gray-200'
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="p-6">{renderContent()}</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
