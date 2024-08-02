import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../../../public/Vysyamala.svg';
import { CgProfile } from "react-icons/cg";
import { FaGlobe } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { GoDot } from "react-icons/go";
import { FaUser } from 'react-icons/fa'; // Import user icon


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-yellow hover:text-PrimaryRed duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto hover:text-PrimaryRed duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className=" py-4 px-4   lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>


            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 success rounded-sm px-4 py-2 text-black font-medium text-PrimaryRed hover:text-PrimaryRed hover:text-PrimaryRed duration-300 ease-in-out ${(pathname === '/' ||
                          pathname.includes('dashboard'))

                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                            fill=""
                          />
                        </svg>
                        Dashboard
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                            }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden   ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ECommerce"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Dashboard
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <li>
              </li>
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/forms' || pathname.includes('forms')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out ${(pathname === '/forms' ||
                          pathname.includes('forms')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <ImProfile />

                        Profile
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                            }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="DataTable"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Profile
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="Approved_List"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Approved List
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="ProfileForm"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Add Profile
                            </NavLink>

                            {/* <NavLink
                              to="Approvedprofile"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Approvedprofile
                            </NavLink> */}


                            {/* <NavLink
                              to="ProfileForm"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              New profile
                            </NavLink> */}



                          </li>

                          


                          <li>
                            <NavLink
                              to="NewProfile"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              New Profile
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="PaidProfile"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Paid Profile
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="Approvedprofile"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Approved profile
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="Featuredprofile"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Featured profile
                            </NavLink>
                          </li>


                          <li>
                            <NavLink
                              to="Deletedprofile"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Deleted profile
                            </NavLink>
                          </li>

                          

                          






                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/master-location' ||
                  pathname.includes('master-location')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      {/* Main Menu Item */}
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out ${(pathname === '/master-location' ||
                          pathname.includes('master-location')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        {/* Location Icon */}
                        <MdAddLocationAlt />
                        {/* Menu Item Text */}
                        Master Location

                        {/* Arrow Icon for Dropdown */}
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                            }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>

                      {/* Dropdown Menu Start */}
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          {/* Submenu Items */}
                          <li>
                            <NavLink

                              to="CountryTable"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Country
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="StateTable"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              State
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="DistrictTable"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              District
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* Dropdown Menu End */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Master Location End --> */}


              {/* <!-- Menu Item Religions and Community --> */}
              {/* <SidebarLinkGroup
                activeCondition={
                  pathname === '/religions-community' ||
                  pathname.includes('religions-community')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>

                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out ${(pathname === '/religions-community' ||
                          pathname.includes('religions-community')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >

                        <FaGlobe />
                        Religions and Community

                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                            }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>

                 
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                      
                          <li>
                            <NavLink
                              to="/ReligionTable"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Religion
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/CasteTable"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Caste
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                     
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup> */}
              {/* <!-- Menu Item Religions and Community End --> */}
               {/* Dropdown Menu End */}

              {/* <!-- Menu Item Horoscope Master --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/horoscope-master' ||
                  pathname.includes('horoscope-master')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      {/* Main Menu Item */}
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out ${(pathname === '/horoscope-master' ||
                          pathname.includes('horoscope-master')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        {/* Star Icon */}
                        <FaRegStar />

                        {/* Menu Item Text */}
                        Horoscope Master

                        {/* Arrow Icon for Dropdown */}
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                            }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>

                      {/* Dropdown Menu Start */}
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="BirthStarList"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Birth Star
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/RasiList"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Rasi
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/LagnamList"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Lagnam/Didi
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/DasaBalanceList"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Dasa Balance
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* Dropdown Menu End */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/family-master' ||
                  pathname.includes('family-master')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>

                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out ${(pathname === '/family-master' ||
                          pathname.includes('family-master'))
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <MdFamilyRestroom />
                        Family Master
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                            }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          {/* Submenu Items */}
                          <li>
                            <NavLink
                              to="/family-master/family-type"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Family Type
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/family-master/family-status-options"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Family Status
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/family-master/family-value-options"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' +
                                (isActive && '!text-black')
                              }
                            >
                              <GoDot />
                              Family Value
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* Dropdown Menu End */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/CSM page' ||
                  pathname.includes('CSM page')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>

                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 success rounded-sm px-4 py-2 text-black font-medium text-PrimaryRed hover:text-PrimaryRed hover:text-PrimaryRed duration-300 ease-in-out ${(pathname === '/' ||
                        pathname.includes('dashboard'))

                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 2L2 10.5858V21H6V14H12V21H16V10.5858L12 2ZM9 13V19H7V13H9ZM17 13V19H15V13H17Z"
                            fill=""
                          />
                        </svg>
                        CSM page
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                            }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          {/* Submenu Items */}
                         
                          <li>
                            <NavLink
                              to="/CsmDataTable"
                              className={
                              'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out hover:text-PrimaryRed ' 
                            }
                            >
                               <GoDot />
                              Csm Data List
                            </NavLink>
                            
                          </li>
                          
                          
                         

                        </ul>
                      </div>
                      {/* Dropdown Menu End */}
                      
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <SidebarLinkGroup
  activeCondition={pathname === '/SiteDetailsForm' || pathname.includes('AdminSettings')}
