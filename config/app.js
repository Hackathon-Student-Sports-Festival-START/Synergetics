const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const User = require('../models/user');

const app = express();
app.use(bodyParser.json());

// Синхронизация модели с базой данных
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// Создание нового пользователя
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Получение списка пользователей
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Получение конкретного пользователя по ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Обновление информации пользователя
app.patch('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    Object.assign(user, req.body);
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Удаление пользователя
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    await user.destroy();
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// Создание новой команды
app.post('/teams', async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).send(team);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Получение списка команд
app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.findAll();
    res.status(200).send(teams);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Получение конкретной команды по ID
app.get('/teams/:id', async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) {
      return res.status(404).send();
    }
    res.status(200).send(team);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Обновление информации команды
app.patch('/teams/:id', async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) {
      return res.status(404).send();
    }
    Object.assign(team, req.body);
    await team.save();
    res.status(200).send(team);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Удаление команды
app.delete('/teams/:id', async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) {
      return res.status(404).send();
    }
    await team.destroy();
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});