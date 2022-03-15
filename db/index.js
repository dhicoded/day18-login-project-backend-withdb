/* House connection to the database */

const pgp=require('pg-promise')();
const connectionString="postgresql://postgres:dhivya@localhost:5432/cdclogin"
/*const connectionString = {
        host: 'postgresql',
        user: 'postgres',
        password: 'dhivya',
        port:5432,
        database: 'logindetails',
    };*/
const db=pgp(connectionString)

module.exports=db;