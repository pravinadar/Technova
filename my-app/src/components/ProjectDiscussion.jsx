import React from "react";

const ProjectDiscussion = ({
    description, faq, updates, comments
}) => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-full mx-auto bg-white shadow-md rounded-lg">
                {/* Tabs */}
                <div className="flex border-b">
                    {["Description", "FAQ", "Updates", "Comments"].map((tab) => (
                        <button
                            key={tab}
                            className="flex-1 text-center p-4 font-medium hover:bg-gray-200"
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Description Section */}
                    {description && (
                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Description</h2>
                            <p className="text-gray-700">{description}</p>
                        </section>
                    )}

                    {/* FAQ Section */}
                    {faq && (
                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">FAQ</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                {faq.map((item, index) => (
                                    <li key={index} className="text-gray-700">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Updates Section */}
                    {updates && (
                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Updates</h2>
                            <p className="text-gray-700">{updates}</p>
                        </section>
                    )}

                    {/* Comments Section */}
                    {comments && (
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
                    )}
                </div>
            </div>
        </div>
    );
};



export default ProjectDiscussion;
