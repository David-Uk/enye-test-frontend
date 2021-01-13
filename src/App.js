import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';

const url = "https://api.enye.tech/v1/challenge/records";



function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await axios.get(url);
    setUserData(response.data);
  };

  let profileData;
  if (userData.records) profileData = userData.records.profiles
  console.log(profileData)
  return (
    <div>
      <header className="App-header">
        <h2>Patient's Data</h2>
        <input type="search" name="search" placeholder='Search' id=""/>
      </header>
      <div>
        {profileData.map(data => (
          <div className='user-details' key={data.UserName}>
            <div className='user-details-left'>
              <h6>First Name: <span>{data.FirstName}</span></h6>
              <h6>Last Name: <span>{data.LastName}</span></h6>
              <h6>Gender: <span>{data.Gender}</span></h6>
              <h6>Latitude: <span>{data.Latitude}</span></h6>
              <h6>Longitude: <span>{data.Longitude}</span></h6>
            </div>
            <div className='user-details-center'>
              <h6>Creditcard No: <span>{data.CreditCardNumber}</span></h6>
              <h6>Creditcard Type: <span>{data.CreditCardType}</span></h6>
              <h6>Email: <span>{data.Email}</span></h6>
              <h6>DomainName: <span>{data.DomainName}</span></h6>
              <h6>Phone No: <span>{data.PhoneNumber}</span></h6>
            </div>
            <div className='user-details-right'>
              <h6>MAC: <span>{data.MacAddress}</span></h6>
              <h6>URL: <span>{data.URL}</span></h6>
              <h6>Username: <span>{data.UserName}</span></h6>
              <h6>Last Login: <span>{data.LastLogin}</span></h6>
              <h6>Payment Method: <span>{data.PaymentMethod}</span></h6>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default App