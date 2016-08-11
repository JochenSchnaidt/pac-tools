db = connect("localhost:27017/application_users");
db.auth( {
   user: "voting_app",
   pwd: "12345678"
} );

// switch to new application db
db = db.getSiblingDB('voting_poc');

// create an empty collection
db.createCollection("users");

// add additional index to users collection on email element
db.users.createIndex({email:1}, {unique:true});