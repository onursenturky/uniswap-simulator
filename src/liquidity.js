const { readData } = require("./app");

function addLiquidity() {
    const data= readData();
    const amountA =100;
    const amountB =100;

    data.pool.tokenA += amountA;
    data.pool.tokenB += amountB;

    fs.writeFileSync("./data/pool.json",JSON.stringify(data,null,2));
    console.log(chalk.green("Liquidity added succesfully"));
    
}