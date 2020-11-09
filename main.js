// Using recursion
const getChangeRecursive = (amount) => {
  const cents = Math.round(amount * 100);

  if (cents === 0) {
    return;
  } else if (cents >= 25) {
    const quarters = Math.floor(cents / 25);
    console.log(`Quarters: ${quarters}`);
    return getChangeRecursive((cents % 25) / 100);
  } else if (cents >= 10) {
    const dimes = Math.floor(cents / 10);
    console.log(`Dimes: ${dimes}`);
    return getChangeRecursive((cents % 10) / 100);
  } else if (cents >= 5) {
    const nickels = Math.floor(cents / 5);
    console.log(`Nickels: ${nickels}`);
    return getChangeRecursive((cents % 5) / 100);
  } else if (cents >= 1) {
    const pennies = Math.floor(cents);
    console.log(`Pennies: ${pennies}`);
    return getChangeRecursive((cents % 1) / 100);
  }
}
getChangeRecursive(1.94);

// Using closures
function getChangeClosure(amount) {
  const cents = Math.round(amount * 100);
  const quarters = Math.floor(cents / 25);
  return () => {
    const dimes = Math.floor((cents % 25) / 10);
    return () => {
      const nickels = Math.floor((cents % 10) / 5);
      return () => {
        const pennies = Math.floor((cents % 5));
        return [quarters, dimes, nickels, pennies];
      }
    }
  }
}

const getChange = (dollars) => {
  return getChangeClosure(dollars)()()()
}
console.log(getChange(1.19))