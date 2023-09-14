import RequisitionErr from "../error/requisitionErr.js";

async function pagnation(req, res, next) {
  try {
    let { limite = 5, pag = 1, ordenation = "_id:-1" } = req.query;
    let [sort, ordem] = ordenation.split(":");

    limite = parseInt(limite);
    pag = parseInt(pag);
    ordem = parseInt(ordem);

    const result = req.result;

    if (limite > 0 && pag > 0) {
      const checklists = await result
        .find()
        .sort({ [sort]: ordem })
        .skip((pag - 1) * limite)
        .limit(limite)
        .populate("tasks")
        .exec();

      res.status(200).json(checklists);
    } else {
      next(new RequisitionErr());
    }
  } catch (err) {
    next(err);
  }
}

export default pagnation;
