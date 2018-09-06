var mysql= require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Welcome to Bamazon");
  // run the welcome function after the connection is made to prompt the user
  welcome();
});

// // Welcome function 
function welcome() {
    console.log("Let's shop!");
    // Display Items
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
      if (err) throw err;
  
      // for loop to log items
      for (let i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].item_id + " Product: " + res[i].product_name + " Price: $" + res[i].price);
        
      }
    })

};

          


