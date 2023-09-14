import baseErr from "./baseErr.js";

class NotFound extends baseErr {
  constructor(message = "Página não encontrada") {
    super(message, 404);
  }
}

export default NotFound;
