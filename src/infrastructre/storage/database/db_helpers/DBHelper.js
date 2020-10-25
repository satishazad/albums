
import Realm from 'realm';
import {DBSchema} from "./DBSchema";


let instance = null;


class DBHelper {

    constructor() {
        this.realmObj = this.createScheme();
        instance = this;
        return instance;
    }

    static initialize() {
        return new DBHelper();
    }

    createScheme() {

        let { version, schema } = DBSchema;

        let options = {
            schema: schema,
            schemaVersion: version,
            migration: (oldRealm, newRealm) => {
                this.executeMigrations(oldRealm, newRealm);
            }
        };

        let realm = new Realm(options);

        return realm;
    }


    executeMigrations(oldRealm, newRealm) {

    }
}


export default DBHelper;
