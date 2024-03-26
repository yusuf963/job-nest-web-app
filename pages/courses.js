import React, { useState, useEffect } from 'react';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import CourseCard from '../components/Courses/CourseCard'
import Footer from "components/Footers/Footer.js";

import useFetch from "service/apiClient";
import apiEndpoints from 'config/api-endpoints';


const coursesData = [
    { id: 1, title: 'Arabic teacher', discription: " compiled client and server successfully in 55 ms (967 modules", category: 'Category A' },
    { id: 2, title: 'Lorry driver', discription: " compiled client and server successfully in 55 ms (967 modules", category: 'Category B' },
    { id: 3, title: 'Barber', discription: " compiled client and server successfully in 55 ms (967 modules", category: 'Category A' },
    { id: 4, title: 'Adminstrator', discription: " compiled client and server successfully in 55 ms (967 modules", category: 'Category C' },
    { id: 5, title: 'Rabbit mq', discription: " compiled client and server successfully in 55 ms (967 modules", category: 'Category C' },
    { id: 6, title: 'sql', discription: " compiled client and server successfully in 55 ms (967 modules", category: 'Category C' },
    { id: 7, title: 'Python', discription: " compiled client and server successfully in 55 ms (967 modules", category: 'Category C' },
    { id: 8, title: 'PHP', discription: " compiled client and server successfully in 55 ms (967 modules", category: 'Category C' },
    { id: 9, title: 'Java', discription: " compiled client and server successfully in 55 ms (967 modules", category: 'Category C' },
];

const CoursesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const { data, loading, error, getData } = useFetch();

    useEffect(() => {
        getData(apiEndpoints.coursesBaseApiUrl)
    }, [])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredCourses = data?.allCourses?.filter((course) => {
        return (
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === 'All' || course.category === selectedCategory)
        );
    });

    return (
        <>
            <IndexNavbar fixed />
            <div className="containe m-16 flex">
                <div className="container mx-auto py-12">
                    <h2 className="text-2xl font-medium mb-8">Available courses</h2>
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="px-4 py-2 border border-gray-300 rounded-md rounded-md mr-3"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-md"
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                        <option value="All">All Categories... </option>
                        <option value="Category A">Category A</option>
                        <option value="Category B">Category B</option>
                        <option value="Category C">Category C</option>
                    </select>
                    <div className="flex flex-wrap mt-20">

                        {filteredCourses?.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </div >
            < Footer />
        </>
    );
};

export default CoursesPage;
