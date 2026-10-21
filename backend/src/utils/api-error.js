class ApiError extends Error {
  constructor(statusCode, message = "Success", errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = statusCode < 400;
  }
}

export default ApiError;
