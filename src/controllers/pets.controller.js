import petsService from '../services/pets.service.js';

const getAllPets = async (req, res) => {
  try {
    const pets = await petsService.getAllPets();
    res.status(200).json({ status: 'success', payload: pets });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const getPetById = async (req, res) => {
  try {
    const { pid } = req.params;
    const pet = await petsService.getPetById(pid);
    if (!pet) return res.status(404).json({ status: 'error', error: 'Pet not found' });
    res.status(200).json({ status: 'success', payload: pet });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const createPet = async (req, res) => {
  try {
    const { name, specie, birthDate } = req.body;
    if (!name || !specie) {
      return res.status(400).json({ status: 'error', error: 'Name and specie are required' });
    }
    const pet = await petsService.createPet({ name, specie, birthDate });
    res.status(201).json({ status: 'success', payload: pet });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const createPetWithImage = async (req, res) => {
  try {
    const { name, specie, birthDate } = req.body;
    const image = req.file ? req.file.path : '';
    if (!name || !specie) {
      return res.status(400).json({ status: 'error', error: 'Name and specie are required' });
    }
    const pet = await petsService.createPet({ name, specie, birthDate, image });
    res.status(201).json({ status: 'success', payload: pet });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const updatePet = async (req, res) => {
  try {
    const { pid } = req.params;
    const updated = await petsService.updatePet(pid, req.body);
    res.status(200).json({ status: 'success', payload: updated });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const deletePet = async (req, res) => {
  try {
    const { pid } = req.params;
    await petsService.deletePet(pid);
    res.status(200).json({ status: 'success', message: 'Pet deleted' });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

export default { getAllPets, getPetById, createPet, createPetWithImage, updatePet, deletePet };
