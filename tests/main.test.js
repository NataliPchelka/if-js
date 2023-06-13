
function sum(a) {
  let sum1 = a;
  function count(b) {
    return sum1 += b;
  }
  return count;
}

test ('When added new nambers, must be sum', () => {
  const a = 5;
  const b = 6;
expect(sum(a)(b)).toBe(11);
})