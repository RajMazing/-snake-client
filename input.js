const setupInput = function (key) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Terminated Game :P")
    process.exit();
   
  }
});
}
module.exports = { setupInput} 