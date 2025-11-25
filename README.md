🚀 Crypto To-Do List DApp

A simple, modern Web3 decentralized application (DApp) that lets users create and manage tasks directly on the blockchain.
Built with Solidity, MetaMask, Ethers.js, HTML/CSS, and a Dark Mode Crypto Dashboard UI.

🌌 Features

🔐 Wallet Connection (MetaMask)
📝 Add Blockchain-Stored Tasks
🔄 Toggle Completed / Undo (On-Chain State Update)
📜 Live Task List fetched directly from the smart contract
🌙 Dark Mode Crypto Dashboard UI
⚡ Ethers.js v6 / BrowserProvider Integration
🎨 Glassmorphism Cards, Gradient Buttons, Hover Animations
🪪 Works on Sepolia, Hoodi, Polygon, or any EVM Testnet

🛠 Tech Stack
Component	Technology
Smart Contract	Solidity (0.8.x)
Blockchain	Ethereum Testnet (Sepolia / Hoodi)
Wallet	MetaMask
Frontend	HTML + CSS + JS (Dark Dashboard UI)
Web3 Connection	Ethers.js v6 (BrowserProvider)
Hosting	Live Server / Static Web Server
📁 Folder Structure
/todo-dapp
│── index.html          # Frontend UI
│── style.css           # Dark Mode Dashboard Styles
│── app.js              # Ethers.js logic + contract calls
│── TodoList.sol        # Smart contract code
└── README.md           # Project documentation

🧱 Smart Contract

TodoList.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {

    struct Task {
        string text;
        bool completed;
    }

    Task[] public tasks;

    function addTask(string memory _text) public {
        tasks.push(Task(_text, false));
    }

    function toggleCompleted(uint _index) public {
        require(_index < tasks.length, "Invalid index");
        tasks[_index].completed = !tasks[_index].completed;
    }

    function getTasks() public view returns(Task[] memory) {
        return tasks;
    }
}

🌐 UI Preview

💠 Gradient Top Bar
💠 Neon "Add Task" Button
💠 Frosted-Glass Dashboard Card
💠 Glowing Input Field
💠 Smooth Hover Animations
💠 Fully Responsive

🚀 How to Run Locally
1. Clone the Repository
git clone https://github.com/your-username/todo-dapp.git
cd todo-dapp

2. Install MetaMask

👉 https://metamask.io/

Create or import a wallet and switch to a test network:

Hoodi Testnet

Sepolia Testnet

Make sure you have test ETH.

3. Deploy the Smart Contract
▶ Go to Remix IDE

👉 https://remix.ethereum.org/

Create a new file → TodoList.sol

Paste the contract code

Compile using version 0.8.x

Open Deploy & Run Transactions

Select:

Injected Provider – MetaMask


Click Deploy

MetaMask will open → Confirm transaction

Copy:

Contract Address

(ABI stays the same from the contract)

4. Add Contract Details to app.js

Example:

const contractAddress = "0x85df341dF3D7B38Bf3c592C9129ca75805D61A82";


The ABI is already included inside your app.js.

5. Start Local Development Server

Browsers block Web3 scripts without a server.
Use Live Server:

If using VS Code:

Right-click → Open with Live Server

OR use Python:

python -m http.server 8000


Open in browser:

👉 http://localhost:8000

💎 UI Sneak Peek

✨ Dark Mode Crypto Dashboard
✨ Neon Gradient Buttons
✨ Glassmorphism Task Cards
✨ Floating Add Button (＋)
✨ Smooth Fade & Slide Animations
✨ Responsive Layout

🧪 Testing the DApp

Click Add Task (＋)

MetaMask opens → click Confirm

Your task appears instantly after the transaction

Click Complete / Undo to toggle

Confirm MetaMask again

Tasks stay saved even after refresh (stored on-chain)
