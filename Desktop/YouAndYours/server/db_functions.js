var pg = require('pg');
var format = require('pg-format');
const { Pool, Client } = require('pg')


const getBundles = () => {
    var conString = "postgres://euxdyohv:9Y4d0NZjgf3DWhHynwouaQIWPc2hHQNr@rajje.db.elephantsql.com/euxdyohv" //Can be found in the Details page
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query(`SELECT * FROM bundles`, function(err, result) {
        // if(err) {
        //   return console.error('error running query', err);
        // }
        console.log("results getBundles" + result.rows);
        console.log('results inside getBundles');
      });
    });
  }

  
  const createBundle = async (obj) => {
    const unique = obj.values[1]
    const name = obj.values[0]
    const values = [name, unique]
    const text = `INSERT INTO bundles (id, name) VALUES (%1$L, %2$L) RETURNING *`
    var sql = format(text, unique, name.toString());
    console.log("sqL"+sql);
    var conString = "postgres://euxdyohv:9Y4d0NZjgf3DWhHynwouaQIWPc2hHQNr@rajje.db.elephantsql.com/euxdyohv" //Can be found in the Details page
    var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err){
            console.log('error connecting to client POSTGRESQL');
        }
        else{
    client.query(sql, function(err, result) {
        if(err) {
            return console.error('error running query!', err);
          }
          console.log(result.rows);
          // >> output: 2018-08-23T14:02:57.117Z
          client.end();
        })
    };
}
    )};



  const objDelete = {
      text: "DELETE FROM bundles WHERE unique= $1",
      values: ['uniqueNumber']
  }
const deleteBundle = (body) => {

    const {text, values} = body
    var conString = "postgres://euxdyohv:9Y4d0NZjgf3DWhHynwouaQIWPc2hHQNr@rajje.db.elephantsql.com/euxdyohv" //Can be found in the Details page
    var client = new pg.Client(conString);
    client
        .query(text, values)
        .then(res => {
             console.log(res.rows[0]) // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
})
.catch(e => console.error(e.stack))
client.end();
}
  

module.exports = {
    getBundles,
    createBundle,
    deleteBundle
  }