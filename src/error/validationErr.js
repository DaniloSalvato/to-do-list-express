import requisitionErr from "./requisitionErr.js";

class ValidationErr extends requisitionErr {
  constructor(err) {
    const errMessage = Object.values(err.errors)
      .map((err) => err.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${errMessage}`);
  }
}

export default ValidationErr;
