const express = require('express');
const app = express();
const db = require('./models');

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on 3000`);
    });
db.sequelize.sync().then(() => {
    console.log("Database ");
}).catch((err) => {
    console.error("Error synchronizing database:", err);
});

app.post('/film', async (req, res) => {
    const data = req.body;
    try {
        const film = await db.Film.create(data);
        res.send(film);
    } catch (error) {
        res.send(err);
    }
});

app.get('/film', async (req, res) => {
    try {
        const film = await db.Film.findAll();
        res.send(film);
    } catch (error) {
        res.send(err);
    }
});
   
app.put('/film/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const film = await db.Film.findByPk(id);
        if (!film) {
            return res.status(404).send({ message: 'Film tidak ditemukan' });
        }
        await film.update(data);
        res.send(film);
    } catch (error) {
        res.status(500).send(err);
    }
});

app.delete('/film/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const film = await db.Film.findByPk(id);
        if (!film) {
            return res.status(404).send({ message: 'film tidak ditemukan' });
        }
        await film.destroy();
        res.send({ message: 'Film dihapus' });
    } catch (error) {
        res.status(500).send(err);
    }
});