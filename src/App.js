import React, { useState, useEffect } from 'react'
import Datatable from './components/Datatable/Datatable'
import SearchFilter from './components/SearchFilter/SearchFilter'
import SearchInput from './components/SearchInput/SearchInput';
import Pagination from './components/Pagination/Pagination';
import './App.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function App() {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(20);
  const [activeLink, setActiveLink] = useState(currentPage);
  const [filteredProfiles, setFilteredProfiles] = useState([]);


  useEffect(() => {
    const getUserProfiles = async () => {
      setLoading(true)
      const res = await fetch(`https://api.enye.tech/v1/challenge/records`);
      const jsonResponse = await res.json();
      setProfileData(jsonResponse.records.profiles);
      setLoading(false);
    }

    getUserProfiles()
  }, [])

  const searchInputHandler = (e) => {
    setFilteredProfiles([])
    setQuery(e.target.value);
    setCurrentPage(1)
    setActiveLink(1)
  }

  const searchedProfiles = profileData.filter(profile => {
    const fullName = profile.FirstName + profile.LastName;
    return fullName.toLowerCase().includes(query.toLowerCase())
  })


  // Get current profiles
  const lastProfileIndex = currentPage * profilesPerPage;
  const firstProfileIndex = lastProfileIndex - profilesPerPage;

  const searchedProfileCurrent = searchedProfiles.slice(firstProfileIndex, lastProfileIndex);
  const filteredProfileCurrent = filteredProfiles.slice(firstProfileIndex, lastProfileIndex);

  const currentProfile = filteredProfileCurrent.length > 1 ? filteredProfileCurrent : searchedProfileCurrent;

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    setActiveLink(pageNumber)
  };

  const handleSelectFilteredProfiles = (profiles) => {
    setCurrentPage(1)
    setActiveLink(1)
    setFilteredProfiles(profiles)
  }


  /* console.log(profileData) */
  return (
    <div className='App'>
      <h4>Enye Frontend Test</h4>
      <div>
        <SearchInput handleChange={searchInputHandler} />
          <SearchFilter
            label={'Gender'}
            options={['Male', 'Female', 'Prefer to skip']}
            profiles={profileData}
          handleSelect={handleSelectFilteredProfiles} />
          <SearchFilter
            label={'PaymentMethod'}
            options={['money order', 'cc', 'check', 'paypal']}
            profiles={profileData}
          handleSelect={handleSelectFilteredProfiles} />
       </div>
      <div>
        <Datatable
          profileData={currentProfile} loading={loading}></Datatable>
        <Pagination profilesPerPage={profilesPerPage} totalProfiles={filteredProfiles.length || searchedProfiles.length} paginate={paginate} activeLink={activeLink} />
       </div>
    </div>
  )

}