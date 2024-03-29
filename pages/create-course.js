import React, { useState } from "react";

import useFetch from "service/apiClient";
import apiEndpoints from 'config/api-endpoints';
import { CategoriesEnum, proficiencyEnum } from '../service/constants'

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Alert from "components/Alert";

export default function Register() {
  const { data, loading, error, postData } = useFetch();
  const [courseFormData, setCourseFormData] = useState({
    level: 'beginner',
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setCourseFormData({
      ...courseFormData,
      [name]: value
    });
  }


  const handleRegisterUser = () => {
    postData(apiEndpoints.courseCrudBaseApiUrl, courseFormData);
  };
  return (
    <>
      <IndexNavbar />
      <div className="flex content-center mt-20 mb-8 items-center justify-center h-full">
        <div className="w-full lg:w-6/12 px-4">
        {loading && <Alert level={'info'} title={'Loading data!'} subTitle={'operation will finish soon!'} />}
        {error && <Alert level={'fail'} title={'Oops!'} subTitle={'Something went wrong, please try again!'} />}
        {data && <Alert level={'success'} title={'Yaay!'} subTitle={'Job created successfully'} />}
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  Create Course
                </h6>
              </div>
              <div className="btn-wrapper text-center">
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    Course Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="course title"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="description"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="courseLink"
                  >
                    course link
                  </label>
                  <input
                    type="text"
                    id="courseLink"
                    name="courseLink"
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="course link"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="duration"
                  >
                    duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="duration"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="prerequisites"
                  >
                    prerequisites
                  </label>
                  <input
                    type="text"
                    id="prerequisites"
                    name="prerequisites"
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="prerequisites"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="skillsCovered"
                  >
                    skills Covered
                  </label>
                  <input
                    type="text"
                    id="skillsCovered"
                    name="skillsCovered"
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="skillsCovered"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="instructor"
                  >
                    instructor
                  </label>
                  <input
                    type="text"
                    id="instructor"
                    name="instructor"
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="instructor"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="level"
                  >
                    Level
                  </label>
                  <select
                    id="level"
                    name="level"
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    {proficiencyEnum.map((level) => <option key={level.value} value={level.title}>{level.title}</option>)}
                  </select>
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="category"
                  >
                    category
                  </label>
                  <select
                    id="category"
                    name="category"
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    {CategoriesEnum.map((category) => <option key={category.value} value={category.title}>{category.title}</option>)}
                  </select>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleRegisterUser}
                  >
                    Create Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

