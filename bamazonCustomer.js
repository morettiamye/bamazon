var database = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the welcome function after the connection is made to prompt the user
  welcome();
});

// Welcome function for purchasing item.
function welcome () {
    console.log("Welcome to Bamazon");
    // Display Items

    // Ask which item to purchase
    inquirer
        .prompt([
            {
                name: "item id",
                type: input,
                message: "What item would you like to purchase?"
            },
            {
                name: "quantity",
                type: input,
                message: "How many would you like to purchase?"
            }
        ]).then()
}