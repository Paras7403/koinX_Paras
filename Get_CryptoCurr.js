const Crypto = require("../models/Crypto");
const express = require('express');
const axios = require('axios');

// Getting data from API 
exports.getCryptoCurr = async () => {
    try {
        // Fetching the API for crypto data
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=false');
        
        const data = response.data; // Accessing the response data directly
        
        // Saving the data to the database
        await Crypto.create({
            data: data
        });

        return {
            success: true,
            message: "Crypto Data Added in database",
        };
    } catch (error) {
        // Handle errors
        return {
            success: false,
            message: "Error occurs during  saving  data to DB",
            error: error.message,
        };
    }
};





