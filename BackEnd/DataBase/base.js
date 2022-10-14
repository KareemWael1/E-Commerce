const Mongo = require("mongodb")
const {ObjectId} = require("mongodb");
const MongoClient = Mongo.MongoClient;

class dataBase{

    MongoConnect(url) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (error, db) {
                if (error)
                    return reject(error)
                resolve(db)
            })
        });
    }
    
    insertOne(collectionName, data) {
        return new Promise((resolve, reject) => {
            this.MongoConnect("mongodb://localhost:27017")
                .then(db => {
                    const dbo = db.db("products")
                    dbo.collection(collectionName).insertOne(data, function (error, result) {
                        if (error)
                            return reject(error)
                        resolve(result)
                        db.close()
                    })
                })
        })
    }
    
    find(collectionName, filter = {}) {
        return new Promise((resolve, reject) => {
            this.MongoConnect("mongodb://localhost:27017")
                .then((db) => {
                    const dbo = db.db("products");
                    dbo.collection(collectionName).find(filter).toArray(function (error, result) {
                        if (error) return reject(error);
                        resolve(result);
                        db.close();
                    });
                })
        })
    
    }
    
    findOne(collectionName, filter = {}) {
        return new Promise((resolve, reject) => {
            MongoConnect("mongodb://localhost:27017")
                .then((db) => {
                    const dbo = db.db("products");
                    dbo.collection(collectionName).findOne(filter, function (error, result) {
                        if (error) return reject(error);
                        resolve(result);
                        db.close();
                    });
                })
        })
    
    }
    
    async update(collectionName, id, date) {
        return new Promise((resolve, reject) => {
            MongoConnect("mongodb://localhost:27017")
                .then((db) => {
                    const dbo = db.db("products");
                    dbo.collection(collectionName)
                        .updateOne({_id: ObjectId(id)}, {$set: date}, function (error, result) {
                            if (error) return reject(error);
                            resolve(result);
                            db.close();
                        });
                })
        });
    }
    
    
    async deleteOne(collectionName, id) {
        return new Promise((resolve, reject) => {
            MongoConnect("mongodb://localhost:27017")
                .then((db) => {
                    const dbo = db.db("products");
                    dbo.collection(collectionName)
                        .deleteOne({_id: ObjectId(id)}, function (error, result) {
                            if (error) return reject(error);
                            resolve(result);
                            db.close();
                        });
                })
        });
    }
}



module.exports = {
    dataBase
}