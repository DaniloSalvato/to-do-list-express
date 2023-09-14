import baseErr from "./baseErr.js";

class RequisitionErr extends baseErr {
  constructor(message = "Um ou mais dados estão incorretos") {
    super(message, 400);
  }
}

export default RequisitionErr;
