# Uniswap Simulator (Local)

This is a simple Uniswap simulator that runs locally, allowing users to test swaps, liquidity provision, and pricing dynamics without interacting with the Ethereum blockchain.

## Features

- Simulates token swaps using the constant product formula.
- Provides liquidity pool management.
- Calculates slippage and price impact.
- Runs entirely on your local machine.

## Installation

### Prerequisites

- Node.js (for JavaScript version) or Python (for Python version)
- Git (optional, for cloning the repository)

### Steps

1. Clone the repository (optional):
   ```bash
   git clone https://github.com/your-repo/uniswap-simulator.git
   cd uniswap-simulator
   ```
2. Install dependencies (if applicable):
   ```bash
   npm install  # For JavaScript version
   ```
   or
   ```bash
   pip install -r requirements.txt  # For Python version
   ```



### Example Operations

- **Adding Liquidity:** `addLiquidity(tokenA, tokenB, amountA, amountB)`
- **Swapping Tokens:** `swap(tokenIn, tokenOut, amountIn)`
- **Checking Reserves:** `getReserves(tokenA, tokenB)`

## Configuration

Modify the `config.json` or `.env` file to adjust token pairs, initial liquidity, and pool fees.

## Limitations

- This is a simulation and does not interact with real blockchain data.
- No slippage tolerance setting (yet).

## Contributing

Feel free to fork and submit a pull request!

## License

MIT License

