// Can use them in any template we want.
class ApiResponse{
   constructor(statusCode, data, message = "Success"){
      this.statusCode = statusCode,
      this.data = data,
      this.message = message,
      this.success = statusCode < 400 // Status Code above 400 is considered to be broken
   }
}

export {ApiResponse};