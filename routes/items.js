'use strict';

const express = require('express');
const router = express.Router();

const Item = require('../models/item');


router.get('/', (req, res) => {
  Item.getAll()
  .then(items => {
    res.send(items);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});


router.post('/', (req, res) => {
  Item.addItem(req.body)
  .then(items => {
    res.send(items);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

router.delete('/:id', (req, res) => {
  Item.deleteItem(req.params.id)
  .then(items => {
    res.send(items);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

router.put('/:id', (req, res) => {
  Item.updateItem(req.params.id, req.body)
  .then(items => {
    res.send(items);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

module.exports = router;
