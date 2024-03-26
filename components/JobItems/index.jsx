import React from "react";

const JobPostCard = ({ job }) => {
    const { title, company, location, description, tags } = job;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <div className="p-4">
                <h3 className="text-xl font-medium text-gray-800">{title}</h3>
                <p className="text-gray-600 mb-2">{company} - {location}</p>
                <div className="flex items-center mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="inline-block px-2 py-1 mr-2 rounded-full bg-gray-200 text-gray-600 text-xs font-medium">{tag}</span>
                    ))}
                </div>
                <p className="text-gray-700">{description}</p>
            </div>
            <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700">Read More</a>
                <button className="btn btn-primary">Apply Now</button>
            </div>
        </div>
    );
};

export default  JobPostCard