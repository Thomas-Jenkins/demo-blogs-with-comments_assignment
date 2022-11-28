const { Router } = require('express');
const { Blog } = require('../models/Blog');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const temp = await Blog.getAll();
      res.json(temp);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const temp = await Blog.getById(req.params.id);
      await temp.addComments();
      res.json(temp);
    } catch (e) {
      next(e);
    }
  });
