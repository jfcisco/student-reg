import React, { useContext, useState } from 'react';
import { Page, RouteContext } from '../Routing';
import './ClassesPage.css';
import { NavMenu } from '../Components/NavMenu';

const sampleClasses: SchoolClass[] = [
  {
    code: "CMSC 204",
    title: "Data Structures and Algorithms",
    faculty: "Dr. Professor",
    schedule: "M-W-F 1:30 PM to 2:30 PM",
    syllabusLink: "/syllabus/1"
  },
  {
    code: "CMSC 203",
    title: "Computer Systems and Organization",
    faculty: "Mr. Expert Instructor",
    schedule: "W 6:00 PM to 9:00 PM",
    syllabusLink: "/syllabus/2"
  }
];

type SchoolClass = {
  code: string;
  title: string;
  faculty: string;
  schedule: string;
  syllabusLink: string;
};

type ClassCardProps = {
  classDetails: SchoolClass
};

function ClassCard({ classDetails }: ClassCardProps): JSX.Element {
  const {
    code,
    title,
    faculty,
    schedule,
    syllabusLink
  } = classDetails;

  return (
    <div className="mx-1 relative bg-white rounded p-6 pb-8 shadow-md mb-4">
      <h3 className="text-3xl font-medium">{code}</h3>
      <p className="text-gray-500 text-base mb-3">{title}</p>
      <p>{faculty}</p>
      <p>{schedule}</p>
      <a className="absolute right-6 bottom-4 underline text-blue-600"
        href={syllabusLink}
        onClick={(e) => e.preventDefault()}>
        View Course Syllabus
      </a>
    </div>
  );
}

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transfo" fill="none" viewBox="0 0 24 24" stroke="#fff">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

function ClassesPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const { setCurrentPage } = useContext(RouteContext);
  const classes = sampleClasses;

  function handleGoBack() {
    setIsLoading(true);
    setCurrentPage(Page.Login, () => setIsLoading(false));
  }

  return (
    <div className="flex flex-row">
      <NavMenu isOpen={navIsOpen} onClose={() => setNavIsOpen(!navIsOpen)}
        onLogout={handleGoBack} />

      <div className="container mx-auto bg-gray-100 shadow-inner lg:w-9/12">
        <div className="flex flex-row justify-between bg-blue-800 text-white py-4 px-8 border-yellow-300 border-b-4 lg:hidden">
          <button className={!navIsOpen ? "mr-3 lg:hidden" : "mr-3 lg:hidden opacity-0"} onClick={() => { setNavIsOpen(!navIsOpen) }}>
            <MenuIcon />
          </button>
          <h1 className="tracking-wider font-extralight font-serif uppercase flex-1 text-xl line-through">Ateneo</h1>
          {/* System name */}
          <h2 className="mr-4 uppercase">Student System</h2>
          {/* username */}
          <p className="underline">Ruth</p>
        </div>

        <div className="px-6 py-8 sm:max-w-4xl sm:mx-auto lg:mt-12">
          <h2 className="font-serif text-xl text-blue-700 font-bold tracking-wide mb-2">
            SY 2020-2021, 2nd Semester
        </h2>

          {classes.map(classDetails => <ClassCard classDetails={classDetails} />)}

        </div>

      </div>
    </div>
  );
}

export default ClassesPage;