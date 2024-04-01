import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AcreStyle.css';

function Housing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get('https://rental-platforms.onrender.com/housing');
        setData(response.data);
      };
    fetchData();
  }, []);

  return (
    <div>
     <h1 className="head">HOUSING</h1>
     <div>
        {data.map((item,index)=>(
                 <div key={index} className="property-box" >
             <p className="property-detail"><strong>Furnishing:</strong> {item.furnishing}</p>
             <p className="property-detail"><strong>Location:</strong> {item.location}</p>
             <p className="property-detail"><strong>Plot Area:</strong> {item.plot_area}</p>
             <p className="property-detail"><strong>Rent:</strong> {item.rent}</p>
             <p className="property-detail"><strong>Security Deposit:</strong> {item.security_deposit}</p>
             <p className="property-detail"><strong>Specification:</strong> {item.specification}</p>
             <p className="property-detail"><strong>Tenant Preferred:</strong> {item.tenant_preferred}</p>
             </div>
        ))}
     </div>
     </div>
  );
}

export default Housing;