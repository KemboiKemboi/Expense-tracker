# 💸 Expense Tracker (React)

This is a simple Expense Tracker application built with React. It allows users to add and delete expenses while displaying the name and amount of each expense.

## Features

- Add new expense items
- Delete existing items
- Dynamic list rendering with React props & state
- Responsive layout and clean UI
- Styled using external CSS (`App.css`)

##  Tech Stack

- React (Functional Components + Hooks)
- JavaScript (ES6+)
- CSS

## Folder Structure
src/ ├── components/ │ ├── ExpenseForm.js # Form for adding expenses │ ├── ExpenseList.js # Renders list of expenses │ └── ExpenseItem.js # Individual expense item with delete ├── App.js # Root component ├── App.css # App-wide styling └── index.js
## React entry point

## 🧠 How It Works

1. User types in the expense name and amount.
2. Submitting the form adds the new expense to the list.
3. Each item in the list has a delete icon to remove it from the list.
4. State is managed using React's `useState` hook.

## 🖥️ Usage

### 1. Clone the repo

```bash
git clone https://github.com/Harshpal01/expense-tracker.git
cd expense-tracker

Install dependencies: npm install
Start development server: npm run dev



