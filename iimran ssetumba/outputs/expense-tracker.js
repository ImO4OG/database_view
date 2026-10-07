// Expense Tracker: a small interactive app for recording and reviewing expenses.
// It demonstrates functions, conditionals, loops, and console input/output.
// Run it from the workspace folder with: node outputs/expense-tracker.js

const readline = require('node:readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const expenses = [];

// Ask one question in the console and return the user's answer as a promise.
function ask(question) {
  return new Promise((resolve) => input.question(question, resolve));
}

// Collect a description and a positive amount, then save the expense.
async function addExpense() {
  const description = (await ask('What was the expense for? ')).trim();
  const amount = Number(await ask('How much did it cost? $'));

  if (description.length === 0 || !Number.isFinite(amount) || amount <= 0) {
    console.log('Please enter a description and an amount greater than zero.');
    return;
  }

  expenses.push({ description, amount });
  console.log(`Added: ${description} - $${amount.toFixed(2)}`);
}

// Display every saved expense using a loop, or explain that the list is empty.
function listExpenses() {
  if (expenses.length === 0) {
    console.log('No expenses have been recorded yet.');
    return;
  }

  console.log('\nYour expenses:');
  for (let index = 0; index < expenses.length; index += 1) {
    const expense = expenses[index];
    console.log(`${index + 1}. ${expense.description} - $${expense.amount.toFixed(2)}`);
  }
}

// Add up all saved amounts and show the total.
function showTotal() {
  let total = 0;

  for (const expense of expenses) {
    total += expense.amount;
  }

  console.log(`Total spent: $${total.toFixed(2)}`);
}

// Keep showing the menu until the user chooses to quit.
async function main() {
  let isRunning = true;
  console.log('Welcome to the Expense Tracker!');

  while (isRunning) {
    console.log('\n1. Add an expense');
    console.log('2. List expenses');
    console.log('3. Show total');
    console.log('4. Exit');

    const choice = (await ask('Choose an option (1-4): ')).trim();

    // Conditional branches select the action for the chosen menu option.
    if (choice === '1') {
      await addExpense();
    } else if (choice === '2') {
      listExpenses();
    } else if (choice === '3') {
      showTotal();
    } else if (choice === '4') {
      isRunning = false;
      console.log('Goodbye!');
    } else {
      console.log('That is not a valid option. Please choose 1, 2, 3, or 4.');
    }
  }

  input.close();
}

main().catch((error) => {
  console.error('The app encountered an error:', error);
  input.close();
  process.exitCode = 1;
});
