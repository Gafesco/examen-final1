// index.js
import app from './app.js';
import sequelize from './config/database.js';

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000, () => {
      console.log('Servidor corriendo en el puerto 3000');
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

main();
