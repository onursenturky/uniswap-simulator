const fs = require("fs");
const chalk= require("chalk");

function readData() {
    const data=  fs.readFileSync("./data/pool.json");
    return JSON.parse(data);
}


function showPoolStatus(){
    const{ pool }= readData();
    console.log(chalk.green(`Pool Status: TokenA= ${pool.tokenA}, TokenB=${pool.tokenB}, K = ${pool.K}`));
}

module.exports = { showPoolStatus};


function showUserBalance() {
    const{ userBalance }= readData();
    console.log(chalk.yellow(`User Balance: TokenA= ${userBalance.tokenA}, TokenB = ${userBalance.tokenB}`));

}

 
function writeData(data) {
    fs.writeFileSync("./data/pool.json", JSON.stringify(data, null, 2));

}

module.exports = {readData, writeData};

async function loadFromFirebase() {
    const { db, ref, get } = require("./firebase");
  
    try {
      const poolSnap = await get(ref(db, "pool"));
      const balanceSnap = await get(ref(db, "userBalance"));
  
      if (poolSnap.exists() && balanceSnap.exists()) {
        return {
          pool: poolSnap.val(),
          userBalance: balanceSnap.val(),
        };
      } else {
        console.log("No data found in Firebase.");
        return null;
      }
    } catch (error) {
      console.error("Error loading from Firebase:", error);
    }
  }
  module.exports = { loadFromFirebase }; // Çakışmayı önlemek için doğru export yap
  