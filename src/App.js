// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello from V2</h1>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listVendors } from './graphql/queries';
import {  createVendor as createVendorMutation, deleteVendor as deleteVendorMutation } from './graphql/mutations';

const initialFormState = { requestnumber:'', requestedoperation: '', status: '', vendorname: '',  vendorfirstname: '',

  vendorfullname: '',addressline1: '',  postalcode: '', cityname: '', country: '',  region: '',  emailaddress: '',

  languagekey: '', thirdpartysupplieraccgrp: '',  purchasingorg: '', pocurrency: '', paymentkeyterms: '',

  incotermspart1: '',purchasinggroup: '',  planneddeliverytimedays: '',  companycode: '',reconcilliationaccount: '',

  streetname: '', blockkey4payment: '',industrykey: '', vendortype: '', customernumber: '', contacttitle: '',

  vendorgrouping: '', image: '' }
  

function App() {
  const [vendors, setVendors] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchVendors();
  }, []);

  async function fetchVendors() {
    const apiData = await API.graphql({ query: listVendors });
    setVendors(apiData.data.listVendors.items);
  }
 async function createVendor() {
     
     if(!formData.requestnumber|| !formData.requestedoperation || !formData.status|| !formData.vendorname|| !formData.vendorfirstname||

  !formData.vendorfullname || !formData.addressline1 || !formData.postalcode || !formData.cityname ||

  !formData.country || !formData.region || !formData.emailaddress || !formData.languagekey ||

  !formData.thirdpartysupplieraccgrp || !formData.purchasingorg || !formData.pocurrency || !formData.paymentkeyterms 

 || !formData.incotermspart1 || !formData.purchasinggroup || !formData.planneddeliverytimedays || !formData.companycode
 
 || !formData.reconcilliationaccount || !formData.streetname || !formData.blockkey4payment ||!formData.industrykey

 || !formData.vendortype || !formData.forcustomernumber || !formData.contacttitle ||!formData.vendorgrouping || !formData.image ) return;
 
  await API.graphql({ query: createVendorMutation, variables: { input: formData } });
    setVendors([ ...vendors,formData]);
    setFormData(initialFormState);
  }

 
 console.log("shaista");
  console.log(API);
     
     
    
 
  








  return (
    <div className="App">
      <h1>My Vendor App</h1>
       <input
        onChange={e => setFormData({ ...formData, 'requestnumber': e.target.value})}
        placeholder="request number"
        value={formData.requestnumber}
      />
      <input
        onChange={e => setFormData({ ...formData, 'requestedoperation': e.target.value})}
        placeholder="request name"
        value={formData.requestedoperation}
      />
      <input
        onChange={e => setFormData({ ...formData, 'status': e.target.value})}
        placeholder="status"
        value={formData.status}
      />
      <input
        onChange={e => setFormData({ ...formData, 'vendorname': e.target.value})}
        placeholder="Vendor Name"
        value={formData.vendorname}
      />
        <input
        onChange={e => setFormData({ ...formData, 'vendorfirstname': e.target.value})}
        placeholder=" v f name"
        value={formData.vendorfirstname}
      />
        <input
        onChange={e => setFormData({ ...formData, 'vendorfullname': e.target.value})}
        placeholder="vendor full name"
        value={formData.vendorfullname}
      />
        <input
        onChange={e => setFormData({ ...formData, 'addressline1': e.target.value})}
        placeholder="addressline1"
        value={formData.addressline1}
      />
        <input
        onChange={e => setFormData({ ...formData, 'postalcode': e.target.value})}
        placeholder="postalcode"
        value={formData.postalcode}
      />
        <input
        onChange={e => setFormData({ ...formData, 'cityname': e.target.value})}
        placeholder="cityname"
        value={formData.cityname}
      />
        <input
        onChange={e => setFormData({ ...formData, 'country': e.target.value})}
        placeholder="country"
        value={formData.country}
      />
       
        <input
        onChange={e => setFormData({ ...formData, 'region': e.target.value})}
        placeholder="region"
        value={formData.region}
      />
        <input
        onChange={e => setFormData({ ...formData, 'emailaddress': e.target.value})}
        placeholder="emailaddress"
        value={formData.emailaddress}
      />
        <input
        onChange={e => setFormData({ ...formData, 'languagekey': e.target.value})}
        placeholder="languagekey"
        value={formData.languagekey}
      />
        <input
        onChange={e => setFormData({ ...formData, 'thirdpartysupplieraccgrp': e.target.value})}
        placeholder="thirdpartysupplieraccgrp"
        value={formData.thirdpartysupplieraccgrp}
      />
        <input
        onChange={e => setFormData({ ...formData, 'purchasingorg': e.target.value})}
        placeholder="purchasingorg"
        value={formData.purchasingorg}
      />
        <input
        onChange={e => setFormData({ ...formData, 'pocurrency': e.target.value})}
        placeholder="pocurrency"
        value={formData.pocurrency}
      />
        <input
        onChange={e => setFormData({ ...formData, 'paymentkeyterms': e.target.value})}
        placeholder="paymentkeyterms"
        value={formData.paymentkeyterms}
      />
        <input
        onChange={e => setFormData({ ...formData, 'incotermspart1': e.target.value})}
        placeholder="incotermspart1"
        value={formData.incotermspart1}
      />
        <input
        onChange={e => setFormData({ ...formData, 'purchasinggroup': e.target.value})}
        placeholder="purchasinggroup"
        value={formData.purchasinggroup}
      />
        <input
        onChange={e => setFormData({ ...formData, 'planneddeliverytimedays': e.target.value})}
        placeholder="planneddeliverytimedays"
        value={formData.planneddeliverytimedays}
      />
        <input
        onChange={e => setFormData({ ...formData, 'companycode': e.target.value})}
        placeholder="companycode"
        value={formData.companycode}
      />
       <input
        onChange={e => setFormData({ ...formData, 'reconcilliationaccount': e.target.value})}
        placeholder="reconcilliationaccount"
        value={formData.reconcilliationaccount}
      />
       <input
        onChange={e => setFormData({ ...formData, 'streetname': e.target.value})}
        placeholder="streetname"
        value={formData.streetname}
      />
       <input
        onChange={e => setFormData({ ...formData, 'blockkey4payment': e.target.value})}
        placeholder="blockkey4payment"
        value={formData.blockkey4payment}
      />
       <input
        onChange={e => setFormData({ ...formData, 'industrykey': e.target.value})}
        placeholder="industrykey"
        value={formData.industrykey}
      />
       <input
        onChange={e => setFormData({ ...formData, 'vendortype': e.target.value})}
        placeholder="vendortype"
        value={formData.vendortype}
      />
       <input
        onChange={e => setFormData({ ...formData, 'customernumber': e.target.value})}
        placeholder="customernumber"
        value={formData.customernumber}
      />
       <input
        onChange={e => setFormData({ ...formData, 'contacttitle': e.target.value})}
        placeholder="contacttitle"
        value={formData.contacttitle}
      />
       <input
        onChange={e => setFormData({ ...formData, 'vendorgrouping': e.target.value})}
        placeholder="vendorgrouping"
        value={formData.vendorgrouping}
      />
       <input
        onChange={e => setFormData({ ...formData, 'image': e.target.value})}
        placeholder="image"
        value={formData.image}
      />
      <button onClick={createVendor}>Create Vendor</button>
      
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
