const contractAddress = "0x85df341dF3D7B38Bf3c592C9129ca75805D61A82";

const abi = [
  {
    "inputs":[{"internalType":"string","name":"_text","type":"string"}],
    "name":"addTask",
    "outputs":[],
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],
    "name":"toggleCompleted",
    "outputs":[],
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "inputs":[],
    "name":"getTasks",
    "outputs":[
      {
        "components":[
          {"internalType":"string","name":"text","type":"string"},
          {"internalType":"bool","name":"completed","type":"bool"}
        ],
        "internalType":"struct TodoList.Task[]",
        "name":"",
        "type":"tuple[]"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  }
];


// -----------------------------
//  FIXED getProvider()
// -----------------------------
async function getProvider() {
  if (!window.ethereum) {
    alert("MetaMask not installed!");
    return;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);

  // check if wallet already connected
  let accounts = await ethereum.request({ method: "eth_accounts" });

  // request connection only if not connected
  if (accounts.length === 0) {
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
  }

  const signer = await provider.getSigner();
  return { provider, signer };
}


// -----------------------------
//  LOAD TASKS
// -----------------------------
async function loadTasks() {
  const { provider } = await getProvider();
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const tasks = await contract.getTasks();
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task" + (task.completed ? " completed" : "");

    div.innerHTML = `
      <span>${task.text}</span>
      <button class="toggle-btn" onclick="toggleTask(${index})">
        ${task.completed ? "Undo" : "Complete"}
      </button>
    `;

    list.appendChild(div);
  });
}


// -----------------------------
//  ADD TASK
// -----------------------------
async function addTask() {
  const taskText = document.getElementById("taskInput").value;
  if (!taskText) return alert("Enter a task!");

  const { signer } = await getProvider();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tx = await contract.addTask(taskText);
  await tx.wait();

  document.getElementById("taskInput").value = "";
  loadTasks();
}


// -----------------------------
//  TOGGLE TASK
// -----------------------------
async function toggleTask(index) {
  const { signer } = await getProvider();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tx = await contract.toggleCompleted(index);
  await tx.wait();

  loadTasks();
}


// -----------------------------
//  FIX: Prevent duplicate loading
// -----------------------------
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(loadTasks, 300);
});
