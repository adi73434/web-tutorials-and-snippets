import mongodb, {MongoClient as dbconn} from "mongodb";

/**
 * This is a function that returns a MongoDB database connection.
 *
 * @return {(mongodb.MongoClient | string)}
 */
const makeDbConn = async (): Promise<mongodb.MongoClient> => {
	return dbconn.connect("mongodb://localhost:27017/node_todo");
};


export {
	makeDbConn,
};
