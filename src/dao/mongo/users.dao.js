import GenericDao from './GenericDao.js';
import User from '../../models/user.model.js';

class UsersDao extends GenericDao {
  constructor() {
    super(User);
  }
}

export default new UsersDao();
