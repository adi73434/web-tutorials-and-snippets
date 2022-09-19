// -----------------------------------------------------------------------------
// Libraries
import express from "express";
import {body} from "express-validator";
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// js-node internal snippets
import {makeDbConn} from "../../js-node/dbconn";
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// meta-server internal utils
// import x from "../utils"
// -----------------------------------------------------------------------------


// eslint-disable-next-line
const routerApi = express.Router();



routerApi.get("/list-dbs", (req: express.Request, res: express.Response) => {
	makeDbConn().then((db) => {
		db.db().admin().listDatabases().then((dbList) => {
			console.log(dbList);
			res.send("Open console for database list");
		});
	});
});

routerApi.get("/todos/list", (req: express.Request, res: express.Response) => {
	makeDbConn().then((db) => {
		const todos = db.db().collection("node_todos").find();
		res.send(todos);
	});
});

routerApi.post(
	"/todos/add",
	// -------------------------------------------------------------------------
	body("user").isAlphanumeric(),
	body("todoItem").exists(),
	// -------------------------------------------------------------------------
	(req: express.Request, res: express.Response) => {
		makeDbConn().then((db) => {
			const todos = db.db().collection("node_todos");
			todos.insertOne(req.body).
				then((result) => {
					res.send("Added todo");
				})
				.catch((err) => {
					res.send("Failed to add todo");
				});
		});
	});



export default routerApi;
