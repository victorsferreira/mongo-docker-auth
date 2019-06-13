db = db.getSiblingDB('mydb');
db.createUser(
    {
      user: "approot",
      pwd: "apppssw",
      roles: [ { role: "readWrite", db: "mydb" } ]
    }
)