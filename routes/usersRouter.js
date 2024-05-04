// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get(
  '/users',
  findAllUsers,
  sendAllUsers
);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);
usersRouter.get(
  '/users/:id',
  findUserById,
  sendUserById
);
usersRouter.delete(
  "/users/:id", 
  deleteUser, 
  sendUserDeleted
);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;