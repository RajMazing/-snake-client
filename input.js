


let connection;

const setupInput = function (conn) {
 
  
 connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  
  if (key === '\u0003') {
    console.log("Terminated Game :P")
    process.exit();
  }
  
 if (key === 'a') {
   connection.write('Move: left');   
 } 
 if (key === 'w') {
  connection.write('Move: up');  
}
 if (key === 'd') {
  connection.write('Move: right');    
}
 if (key === 's') {
   connection.write('Move: down'); 
 }
   if (key === 'e') {
    connection.write('Say: Coo'); 
}
if (key === 'q') {
    connection.write('Say: YOO');    

  
 };

};


  setupInput();
  
  module.exports = { setupInput }