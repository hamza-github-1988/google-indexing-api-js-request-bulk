# Google Indexing API Js Request Bulk

This script, created with love by Abdelhafidh HAMZA, helping you to bulk indexing your website's pages using the Google Indexing API.

This eliminates the need for manually submitting each URL through the Search Console interface.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) is required to execute this script.

## Setup

1. Follow the instructions in the [Google Indexing API Prerequisites](https://developers.google.com/search/apis/indexing-api/v3/prereqs) guide to set up access to the Indexing API in Google Cloud Platform.
   
2. Once you have access, download the public/private key pair JSON file, containing your credentials, and save it as "key.json".

3. Add the URLs you want to be crawl/index to the "urls.txt" file.

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
