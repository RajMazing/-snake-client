const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
   
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
      // conn.write("Welcome, KC")
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

 
  return conn;
};

module.exports = {
connect

};