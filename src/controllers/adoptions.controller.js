import adoptionsService from '../services/adoptions.service.js';

const getAllAdoptions = async (req, res) => {
  try {
    const adoptions = await adoptionsService.getAllAdoptions();
    res.status(200).json({ status: 'success', payload: adoptions });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const getAdoptionById = async (req, res) => {
  try {
    const { aid } = req.params;
    const adoption = await adoptionsService.getAdoptionById(aid);
    if (!adoption) return res.status(404).json({ status: 'error', error: 'Adoption not found' });
    res.status(200).json({ status: 'success', payload: adoption });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const createAdoption = async (req, res) => {
  try {
    const { uid, pid } = req.params;
    const adoption = await adoptionsService.createAdoption(uid, pid);
    res.status(201).json({ status: 'success', payload: adoption });
  } catch (err) {
    const code = err.message.includes('not found') ? 404 : 400;
    res.status(code).json({ status: 'error', error: err.message });
  }
};

export default { getAllAdoptions, getAdoptionById, createAdoption };
