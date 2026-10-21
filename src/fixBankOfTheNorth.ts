const BALANCE = [ 15, 983 ];
const USER_PIN = 1234;

export function balanceCheck(pin: number) {
  if (pin === USER_PIN) {
    console.log("Checking: " + BALANCE[0] + ", Savings: " + BALANCE[1]);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
    return null;
  }
}

// Deposits money into the savings account (index 1)
export function deposit(pin: number, depositAmount: number) {
  if (pin === USER_PIN) {

    if (depositAmount <= 0) {
      console.log("Invalid deposit amount");
      return null;
    }

    BALANCE[1] = BALANCE[1] + depositAmount;
    console.log(BALANCE);
    return BALANCE;

  } else {
    console.log("Incorrect PIN");
    return null;
  }
}

// Withdraws money from the savings account (index 1)
export function withdraw(pin: number, amount: number) {
  if (pin === USER_PIN) {

    if (amount <= 0) {
      console.log("Invalid withdrawal amount");
      return null;
    }

    if (amount > BALANCE[1]) {
      console.log("Insufficient funds");
      return null;
    }

    BALANCE[1] = BALANCE[1] - amount;
    console.log(BALANCE);
    return BALANCE;

  } else {
    console.log("Incorrect PIN");
    return null;
  }
}

// Transfers money to another user's account after withdrawing it
export function transfer(pin: number, amount: number, reciver: string) {
  const transferAmount = withdraw(pin, amount);

  if (transferAmount !== null) {
    console.log("Success! $" + amount + " was transferred to " + reciver);
  } else {
    console.log("Transfer failed.");
  }

  return balanceCheck(pin);
}