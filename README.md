# Google Indexing API Js Request Bulk

Crafted with care by Abdelhafidh HAMZA, this script simplifies the bulk indexing of your website's pages through the Google Indexing API. Say goodbye to the manual submission of individual URLs via the Search Console interface.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) is required to execute this script.

## Setup

1. Refer to the [Google Indexing API Prerequisites guide](https://developers.google.com/search/apis/indexing-api/v3/prereqs) for guidance on establishing access to the Indexing API within the Google Cloud Platform.
   
2. After successfully gaining access, retrieve the JSON file comprising your public/private key pair, housing your credentials. Save this file as "key.json" in the project.

3. Include the URLs you wish to crawl/index in the "urls.txt" file.

## Verify Site Ownership in Search Console

Before submitting URLs for indexing, you need to verify ownership of your site in Search Console.

1. Get your service account email address from "service_account.json" (look for the `client_email` field).
   
2. Add the service account email address as an owner ('delegated') of your web property in Search Console.
   - Go to [Google Search Console](https://search.google.com/)
   - Choose your verified property.
   - In Settings go to Users and permissions
   - Click 'Add an user'.
   - Add your service account email address as an owner to the property.

   Example service account email address: "my-service-account@test-project.google.com.iam.gserviceaccount.com".

## Quotas

100 URLs per request batch

200 URLs per day


## Usage

Install dependencies:

```bash
npm install
```

Execute the script using the following command:

```bash
node start.js
```
