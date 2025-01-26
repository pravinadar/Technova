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
                        <h2 className="text-2xl font-bold mb-4 text-primary">Description</h2>
                        <p className="text-gray-700 leading-relaxed">{description}</p>
                    </section>
                );
            case 'FAQ':
                return (
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-primary">FAQ</h2>
                        <ul className="space-y-6">
                            {faq.map((item, index) => (
                                <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                                    <p className="font-semibold text-gray-800">{item.question}</p>
                                    <p className="text-gray-600 mt-2">{item.answer}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                );
            case 'Updates':
                return (
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-primary">Updates</h2>
                        <p className="text-gray-700 leading-relaxed">{updates}</p>
                    </section>
                );
            case 'Comments':
                return (
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-primary">Comments</h2>
                        <div className="space-y-6">
                            {comments.map((comment, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 rounded-lg shadow border border-gray-200"
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
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-8 px-4 ">
            <div className=" mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    {/* Media Carousel Section */}
                    <div className="p-6">
                        {media && media.length > 0 ? (
                            <>
                                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                                    {media[currentMediaIndex].type === 'image' ? (
                                        <img
                                            src={media[currentMediaIndex].url}
                                            alt="Project Media"
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <video
                                            controls
                                            className="w-full h-full object-cover"
                                        >
                                            <source src={media[currentMediaIndex].url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={handlePrev}
                                        className="bg-primary-light px-4 py-2 rounded-lg shadow hover:bg-primary transition text-white"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="bg-primary-light px-4 py-2 rounded-lg shadow hover:bg-primary transition text-white"
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
                    <div className="p-6 flex flex-col">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                            {title}
                        </h1>

                        {/* Progress Section */}
                        <div className="w-full bg-gray-50 p-6 rounded-xl shadow-md mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-gray-700 font-semibold">Goal: ${budget.toLocaleString()}</p>
                                <p className="text-gray-700 font-semibold">Funded: ${funded.toLocaleString()}</p>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-4">
                                <div
                                    className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 h-4 rounded-full"
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
                            <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
                                Back this project
                            </button>
                            <button className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
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
                                className={`flex-1 text-center py-4 font-medium text-lg transition ${
                                    activeTab === tab
                                        ? 'text-primary border-b-2 border-primary'
                                        : 'text-gray-600 hover:text-primary'
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
