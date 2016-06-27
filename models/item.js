'use strict';

const db = require('../config/db');

const uuid = require('uuid');

db.query(`create table if not exists items(
  id TEXT,
  name TEXT,
  value REAL,
  room TEXT
)`);

exports.getAll = () => {
  return getAllPromise();
};

exports.addItem = (itemObj) => {
  itemObj.id = uuid();
  return new Promise((resolve, reject) => {
    db.query('insert into items set ?', itemObj, err => {
      if (err) return reject(err);
      return resolve(getAllPromise());
    });
  });
};

exports.deleteItem = (id) => {
  return new Promise((resolve, reject) => {
    db.query('delete from items where id = ?', id, err => {
      if (err) return reject(err);
      return resolve(getAllPromise());
    });
  });
};

exports.updateItem = (id, updateObj) => {
  return new Promise((resolve, reject) => {
    db.query(`update items set ? where id = ?`, [updateObj, id], err => {
      if (err) return reject(err);
      return resolve(getAllPromise());
    });
  });
};

function getAllPromise() {
  return new Promise((resolve, reject) => {
    db.query('select * from items', (err, items) => {
      if(err) return reject(err);
      resolve(items);
    });
  });
}
