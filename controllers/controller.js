
// exports.search = async function(req, res){
//   var Book = require('mongoose').model('books');
//   var tName=req.body.titlesearch||'';
//    await Book.find({ 'title': { '$regex' : tName, '$options' : 'i' } }, 'title authors', function (err, books) {
//     if (err){
//        return handleError(err);
//     }
//     else{
//       searchedBooks=books;
//       console.log(searchedBooks.length);
//       res.redirect('/searched');
//     }
//   })
// };
exports.insert = function(req, res){
  var Entry = require('mongoose').model('login');
  var entry1 = new Entry;
  entry1.Username = req.body.username;
  entry1.Password = req.body.password;
  entry1.Contact=req.body.contact;
  entry1.Email=req.body.email;

  var conditions = { Username: entry1.Username}
  , update = {
    Username: entry1.Username,
    Password: entry1.Password,
    Contact: entry1.Contact,
    Email: entry1.Email,
  }
  , options = { multi: false,upsert: true};
  Entry.update(conditions, update, options,function(err,doc){
    if(err){
      console.log('User with that username already exists');
      console.log(err);
    }
    console.log(doc);
    console.log("saved successfully");
    res.redirect('/');
  });
}


// exports.searched=async function(req,res){
//   console.log(searchedBooks);
//   res.render('searched', {
//     searchedBooks: searchedBooks,
//   });
// }


// exports.filter=async function(req,res){
//   var Book = require('mongoose').model('books');
//   var cat=req.body.cat;
//   var sort=req.body.sort;
//   await Book.find({ "categories": cat}).sort({[sort]: 'asc'}).exec( function (err, books) {
//     if(err)
//     {
//       return handleError(err);
//     }
//    filteredBooks=books;
//    res.redirect('filtered');
//   });
// }


// exports.filtered=async function(req,res){
//   res.render('filtered', {
//     filteredBooks: filteredBooks,
//   });
// }