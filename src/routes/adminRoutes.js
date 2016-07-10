var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

    var books = [
    {
        title: 'Red Dragon',
        genre: ' Crime Thriller',
        author: 'Thomas Harris',
        bookId: 28877,
        read: false
        },
    {
        title: 'The Silence of the Lambs',
        genre: ' Crime Thriller',
        author: 'Thomas Harris',
        bookId: 23807,
        read: false
        },
    {
        title: 'The Firm',
        genre: 'Legal Thriller',
        author: 'John Grisham',
        bookId: 5358,
        read: false
        },
    {
        title: 'The Shining',
        genre: 'Horror Thriller',
        author: 'Stephen King',
        read: false
        },
    {
        title: 'The Day of the Jackal',
        genre: 'Political Thriller',
        author: 'Frederick Forsyth',
        read: false
        },
    {
        title: 'Shutter Island',
        genre: 'Psychological Thriller',
        author: 'Kenneth Grahame',
        read: false
        },
    {
        title: 'The Killing Floor',
        genre: 'Action Thriller',
        author: 'Lee Child',
        read: false
        },
    {
        title: 'Tinker, Tailor, Soldier, Spy',
        genre: 'Spy Thriller',
        author: 'John Le Carre',
        read: false
        }
    ];

var router = function (nav) {

  adminRouter.route('/addBooks')
          .get(function (req, res) {
                      var url = 
                      'mongodb://localhost:27017/thriller_booksApp';

                mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    }
                );

            });
                //res.send('inserting books');
          });
  return adminRouter;
};

module.exports = router;