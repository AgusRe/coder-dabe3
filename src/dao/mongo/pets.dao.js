import GenericDao from './GenericDao.js';
import Pet from '../../models/pet.model.js';

class PetsDao extends GenericDao {
  constructor() {
    super(Pet);
  }
}

export default new PetsDao();
