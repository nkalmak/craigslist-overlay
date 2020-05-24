const { Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    password: "database",
    host: "localhost",
    port: 5432,
    database: "craigdb"
})

async function getDbComments(url) {
    try {
        // await pool.connect()
        // await client.query("BEGIN")
        // await client.query("update tutorial set name = $1", ['Ray'])
        const { rows } = await pool.query('SELECT * FROM comments WHERE page_id=($1)', [url])
        // console.table(rows)
        // await client.query("insert into comments values ($1,$2)", [commentText, 'Frank'])
        // console.log("Inserted a new row.")
        // await client.query("COMMIT")
        return rows
    }
    catch (ex) {
        console.log(`Failed to execute ${ex}`)
        // await client.query("ROLLBACK")
    }
    finally {
        // await pool.end()
        console.log("Client still running.")
    }
}

async function postDbComments(url, commentText, commentID) {
    try {
        // await pool.connect()
        // await client.query("BEGIN")
        // await client.query("update tutorial set name = $1", ['Ray'])
        // const { rows } = await pool.query('SELECT * FROM comments WHERE page_id=($1)', [url])
        // console.table(rows)
        await pool.query("insert into comments values ($1,$2,$3,$4)", [commentID,1,url,commentText])
        // console.log("Inserted a new row.")
        // await client.query("COMMIT")
        // return rows
    }
    catch (ex) {
        console.log(`Failed to execute ${ex}`)
        // await client.query("ROLLBACK")
    }
    finally {
        // await pool.end()
        console.log("Client still running.")
    }
}


exports.getDbComments = getDbComments;
exports.postDbComments = postDbComments;
