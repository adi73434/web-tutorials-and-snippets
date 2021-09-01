// -----------------------------------------------------------------------------
// External
import express from "express";
import serveIndex from "serve-index";
import nunjucks from "nunjucks";
import {MongoClient} from "mongodb";
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// SECTION Things for __dirname
// import {fileURLToPath} from "url";
// import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Consumption:
// - Snippet (/snippet/api/) API routes from ../js-express-api
// - Snippet (/snippet/nunjucks/) Nunjucks routes from ../js-nunjucks
// - META (/meta/api/) API routes from ./api
// -----------------------------------------------------------------------------

const app = express();


// eslint-disable-next-line
const routerApi = express.Router();


// Serve static files and allow browsing
app.use(express.static("./"));
app.use("/static", serveIndex("./"));

app.use("/meta/api/", routerApi);


app.get("/test", (req: express.Request, res: express.Response) => {
	res.status(200).send("Hello World!!!");
});


app.listen(3051, () => {
	console.log("Example app listening on port 3051!");
});

export default app;
