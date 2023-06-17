import { OperationResultStatus } from "./enums/operation-result-status";

class OperationResult {
  message;
  status;
  data;
  error;

  constructor(props = {}) {
    if (typeof props === "string") {
      props = JSON.parse(props);
    }
    this.message = props?.message;
    this.status = props?.status || OperationResultStatus.Pending;
    this.data = props?.data;
    this.error = props?.error;
  }

  static success(data, message) {
    const op = new OperationResult();
    op.data = data;
    op.message = message;
    op.status = OperationResultStatus.Success;
    return op;
  }

  static failed(err, message) {
    const op = new OperationResult();
    op.error = err;
    op.message = message;
    op.status = OperationResultStatus.Failed;
    return op;
  }

  static notFound(message) {
    const op = new OperationResult();
    op.message = message;
    op.status = OperationResultStatus.NotFound;
    return op;
  }
  static unAuthorized(message) {
    const op = new OperationResult();
    op.message = message;
    op.status = OperationResultStatus.UnAuthorized;
    return op;
  }
}

export default OperationResult;
