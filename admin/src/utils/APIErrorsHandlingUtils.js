import { apiErrors } from 'constants/apiErrors';

const { defaultErrorMessage, error403Message, error404Message, error500Message, noResponseErrorMessage } = apiErrors;

export default class APIErrorsHandlingUtils {
  static handleErrors(error) {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          return this.handle400Errors(data.errors || {});
        case 403:
          return error403Message;
        case 404:
          return error404Message;
        case 500:
          return error500Message;
        default:
          return defaultErrorMessage;
      }
    } else if (error.request) {
      return noResponseErrorMessage;
    } else {
      return defaultErrorMessage;
    }
  }

  static handle400Errors(errorsObject) {
    return Object.values(errorsObject || {});
  }
}
