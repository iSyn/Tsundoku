const { ObjectID } = require('mongodb');
const { getDB }    = require('../lib/dbConnect.js');

function getFavorites(req, res, next) {
  getDB().then((db) => {
    db.collection('favorites')
      .find({ userId: { $eq: req.session.userId } })
      .toArray((toArrErr, data) => {
        if(toArrErr) return next(toArrErr);
        console.log('data back from getFaves: ', data);
        res.favorites = data;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

function saveFavorite(req, res, next) {
  // creating an empty object for the insertObj
  const insertObj = {
    favorite: {userId: undefined},
  };
  // copying all of req.body into insertObj
  for(key in req.body) {
    insertObj.favorite[key] = req.body[key];
  }

  // Adding userId to insertObj
  insertObj.favorite.userId = req.session.userId;
  console.log('object about to be saved looks like: ', insertObj);
  getDB().then((db) => {
    db.collection('favorites')
      .insert(insertObj.favorite, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

// Delete method doesn't change because we are deleting objects from the database
// based on that object's unique _id - you do not need to specify which user as
// the _id is sufficient enough
function deleteFavorites(req, res, next) {
  getDB().then((db) => {
    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);
        res.removed = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

module.exports = { getFavorites, saveFavorite, deleteFavorites };
