import Configuration from "../../../../configuration/Configuration";
import {Album} from "../schema/Album";


const DBSchema = {
    version: (new Configuration()).getDBSchemaVersion(),
    schema: [
        Album
    ]
};


export {
    DBSchema
}
