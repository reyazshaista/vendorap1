/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
      id
      requestnumber
      requestedoperation
      status
      vendorname
      vendorfirstname
      vendorfullname
      addressline1
      postalcode
      cityname
      country
      region
      emailaddress
      languagekey
      thirdpartysupplieraccgrp
      purchasingorg
      pocurrency
      paymentkeyterms
      incotermspart1
      purchasinggroup
      planneddeliverytimedays
      companycode
      reconcilliationaccount
      streetname
      blockkey4payment
      industrykey
      vendortype
      customernumber
      contacttitle
      vendorgrouping
      image
      createdAt
      updatedAt
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        requestnumber
        requestedoperation
        status
        vendorname
        vendorfirstname
        vendorfullname
        addressline1
        postalcode
        cityname
        country
        region
        emailaddress
        languagekey
        thirdpartysupplieraccgrp
        purchasingorg
        pocurrency
        paymentkeyterms
        incotermspart1
        purchasinggroup
        planneddeliverytimedays
        companycode
        reconcilliationaccount
        streetname
        blockkey4payment
        industrykey
        vendortype
        customernumber
        contacttitle
        vendorgrouping
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
