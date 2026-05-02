# 📝 CLI Todo App

> A simple command-line todo list. Add, list, complete, and delete todos. Data persists in a JSON file between runs.

## Features

- ✅ Add a new todo
- 📋 List all todos (with status)
- ✔️ Mark todo as done
- 🗑️ Delete a todo
- 💾 Save/load from `todos.json`

## Tech

- Node.js (no external dependencies)
- `fs` module (file system)
- Command-line arguments via `process.argv`

## Usage

```bash
node todos.js add "Buy milk"
node todos.js list
node todos.js done 1
node todos.js delete 1
```

## What I learned

- Working with `fs.readFileSync` / `fs.writeFileSync`
- Parsing CLI arguments with `process.argv`
- Structuring data as an array of objects
- JSON serialization (`JSON.stringify` / `JSON.parse`)
- Using a `switch` statement to dispatch commands

## Run

```bash
node todos.js list
```
