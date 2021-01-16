import React from 'react'
import './Datatable.css'

export default function Datatable({ profileData }) {
    return <div className="container">
        {
            profileData.map(data => (
                    <ul className='user-details' key={data.UserName}>
                        <li>{`First name: ${data.FirstName}`}</li>
                        <li>{`Last name:  ${data.LastName}`}</li>
                        <li>{`Username:  ${data.UserName}`}</li>
                        <li>{`Email:  ${data.Email}`}</li>
                        <li>{`Phone No:  ${data.PhoneNumber}`}</li>
                        <li>{`Gender: ${data.Gender}`}</li>
                        <li>{`Credit card number: ${data.CreditCardNumber}`}</li>
                        <li>{`Credit card type: ${data.CreditCardType}`}</li>
                        <li>{`Payment method: ${data.PaymentMethod}`}</li>
                        <li>{`Domain name:  ${data.DomainName}`}</li>
                        <li>{`Mac address: ${data.MacAddress}`}</li>
                        <li>{`Last login: ${data.LastLogin}`}</li>
                        <li>{`Latitude: ${data.Latitude}`}</li>
                        <li>{`Longitude: ${data.Longitude}`}</li>
                        <li>{`Url: ${data.URL}`}</li>
                    </ul>
            ))
        }
    </div>
}
