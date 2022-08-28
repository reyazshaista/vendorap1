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

const initialFormState = { requestnumber:'',

  requestedoperation: '',

  status: '',

  vendorname: '',

  vendorfirstname: '',

  vendorfullname: '',

  addressline1: '',

  postalcode: '',

  cityname: '',

  country: '',

  region: '',

  emailaddress: '',

  languagekey: '',

  thirdpartysupplieraccgrp: '',

  purchasingorg: '',

  pocurrency: '',

  paymentkeyterms: '',

  incotermspart1: '',

  purchasinggroup: '',

  planneddeliverytimedays: '',

  companycode: '',

  reconcilliationaccount: '',

  streetname: '',

  blockkey4payment: '',

  industrykey: '',

  vendortype: '',

  customernumber: '',

  contacttitle: '',

  vendorgrouping: '',

  image: '' }
  console.log("shaista")

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
     
     if(!formData.requestedoperation || !formData.status|| !formData.vendorname|| !formData.vendorfirstname||

  !formData.vendorfullname || !formData.addressline1 || !formData.postalcode || !formData.cityname ||

  !formData.country || !formData.region || !formData.emailaddress || !formData.languagekey ||

  !formData.thirdpartysupplieraccgrp) return;
  await API.graphql({ query: createVendorMutation, variables: { input: formData } });
    setNotes([ ...vendors,formData]);
    setFormData(initialFormState);
  }

 
     
     
    
 
  








  return (
    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'requestedoperation': e.target.value})}
        placeholder="request name"
        value={formData.requestedoperation}
      />
      <input
        onChange={e => setFormData({ ...formData, 'status': e.target.value})}
        placeholder="Note description"
        value={formData.status}
      />
      <button onClick={createNote}>Create Note</button>
      
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
