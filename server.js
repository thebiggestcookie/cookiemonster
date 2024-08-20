require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', routes);

// Serve static files from the React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
