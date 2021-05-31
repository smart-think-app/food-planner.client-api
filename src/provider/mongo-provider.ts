import * as mongodb from "mongodb"
const url = "mongodb://localhost:27017/"


export var DbConnection = function () {

    var db: mongodb.Db;

    async function DbConnect() {
        try {
            let _db = await mongodb.MongoClient.connect(url , (err , dbo) => {
                if (err) throw err
                db = dbo.db("food-planner-user")
            });

            return _db
        } catch (e) {
            return e;
        }
    }

   async function Get() {
        try {

            if (db != null) {
                console.log(`db connection is already alive`);
                return db;
            } else {
                console.log(`getting new db connection`);
                db = await DbConnect();
                return db; 
            }
        } catch (e) {
            return e;
        }
    }

    return {
        Get: Get
    }
}
