import { backendApi } from 'api/api';
import APIErrorsHandlingUtils from 'utils/APIErrorsHandlingUtils';

export default class TeamService {
  static async getTeam() {
    const [error, data] = await backendApi.get('/employees');

    if (error) {
      return { result: null, error: APIErrorsHandlingUtils.handleErrors(error) };
    }

    return { result: data, error: null };
  }

  static async deleteEmployee(id) {
    const [error, data] = await backendApi.delete(`/employees/${id}`);

    if (error) {
      return { result: null, error: APIErrorsHandlingUtils.handleErrors(error) };
    }

    return { result: data, error: null };
  }
}
