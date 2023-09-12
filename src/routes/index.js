import express from 'express';
import checklist from './checklistRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Checklist do dia'));

  app.use(express.json(), checklist);
};

export default routes;
