db = connect("localhost:27017/admin");
db.auth( {
   user: "databaseAdmin",
   pwd: "abc123"
} );

// switch to new authentication db
db = db.getSiblingDB('application_users');

// create application user
db.createUser( {
        user: "voting_app",
        pwd: "12345678",
        roles: [ { role: "readWrite", db: "voting_poc" } ]
} );