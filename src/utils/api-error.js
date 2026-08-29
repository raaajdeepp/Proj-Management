// Can use them in any template we want.
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Somethings went wrong",
    error = [], // List of detailed errors.
    stack = "", // Stack trace — where the error occurred in code
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = this.data;
    this.message = message;
    this.success = false;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {ApiError};