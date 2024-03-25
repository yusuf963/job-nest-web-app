import React from "react";

// components
import Input from "components/Input";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { JobPost } from "components/JobItems/index"

import Footer from "components/Footers/Footer.js";
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'


const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Salary: Low to High', href: '#', current: false },
  { name: 'Salary: High to Low', href: '#', current: false },
]
// const subCategories = [
//   { name: 'Totes', href: '#' },
//   { name: 'Backpacks', href: '#' },
//   { name: 'Travel Bags', href: '#' },
//   { name: 'Hip Bags', href: '#' },
//   { name: 'Laptop Sleeves', href: '#' },
// ]
const filters = [
  {
    id: 'color',
    name: 'Experince Level',
    options: [
      { value: 'internship', label: 'Internship', checked: false },
      { value: 'enteryLevel', label: 'Entery level', checked: false },
      { value: 'associate', label: 'Associate', checked: true },
      { value: 'midSeniorLevel', label: 'Mid-Senior level', checked: false },
      { value: 'director', label: 'Director', checked: false },
      { value: 'executive', label: 'Executive', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Job Type',
    options: [
      { value: 'fulltime', label: 'fulltime', checked: false },
      { value: 'parttime', label: 'parttime', checked: false },
      { value: 'contract', label: 'contract', checked: true },
      { value: 'volunteer', label: 'volunteer', checked: false },
      { value: 'temporary', label: 'temporary', checked: false },
      { value: 'internship', label: 'internship', checked: false },
      { value: 'other', label: 'other', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Workplace Type',
    options: [
      { value: 'onsite', label: 'onsite', checked: false },
      { value: 'hybrid', label: 'hybrid', checked: false },
      { value: 'remote', label: 'remote', checked: false }
    ],
  },
]

const jobs = [
  {
    title: 'Software Engineer',
    company: 'Awesome Company',
    location: 'Remote',
    description: '...',
    tags: ['JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Software Engineer',
    company: 'Awesome Company',
    location: 'Remote',
    description: '...',
    tags: ['JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Software Engineer',
    company: 'Awesome Company',
    location: 'Remote',
    description: '...',
    tags: ['JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Software Engineer',
    company: 'Awesome Company',
    location: 'Remote',
    description: '...',
    tags: ['JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Software Engineer',
    company: 'Awesome Company',
    location: 'Remote',
    description: '...',
    tags: ['JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Software Engineer',
    company: 'Awesome Company',
    location: 'Remote',
    description: '...',
    tags: ['JavaScript', 'React', 'Node.js'],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Landing() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <>
      <IndexNavbar fixed />
      <Input type={'text'} name={'searchJob'} placeholder={'Search by title, skill, or company'} />
      <Input type={'text'} name={'searchCountry'} placeholder={'City, state, or zip code'} />
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          {option.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <form className="hidden lg:block flex flex-col">
        {filters.map((section) => (
          <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">{section.name}</span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-medium mb-8">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobPost key={job.title} job={job} />
          ))}
        </div>
      </div>
      < Footer />
    </>

  )
}
