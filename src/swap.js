const { readData } = require("./app");

function swapTokens(){
    const data = readData();
    const { pool, userBalance }= data;

    const amountIn=50;
    const isTokenAtoB =true;

    if(isTokenAtoB){
        const tokenAReserve = pool.tokenA;
        const tokenBReserve =pool.tokenB;

        const amountOut= (tokenBReserve * amountIn) / (tokenAReserve + amountIn);

        pool.tokenA += amountIn;
        pool.tokenB -= amountOut;


        userBalance.tokenA-= amountIn;
        userBalance.tokenB+=amountOut;

        console.log(chalk.blue(`swapped ${amountIn} TokenA for ${amountOut.toFixed(2)} TokenB`));

    }
    fs.writeFileSync("./data/pool.json", JSON.stringify(data, null, 2));
    
}