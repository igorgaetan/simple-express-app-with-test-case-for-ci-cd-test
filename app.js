import express from 'express';
import { sequelize } from './src/config/database.js';
import './src/models/User.js';
import userRoutes from './src/routes/user.routes.js';

const app = express();
app.get("/", (req, res) => {
    res.render("home");
  });
  
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.json());

app.use('/users', userRoutes);

// On synchronise la DB seulement au démarrage du serveur, pas pendant les tests
export const initDb = async () => {
  await sequelize.sync({ force: true });
};

export default app;
