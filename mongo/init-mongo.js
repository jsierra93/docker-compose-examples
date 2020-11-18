db.createUser(
    {
        user: "dev124",
        pwd: "dev1234",
        roles: [
            {
                role: "readWrite",
                db: "mongo-database"
            }
        ]
    }
)