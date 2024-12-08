const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, get, update } = require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyDhQbYdvlxhBWQW0jWWqMssU4ic2Rp1oUc",
    authDomain: "uniswapsumilator.firebaseapp.com",
    databaseURL: "https://uniswapsumilator-default-rtdb.firebaseio.com",
    projectId: "uniswapsumilator",
    storageBucket: "uniswapsumilator.firebasestorage.app",
    messagingSenderId: "243057712626",
    appId: "1:243057712626:web:2e1b8a37007316c1d81f6b",
    measurementId: "G-MM56PTF25Z"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

module.exports = { db, ref, set, get, update };
