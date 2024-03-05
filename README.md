# Koinx Backend Assignment Documentation

## Task 1: Fetching and Storing Cryptocurrency Data

### Logic / Solution Overview
1. Created a schema named `Crypto.js` in the `models` folder to store cryptocurrency names and IDs.

2. Utilized Coingecko's API to fetch the list of all cryptocurrencies.
![Koinx_Backend_Assignment ](./img1.1.2.png?raw=true " Koinx_Backend_Assignment ")

3. Stored the fetched cryptocurrency data in a MongoDB database using the `Crypto` schema.
![Koinx_Backend_Assignment ](./assets/img1.1.png?raw=true " Koinx_Backend_Assignment ")
4. Implemented a background job using `setInterval` in the `index.js` file to update the cryptocurrency data every 1 hour.
## Testing Data Update Frequency
- For testing purposes, the data update frequency is set to every 2 minutes.
![Koinx_Backend_Assignment ](./assets/img1.2.png?raw=true " Koinx_Backend_Assignment ")


## Task 2: Currency Conversion API

### Logic / Solution Overview
1. Created an API at `http://localhost:4000/api/price` to convert the value of one cryptocurrency to another.
2. Implemented the `currency_Converter` function in the `Change_Crypto_Curr.js` file to handle the currency conversion logic.
3. Utilized Postman for testing the API functionality.
### Request and Response Examples
![Koinx_Backend_Assignment ](./assets/img1.3.png?raw=true " Koinx_Backend_Assignment ")

## Task 3: Retrieving Companies Holding Cryptocurrency

### Logic / Solution Overview
1. Developed an API at `http://localhost:4000/api/companies/public_treasury` to retrieve a list of companies holding a specific cryptocurrency.
2. Implemented the `getCompaniesByCurrency` function in the `Get_Companies_byCurr.js` file to handle the retrieval of company data.
3. Tested the API functionality using Postman.

### Request and Response Examples
![Koinx_Backend_Assignment ](./assets/img1.4.png?raw=true " Koinx_Backend_Assignment ")


###  Testing
- Postman is used for testing the APIs.
- API routes and expected responses are documented for each task.
