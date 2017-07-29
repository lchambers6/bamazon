var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysqlPass",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  promptBuyers()
});

function promptBuyers() {
    inquirer.prompt([
        {
            name: "item_id",
            message: "What is the id of the product you want to buy?"
        }, {
            name: "stock_quantity",
            message: "How many units would you like to buy?"
        }
        ]).then(function(answers) {
            console.log(answers.item_id + "    " + answers.stock_quantity)
        });
};
// function addSong() {
//   console.log("Inserting a new Song...\n");
//   var query = connection.query("INSERT INTO songs SET ?", 
//     {
//       title: "Intertwined", 
//       artist:"The Hush Sound", 
//       genre: "Indie"
//     }, function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " product inserted!\n");
    
//   });
// };

// function queryAllSongs() {
//   connection.query("SELECT * FROM songs", function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//     console.log("-----------------------------------");
//   });
// }

// function queryDanceSongs() {
//   var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//   });

//   // logs the actual query being run
//   console.log(query.sql);
// }
