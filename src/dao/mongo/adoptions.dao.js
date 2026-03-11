import GenericDao from './GenericDao.js';
import Adoption from '../../models/adoption.model.js';

class AdoptionsDao extends GenericDao {
  constructor() {
    super(Adoption);
  }
}

export default new AdoptionsDao();
