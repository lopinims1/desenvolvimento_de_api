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

    async createVegetable(name, price, amount) {
        const result = await pool.query(
            'INSERT INTO public."vegetables" (name, price, amount) VALUES ($1, $2, $3) RETURNING *',
            [name, price, amount]
        );
        return result.rows[0];
    }

    async updateVegetable(id, name, price, amount) {
        const result = await pool.query(
            'UPDATE public."vegetables" SET name = $1, price = $2, amount = $3 WHERE id = $4 RETURNING *',
            [name, price, amount, id]
        );
        return result.rows[0];
    }

    async patchVegetable(id, name, price, amount) {
        const result = await pool.query(
            'UPDATE public."vegetables" SET name = COALESCE($1, name), price = COALESCE($2, price), amount = COALESCE($3, amount) WHERE id = $4 RETURNING *',
            [name, price, amount, id]
        )
        return result.rows[0];
    }

    async deleteVegetables(id) {
        const result = await pool.query(
            'DELETE FROM public."vegetables" WHERE id = $1 RETURNING *',
            [id]
        )
        return result.rows[0];
    }
};

export const vegetablesServices = new VegetablesServices();