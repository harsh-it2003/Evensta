import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ProfileMenu({toggleUser}) {

  const [dropdown, setDropdown] = useState(false);
  const tempID = 1

  return (
    <div className='container'>

      <button className="flex mx-3 text-sm rounded-full md:mr-0 focus:ring-2 focus:ring-gray-600" type="button" onMouseOver={() => setDropdown((prevState) => !prevState)}>
        <img className="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="user" />
      </button>

      {
        dropdown &&
        <div id="dropdownInformation" className="absolute top-20 right-20 z-10 divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600">
          <div className="px-4 py-3 text-sm text-white">
            <div>User</div>
            <div className="font-medium truncate">Ronit Khatri</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link to={`dashboard/${tempID}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Events</Link>
            </li>
            <li>
              <Link to="settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
            </li>
          </ul>
          <div className="py-2">
            <button onClick={toggleUser} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
          </div>
        </div>
      }


    </div>
  )
}
