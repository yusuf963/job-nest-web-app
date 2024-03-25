import React from "react";


export function JobItem() {
  return (
    <div class="relative flex min-h-screen flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
     
    <div class="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
      <div>
        <span class="text-purple-800 text-sm">Engineering</span>
        <h3 class="font-bold mt-px">Senior Full Stack Backend Engineer</h3>
        <div class="flex items-center gap-3 mt-2">
          <span class="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">Full-time</span>
          <span class="text-slate-600 text-sm flex gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg> Remote, UK</span>
        </div>
      </div>
      <div>
        <button class="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">Apply Now <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
    </button>
      </div>
       </div>
    </div>
  );
}


export const JobPost = ({ job }) => {
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
                <a href="#" className="text-blue-500 hover:text-blue-700">Learn More</a>
                <button className="btn btn-primary">Apply Now</button>
            </div>
        </div>
    );
};


