import express from 'express';
import { vegetablesServices } from '../services/vegetableServices.js';
const route = express.Router();

route.get('/', async (req, res) => {
    const vegetables = await vegetablesServices.getAllVegetables();
    res.json(vegetables);
})

route.get('/:id', async (req, res) => {
    const vegetable = await vegetablesServices.getById(req.params.id)

    if (!vegetable) return res.status(404).json({
        message: 'Vegetable not found'
    })

    res.json(vegetable)
})

export default route;