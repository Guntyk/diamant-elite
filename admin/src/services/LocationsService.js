import { backendApi } from 'api/api';
import APIErrorsHandlingUtils from 'utils/APIErrorsHandlingUtils';

export default class LocationsService {
  static async createLocation(newLocationData) {
    const [error, data] = await backendApi.post('/locations', newLocationData);

    if (error) {
      return { result: null, error: APIErrorsHandlingUtils.handleErrors(error) };
    }

    return { result: data, error: null };
  }

  static async getLocations() {
    const [error, data] = await backendApi.get('/locations');

    if (error) {
      return { result: null, error: APIErrorsHandlingUtils.handleErrors(error) };
    }

    return { result: data, error: null };
  }

  static async updateLocation(id, updatedLocationData) {
    const [error, data] = await backendApi.patch(`/locations/${id}`, updatedLocationData);

    if (error) {
      return { result: null, error: APIErrorsHandlingUtils.handleErrors(error) };
    }

    return { result: data, error: null };
  }

  static async deleteLocation(id) {
    const [error, data] = await backendApi.delete(`/locations/${id}`);

    if (error) {
      return { result: null, error: APIErrorsHandlingUtils.handleErrors(error) };
    }

    return { result: data, error: null };
  }
}
