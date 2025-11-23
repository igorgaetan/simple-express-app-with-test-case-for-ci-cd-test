import app, { initDb } from './app.js';

const PORT = 3000;

const start = async () => {
  await initDb();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

start();
