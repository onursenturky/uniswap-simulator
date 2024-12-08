import { Command } from "commander";

// Basit log fonksiyonları
function logInfo(message) {
  console.log(`[INFO] ${message}`);
}

function logSuccess(message) {
  console.log(`[SUCCESS] ${message}`);
}

function logWarning(message) {
  console.log(`[WARNING] ${message}`);
}

function logError(message) {
  console.log(`[ERROR] ${message}`);
}

// Command.js ile menü oluştur
const program = new Command();

program
  .version("1.0.0")
  .description("Uniswap Simulator - A simple DEX simulator");

program
  .command("pool-status")
  .description("Show the current pool status")
  .action(() => {
    logInfo("Fetching pool status...");
    console.log("Pool: TokenA = 1000, TokenB = 1000, K = 1000000");
  });

program
  .command("add-liquidity")
  .description("Add liquidity to the pool")
  .action(() => {
    logSuccess("Liquidity added successfully!");
  });

program
  .command("swap")
  .description("Swap tokens between A and B")
  .action(() => {
    logWarning("Token swap is in progress...");
    logSuccess("Swapped 50 TokenA for 45 TokenB");
  });

program
  .command("exit")
  .description("Exit the application")
  .action(() => {
    logInfo("Exiting the application. Goodbye!");
    process.exit(0);
  });

program.parse(process.argv);

