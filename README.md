# -Blockchain-To-Do-Lists

Blockchain To-Do List DApp

This is a simple DApp I created for learning blockchain.
It allows users to add tasks and complete tasks, and everything is stored on the blockchain.
Below I wrote all the steps for how to deploy and test this project.

Features

Add tasks on-chain

Mark tasks completed/undo

Beautiful UI (HTML + CSS)

Connect Wallet button

Works with MetaMask

Ethereum Testnet support (Sepolia / Hoodi)

100% decentralized storage


📁 Project Structure
/project
│
├── index.html      # Frontend UI
├── style.css       # Styling
├── app.js          # Ethers.js logic
└── TodoList.sol    # Smart Contract

🧱 Smart Contract Deployment (Remix + MetaMask)
1️⃣ Open Remix

👉 https://remix.ethereum.org/

2️⃣ Create file

Create TodoList.sol and paste your contract.

3️⃣ Compile

Open Solidity Compiler

Select 0.8.x

Click Compile

4️⃣ Connect MetaMask

Open MetaMask

Select Sepolia or Hoodi Testnet

In Remix → Deploy & Run → choose:

Injected Provider - MetaMask


Allow MetaMask connection

5️⃣ Deploy Contract

Click Deploy

MetaMask pops up → Confirm

Wait 5–20 seconds

6️⃣ Copy Contract Address

From Remix:

TodoList at 0x1234...


Copy this and paste it into app.js.

🌐 Frontend Setup (HTML + JS + Ethers.js)
1️⃣ Insert Contract Address

In app.js:

const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";


Replace with the one from Remix.

2️⃣ Run Frontend Using Live Server

MetaMask does not work with file:///.

Use Live Server:

Open VS Code

Right-click index.html

Click Open with Live Server

Opens at:

http://127.0.0.1:5500

🦊 Connect Wallet

When DApp loads:

Click Connect Wallet

MetaMask popup appears

Select your account

Make sure your network = same network as contract deployment

🧪 Testing the Application
✔ Add Task

Type a task

Click Add

Confirm transaction in MetaMask

Task appears after confirmation

✔ Complete / Undo Task

Click Complete

Confirm

UI updates from blockchain

✔ Refresh Page

Tasks remain because everything is stored on-chain.
