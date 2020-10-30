'use strict';

const express = require('express');
const router = express.Router();
const util = require('../lib/utilities.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(`/${util.randomRoom(3,4,3)}`)

});
router.get('/:room([a-z]{3}-[a-z]{4}-[a-z]{3}$)', function(req, res, next) {
  // TODO: (Potentially)
  // - Handle user authentication
  // - Persist each room (e.g., write the room ID to a database)
  // - Confirm uniqueness/newness of each room
  const namespace = req.params['room'];
  res.render('index', { title: `Room ${namespace}`, namespace: namespace  });

  // res.render('index', { title: 'Checkers' });
});
module.exports = router;
