const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const {MongoClient } = require("mongodb");

app.post("/save",(req,res) => {
	const url = "mongodb+srv://guptaritika183:fQwzWLJffZDXC3g8@cluster0.o2tyjlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("task4employeemanagement19jan24");
	const coll = db.collection("employee");
	const record = {"_id":req.body.id, "name": req.body.name, "salary": req.body.salary};
	coll.insertOne(record)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.get("/read",(req,res) => {
	const url = "mongodb+srv://guptaritika183:fQwzWLJffZDXC3g8@cluster0.o2tyjlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("task4employeemanagement19jan24");
	const coll = db.collection("employee");
	coll.find({}).toArray()
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.delete("/remove",(req,res) => {
	const url = "mongodb+srv://guptaritika183:fQwzWLJffZDXC3g8@cluster0.o2tyjlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("task4employeemanagement19jan24");
	const coll = db.collection("employee");
	const data = {"_id":req.body.id};
	coll.deleteOne(data)
	.then(result => res.send(result))
	.catch(error => res.send(error)); 
});

app.put("/modify",(req,res) => {
	let url = "mongodb+srv://guptaritika183:fQwzWLJffZDXC3g8@cluster0.o2tyjlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("task4employeemanagement19jan24");
	const coll = db.collection("employee");
	coll.updateOne({"_id":req.body.id}, {"$set": {"name":req.body.name,"salary":req.body.salary}})
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.listen(9000, () => {console.log("Server Ready @9000");});