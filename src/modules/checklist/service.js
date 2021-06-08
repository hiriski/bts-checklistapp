import api from 'src/config/api';

class ChecklistService {
  /**
   * Get all checklist.
   * @returns {Promise<AxiosResponse<T>>}
   */
  getAll = async () => {
    return await api.get('/checklist');
  };
}

export default new ChecklistService();
