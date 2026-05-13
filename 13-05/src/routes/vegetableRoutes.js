import express from 'express';
import { vegetablesServices } from '../services/vegetableServices.js';
const route = express.Router();

route.get('/', async (req, res) => {
    const vegetables = await vegetablesServices.getAllVegetables();
    res.json(vegetables);
});

route.get('/:id', async (req, res) => {
    const vegetable = await vegetablesServices.getById(req.params.id)

    if (!vegetable) return res.status(404).json({
        message: 'Vegetable not found'
    })
    res.json(vegetable)
});

route.post('/', async (req, res) => {
    const { name, price, amount } = req.body
    const vegetable = await vegetablesServices.createVegetable(name, price, amount);

    res.status(201).json(vegetable)
});

route.put('/:id', async (req, res) => {
    const { name, price, amount } = req.body
    const vegetable = await vegetablesServices.updateVegetable(req.params.id, name, price, amount);

    if (!vegetable) return res.status(404).json({
        message: 'Vegetable not found'
    })
    res.json(vegetable);
});

route.patch('/:id', async (req, res) => {
    const { name, price, amount } = req.body
    const vegetable = await vegetablesServices.patchVegetable(req.params.id, name, price, amount);

    if (!vegetable) return res.status(404).json({
        message: 'Vegetable not found'
    })
    res.json(vegetable)
});

route.delete('/:id', async (req, res) => {
    const vegetable = await vegetablesServices.deleteVegetables(req.params.id)

    if (!vegetable) return res.status(404).json({
        message: 'Vegetable not found'
    })
    res.status(200).json({
        message: 'Vegetable deleted',
        deleted: vegetable
    })
})

export default route;