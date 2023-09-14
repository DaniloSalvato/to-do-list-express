import mongoose from "mongoose";
import ErrBase from "../error/baseErr.js";
import RequisitionErr from "../error/requisitionErr.js";
import ValidationErr from "../error/validationErr.js";

// eslint-disable-next-line no-unused-vars
function errHandler(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new RequisitionErr().sendErr(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationErr(err).sendErr(res);
  } else if (err instanceof ErrBase) {
    err.sendErr(res);
  } else {
    new ErrBase().sendErr(res);
  }
}

export default errHandler;
