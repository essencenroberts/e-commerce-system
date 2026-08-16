// define ApiError class extend Error

class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}
// handleError(error) function
export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}
// isApiError 
export function handleError(error: unknown): string {
  if (isApiError(error)) {
    return `API Error (${error.status}): ${error.message}`;
  } else {
    return "Server not reachable";
  }
}