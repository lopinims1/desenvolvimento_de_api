import pool from '../database/db.js';

class FruitServices {
     async getAllFruits() {
        const result = await pool.query('SELECT * FROM public."miguel-lopes_frutas"');
        return result.rows;
    } 

    async getById(id) {
        const result = await pool.query(
            'SELECT * FROM public."miguel-lopes_frutas" WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }
};

export const fruitServices = new FruitServices();