import express from 'express';
import { fruitServices } from '../services/fruitServices.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const fruits = await fruitServices.getAllFruits();
    res.json(fruits);
});

router.get('/:id', async (req, res) => {
    const fruit = await fruitServices.getById(req.params.id)

    if (!fruit) return res.status(404).json({
        message: 'Fruit not found'
    })

    res.json (fruit)
});

export default router;