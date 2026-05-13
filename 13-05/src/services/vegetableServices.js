import pool from '../config/db.js'

class VegetablesServices {
    async getAllVegetables() {
        const result = await pool.query(
            'SELECT * FROM public."vegetables"'
        );
        return result.rows
    };

    async getById(id) {
        const result = await pool.query(
            'SELECT * FROM public."vegetables" WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }
};

export const vegetablesServices = new VegetablesServices();