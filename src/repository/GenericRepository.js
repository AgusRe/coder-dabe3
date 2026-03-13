export default class GenericRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = () => this.dao.getAll();
  getBy = (params) => this.dao.getBy(params);
  getById = (id) => this.dao.getById(id);
  create = (data) => this.dao.create(data);
  update = (id, data) => this.dao.update(id, data);
  delete = (id) => this.dao.delete(id);
}