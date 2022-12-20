function factorial(n) {
  let fact = n;
  if (n < 2) return 1;

  for (let i = 1; i < n; i++) {
    fact *= i;
  }
  return fact;
}
