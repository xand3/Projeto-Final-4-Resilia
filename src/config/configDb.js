import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function openDb() {
    return open({
<<<<<<< HEAD
        filename: './src/data/dataBase.db',
        driver:sqlite3.Database
    })
}
=======
        filename: "./src./data/dataBase.db",
        driver: sqlite3.Database,
    });
}
>>>>>>> e04585ca221ba10e2cb0c477ac955acefd64865b
