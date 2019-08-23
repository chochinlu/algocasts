const currySum = x => y => x + y;

const argTotal = (...args) => args.reduce((a, b) => a + b, 0);

const endlessCurrySum = (...args) => {
  let total = argTotal(...args);

  function fn(...more) {
    total = total + (more ? argTotal(...more) : 0);
    return fn;
  }
  fn.getValue = () => total;

  return fn;
};

module.exports = {
  currySum,
  argTotal,
  endlessCurrySum
};
