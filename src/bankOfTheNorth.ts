// Program requirements:
// - A user can withdraw funds.
// - A user can deposit funds.
// - A user's balance should never become negative.
// - A PIN must be provided during every action.

const USER = "Rose Thecat";
const BALANCE = [15, 983];
const USER_PIN = 1234;

// Deposits money into a user's account.
export function deposit(pin: number, balance: number)
 {// Problem: "balance" implies total account value, not incoming cash
  if (pin === USER_PIN) {
    balance = BALANCE + balance;// Problem: you cannot use "+" on a whole array, doesn't update your balance 
    console.log(BALANCE);
    return BALANCE;// This returns temporary Local variable, not the updated account return balance
  } else {
    console.log("Incorrect PIN");
  }
}

// Withdraws money from a user's account.
export function withdrawl(pin: number, amount: number) {// Problem: Typos in function name can make it hard for other files to import
  if (pin === USER_PIN) {
    balance = BALANCE + balance;// Problem: This adds money instead of taking away.
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Returns the account balance.
export function balanceCheck() {
  return BALANCE;// The function ends at the return statement
  console.log(`Your balance is ${BALANCE}`);// This line will never run
}

// Transfers money to another user's account and withdraws it from the account.
export function transfer(pin: number, amount: number, reciver: string) {
  const transferAmount = withdrawl(amount);// Problem: no pin authorization, only 1 argument provided, requires 2 pin and const tranferAmount
  console.log(`Success! ${amount} was transferred to ${reciver}`);
  return balanceCheck;// Problem: this returns the functions blueprint, not the actual values
}

// AI transparency: AI was used to clean up this code.
