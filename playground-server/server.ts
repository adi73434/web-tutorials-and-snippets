// -----------------------------------------------------------------------------
// External
import express from "express";
import serveIndex from "serve-index";
import nunjucks from "nunjucks";
import {MongoClient} from "mongodb";
// -----------------------------------------------------------------------------

import {test} from "./utils"

// Internal playground API (http://localhost:PORT/core/api/) API routes from ./api
import routerApi from "./api/index"

// User API snippets (http://localhost:PORT/snippets/) API routes from ../js-express-api
import routerSnippets from "../js-express-api"


// -----------------------------------------------------------------------------
// import {fileURLToPath} from "url";
// import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// -----------------------------------------------------------------------------


const app = express();

// Serve static files and allow browsing
app.use(express.static("./"));
app.use("/core/static", serveIndex("./"));

app.use("/snippets/", routerSnippets);
app.use("/core/api/", routerApi);


app.get("/core/test", (req: express.Request, res: express.Response) => {
	res.status(200).send("Hello World!!!");
});


app.listen(3051, () => {
	// test()
	console.log("Example app listening on port 3051!");
});

export default app;
