export default class PetDto {
  constructor(data) {
    this.name = data.name;
    this.specie = data.specie;
    this.birthDate = data.birthDate || null;
    this.adopted = false;
    this.owner = null;
    this.image = data.image || '';
  }
}
