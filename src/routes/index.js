import express from "express";
import checklist from "./checklistRoutes.js";
import task from "./taskRoutes.js";

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send({ titulo: "API - Checklist" }));

  app.use(express.json(), checklist, task);
};

export default routes;
