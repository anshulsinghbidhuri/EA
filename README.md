# Ecommerce-api-master

### how to run file

* download zip file
* extract zip file in your sytem
* open file in VS code
* open terminal in Vs code
* run command npm i
* run command nodemon index.js


## How to call API

#### open PostMan Application and try running these commands

* for creating an Admin Id  __localhost:9000/admin/create__.
* for Login an Admin Id __localhost:9000/admin/login__.
* then Token of jwt will generated copy that an go to head in key write Authoriation in next Brarer and copy that token.
* for creating   __localhost:9000/products/create__  method: POST , here you have to give key as title and value as products.
* to list products  __localhost:9000/products__method:Get.,To list all the products
* for deleting products   __localhost:9000/products/Id:__ method: Delete , here you have to give _id of that products.
* to update quantity of a product (can be incremented or decremented)  __localhost:9000/products/:id/update_quantity__ method Post,In key write number.
