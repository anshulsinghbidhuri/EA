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

* for creating an Admin Id  __localhost:9000/admin/create__
* for Login 
* for creating   _localhost:9000/question/create_  method: POST , here you have to give key as title and value as question
* for deleting question  _localhost:9000/question/:id/delete_ method: GET , here you have to give _id of that question
* for creating option to question _localhost:9000/question/:id/options/create_ method: POST, here you have to give key as text value as option, also you need to give _id
* for showing full question with option _localhost:9000/question/:id_ method: GET, here you have to give _id of that question
* for deleting a particular option _localhost:9000/option/:id/delete_ method: GET, here you have to give _id of that particular option
* for adding vote to option _localhost:9000/option/:id/add_vote_ method: POST, here you have to give _id of that option
