const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const {MongoClient } = require("mongodb");

app.post("/save",(req,res) => {
	const url = "mongodb+srv://guptaritika183:Bd9D6r6CZ1AXcEtq@cluster0.yzb9s7n.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(url);
	const db = client.db("task4employeemanagement19jan24");
	const coll = db.collection("employees");
	const record = {"_id":req.body.id, "name": req.body.name, "salary": req.body.salary};
	coll.insertOne(record)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.get("/read",(req,res) => {
	const url = "mongodb+srv://guptaritika183:Bd9D6r6CZ1AXcEtq@cluster0.yzb9s7n.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(url);
	const db = client.db("task4employeemanagement19jan24");
	const coll = db.collection("employees");
	coll.find({}).toArray()
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.delete("/remove",(req,res) => {
	const url = "mongodb+srv://guptaritika183:Bd9D6r6CZ1AXcEtq@cluster0.yzb9s7n.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(url);
	const db = client.db("task4employeemanagement19jan24");
	const coll = db.collection("employees");
	const data = {"_id":req.body.id};
	coll.deleteOne(data)
	.then(result => res.send(result))
	.catch(error => res.send(error)); 
});

app.put("/modify",(req,res) => {
	let url = "mongodb+srv://guptaritika183:Bd9D6r6CZ1AXcEtq@cluster0.yzb9s7n.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(url);
	const db = client.db("task4employeemanagement19jan24");
	const coll = db.collection("employees");
	coll.updateOne({"_id":req.body.id}, {"$set": {"name":req.body.name,"salary":req.body.salary}})
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.listen(9000, () => {console.log("Server Ready @9000");});