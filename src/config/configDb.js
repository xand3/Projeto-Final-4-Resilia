import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function openDb() {
    return open({

        filename: './src/data/dataBase.db',
        driver:sqlite3.Database
    })
}
<<<<<<< HEAD
=======


>>>>>>> 4864117648facae9b7ef87981cee12d87d356579
