# bamazon

This is a CLI app that connects to a mySQL database.  It uses the Inqurer NPM package.

# To start
In order to run this you will need a mySQL database set up on your machine.

#Customer Interface
This app will allow the customer to "shop" via the command line.  The app begins by displaying available items.
![Product List](https://morettiamye.github.io/assets/images/products.png)

The customer then chooses which item to purchase and inputs the quantity.
![Product Selection](https://morettiamye.github.io/assets/images/purchase.png)


When finished the app will check it against the database for if the quantity is available, and will update the database as needed.  
