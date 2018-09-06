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

// // Welcome function for purchasing item.
function welcome() {
    console.log("Let's shop!");
    // Display Items
    connection.query("Select * from products", function (err, results) {
        if (err) throw err;
    });
//         // once you have the items, prompt the user for which they'd like to bid on
//         inquirer
//             .prompt([
//                 {
//                     name: "choice",
//                     type: "rawlist",
//                     choices: function () {
//                         var choiceArray = [];
//                         for (var i = 0; i < results.length; i++) {
//                             choiceArray.push(results[i].item_name);
//                         }
//                         return choiceArray;
//                     },
//                     message: "Which item would you like to purchase?"
};

            


// // function sell{
// //     // Ask which item to purchase
// //     inquirer
// //         .prompt([
// //             {
// //                 name: "item id",
// //                 type: input,
// //                 message: "What item would you like to purchase?"
// //             },
// //             {
// //                 name: "quantity",
// //                 type: input,
// //                 message: "How many would you like to purchase?"
// //             }
// //         ]).then()
// //};
