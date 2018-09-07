var mysql = require("mysql");
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
connection.connect(function (err) {
  if (err) throw err;
  console.log("Welcome to Bamazon");
  // run the welcome function after the connection is made, display items
  welcome();
});


// Welcome function 
function welcome() {
  console.log("Let's shop!");
  // Display Items
  connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
    if (err) throw err;

    // for loop to log items
    for (let i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " Product: " + res[i].product_name + " Price: $" + res[i].price);
    }

    // Lets get to shopping with inquirer
    inquirer
      .prompt([
        {
          // Question: What item id to purchase?
          name: "buy",
          type: "input",
          message: "What is the item id for the item you would like to purchase?",
          validate: function (value) {
            if (isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0) {
              return true;
            } else {
              return false;
            }
          }
        },
        {
          // Question: how many to purchase?
          name: "quantity",
          type: "input",
          message: "How many would you like to purchase?",
          validate: function (value) {
            if (isNaN(value)) {
              return false;
            } else {
              return true;
            }
          }
        }]).then(function (input) {
          var purchase = input.buy;
          var itemQuantity = input.quantity;

          // Check inventory and update stock
          connection.query("SELECT * FROM products WHERE ?", {item_id: purchase}, function (err, data) {
            if (err) throw err;
            if (data.length === 0) {
              console.log("Invalid item ID");
            } else if (input.quantity <= data[0].stock_quantity) {
              console.log("Placing order");

                // End the database connection
                connection.end();
            }
          })
        })
  })
}
