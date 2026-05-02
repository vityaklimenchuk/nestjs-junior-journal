// =============================================================================
// CLI Todo App — Day 7 mini project
// =============================================================================
// Run examples:
//   node todos.js add "Buy milk"
//   node todos.js list
//   node todos.js done 1
//   node todos.js delete 1
// =============================================================================

const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "todos.json");

// -----------------------------------------------------------------------------
// STEP 1 — Load todos from todos.json (or start with empty array if no file)
// HINT: use fs.existsSync(FILE) to check, fs.readFileSync(FILE, "utf-8") to read,
//       JSON.parse(...) to convert string → array.
// -----------------------------------------------------------------------------

function loadTodos() {
  if (!fs.existsSync(FILE)) {
    return [];
  }

  const data = fs.readFileSync(FILE, "utf8");

  return JSON.parse(data);
}

// -----------------------------------------------------------------------------
// STEP 2 — Save todos to todos.json
// HINT: JSON.stringify(arr, null, 2) gives pretty-formatted JSON.
//       fs.writeFileSync(FILE, dataString) writes it.
// -----------------------------------------------------------------------------

function saveTodos(todos) {
  const dataString = JSON.stringify(todos, null, 2);
  fs.writeFileSync(FILE, dataString);
}

// -----------------------------------------------------------------------------
// STEP 3 — addTodo(text)
// 1. Load existing todos
// 2. Make a new todo:  { id: <next id>, text, done: false }
//    For id: if list is empty → 1, else max(id) + 1
// 3. Push it to the array
// 4. Save
// 5. Log:  "Added: 5 - Buy milk"
// -----------------------------------------------------------------------------

function addTodo(text) {
  const todos = loadTodos();
  let nextId;

  if (todos.length === 0) {
    nextId = 1;
  } else {
    const maxId = Math.max(...todos.map((t) => t.id));
    nextId = maxId + 1;
  }

  const newTodo = {
    id: nextId,
    text: text,
    done: false,
  };

  todos.push(newTodo);
  saveTodos(todos);

  console.log(`Added: ${newTodo.id} - ${newTodo.text}`);
}

// -----------------------------------------------------------------------------
// STEP 4 — listTodos()
// Print each todo like:
//   [ ] 1 - Buy milk
//   [x] 2 - Finish homework
// Use [x] when done === true, [ ] when false.
// If empty: print "No todos yet. Add one with: node todos.js add \"...\""
// -----------------------------------------------------------------------------

function listTodos() {
  const todos = loadTodos();

  if (todos.length === 0) {
    console.log('No todos yet. Add one with: node todos.js add "..."');
    return;
  }

  todos.forEach((todo) => {
    const status = todo.done ? "[x]" : "[ ]";

    console.log(`${status} ${todo.id} - ${todo.text}`);
  });
}

// -----------------------------------------------------------------------------
// STEP 5 — markDone(id)
// 1. Load todos
// 2. Find the one with matching id (use .find)
// 3. If not found → log "Todo with id <id> not found" and return
// 4. Set its done = true
// 5. Save
// 6. Log "Marked done: <id> - <text>"
// -----------------------------------------------------------------------------

function markDone(id) {
  const todos = loadTodos();

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    console.log(`Todo with id ${id} not found`);
    return;
  }

  todo.done = true;

  saveTodos(todos);

  console.log(`Marked done: ${todo.id} - ${todo.text}`);
}

// -----------------------------------------------------------------------------
// STEP 6 — deleteTodo(id)
// 1. Load todos
// 2. Filter out the one with matching id
// 3. If length is the same → log "Not found" and return
// 4. Save the new array
// 5. Log "Deleted: <id>"
// -----------------------------------------------------------------------------

function deleteTodo(id) {
  const todos = loadTodos();

  const filteredTodo = todos.filter((todo) => todo.id !== id);

  if (filteredTodo.length === todos.length) {
    console.log("Not Found");
    return;
  }

  saveTodos(filteredTodo);
  console.log(`Deleted: ${id}`);
}

// -----------------------------------------------------------------------------
// STEP 7 — Read CLI arguments and dispatch
// process.argv is like:  ["node", "todos.js", "add", "Buy milk"]
//                          [0]      [1]       [2]    [3]
// We want:
//   const command = process.argv[2];
//   const arg     = process.argv[3];
//
// Then switch on command:
//   "add"    → addTodo(arg)
//   "list"   → listTodos()
//   "done"   → markDone(Number(arg))
//   "delete" → deleteTodo(Number(arg))
//   default  → log usage:
//     "Usage: node todos.js <add|list|done|delete> [arg]"
// -----------------------------------------------------------------------------

const command = process.argv[2];
const arg = process.argv[3];

switch (command) {
  case "add":
    addTodo(arg);
    break;

  case "list":
    listTodos();
    break;

  case "done":
    markDone(Number(arg));
    break;

  case "delete":
    deleteTodo(Number(arg));
    break;

  default:
    console.log("Usage: node todos.js <add|list|done|delete> [arg]");
}
