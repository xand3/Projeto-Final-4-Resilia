import sqlite3 from "sqlite3";
import { open } from "sqlite";


export default async function openDb() {
    return open({
        filename:"./data/dataBase.db",
        driver:sqlite3.Database
    })
}