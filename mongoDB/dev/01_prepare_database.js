db = connect("localhost:27017/admin");
db.createUser( {
        user: "databaseAdmin",
        pwd: "abc123",
        roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
} );