>
  {(handleClick, open) => {
    return (
      <React.Fragment>
        <NavLink
          to="/SiteDetailsForm"
          className={`group relative flex items-center gap-2.5 success rounded-sm px-4 py-2 text-black font-medium text-PrimaryRed hover:text-PrimaryRed duration-300 ease-in-out ${pathname === '/' || pathname.includes('dashboard') ? '' : ''}`}
          onClick={() => {
            setSidebarExpanded(false);
          }}
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.14,12.936c0.038-0.304,0.06-0.613,0.06-0.936s-0.022-0.632-0.06-0.936l2.03-1.593c0.188-0.147,0.24-0.42,0.115-0.632
              l-1.922-3.328c-0.125-0.211-0.391-0.292-0.617-0.205l-2.39,0.96c-0.499-0.385-1.03-0.705-1.595-0.96l-0.36-2.53
              C14.39,2.194,14.178,2,13.94,2h-3.88c-0.238,0-0.45,0.194-0.486,0.428l-0.36,2.53c-0.565,0.255-1.096,0.575-1.595,0.96
              l-2.39-0.96c-0.226-0.087-0.492-0.006-0.617,0.205L2.655,8.839c-0.125,0.211-0.072,0.485,0.115,0.632l2.03,1.593
              C4.762,11.368,4.74,11.676,4.74,12s0.022,0.632,0.06,0.936l-2.03,1.593c-0.188,0.147-0.24,0.42-0.115,0.632l1.922,3.328
              c0.125,0.211,0.391,0.292,0.617,0.205l2.39-0.96c0.499,0.385,1.03,0.705,1.595,0.96l0.36,2.53c0.036,0.234,0.248,0.428,0.486,0.428
              h3.88c0.238,0,0.45-0.194,0.486-0.428l0.36-2.53c0.565-0.255,1.096-0.575,1.595-0.96l2.39,0.96c0.226,0.087,0.492,0.006,0.617-0.205
              l1.922-3.328c0.125-0.211,0.072-0.485-0.115-0.632L19.14,12.936z M12,15.5c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5
              s3.5,1.567,3.5,3.5S13.933,15.5,12,15.5z"
              fill="currentColor"
            />
          </svg>
          Admin Setting
          <svg
            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open ? 'rotate-180' : ''}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </NavLink>
      </React.Fragment>
    );
  }}
</SidebarLinkGroup>

<SidebarLinkGroup
  activeCondition={
    pathname === '/AdminList' || pathname.includes('AdminList')
  }
>
  {(handleClick, open) => (
    <React.Fragment>
      <NavLink
        to="#"
        className={`group relative flex items-center gap-2.5 success rounded-sm px-4 py-2 text-black font-medium text-PrimaryRed hover:text-PrimaryRed duration-300 ease-in-out ${
          pathname === '/' || pathname.includes('dashboard') ? 'bg-gray-100' : ''
        }`}
        onClick={(e) => {
          e.preventDefault();
          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
        }}
      >
        <FaUser  size={18} /> {/* Replace with user icon */}
        Admin Users
        <svg
          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
            fill=""
          />
        </svg>
      </NavLink>
      <div
        className={`translate transform overflow-hidden ${!open && 'hidden'}`}
      >
        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
          {/* Submenu Items */}
          <li>
            <NavLink
              to="/AdminList"
              className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black hover:text-PrimaryRed duration-300 ease-in-out"
            >
              
               <GoDot />
              User Details
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dropdown Menu End */}
    </React.Fragment>
  )}
</SidebarLinkGroup>

            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
