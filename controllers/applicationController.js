// ```
// Описание:
// 1. getAllApplications: Получение списка всех заявок, включая информацию о командах.
// 2. getApplicationById: Получение информации по конкретной заявке с помощью её ID, включая информацию о команде.
// 3. createApplication: Создание новой заявки и добавление её данных в базу данных.
// 4. updateApplicationById: Обновление информации о заявке по её ID.
// 5. deleteApplicationById: Удаление заявки из базы данных по её ID.
// 6. updateApplicationStatusById: Обновление статуса заявки по её ID.
// ```

const Application = require('../models/application');
const Team = require('../models/team');

// Получить все заявки
exports.getAllApplications = async (req, res) => {
    try {
        const applications = await Application.findAll({
            include: [Team] // Включение информации о командах
        });
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении заявок', error });
    }
};

// Получить данные одной заявки по ID
exports.getApplicationById = async (req, res) => {
    try {
        const application = await Application.findByPk(req.params.id, {
            include: [Team]
        });
        if (!application) {
            return res.status(404).json({ message: 'Заявка не найдена' });
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении заявки', error });
    }
};

// Создать новую заявку
exports.createApplication = async (req, res) => {
    try {
        const newApplication = await Application.create(req.body);
        res.status(201).json(newApplication);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при создании заявки', error });
    }
};

// Обновить данные заявки по ID
exports.updateApplicationById = async (req, res) => {
    try {
        const updatedApplication = await Application.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedApplication[0] === 0) {
            return res.status(404).json({ message: 'Заявка не найдена' });
        }
        res.status(200).json({ message: 'Данные заявки обновлены' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении данных заявки', error });
    }
};

// Удалить заявку по ID
exports.deleteApplicationById = async (req, res) => {
    try {
        const deleted = await Application.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Заявка удалена' });
        } else {
            res.status(404).json({ message: 'Заявка не найдена' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при удалении заявки', error });
    }
};

// Обновить статус заявки по ID
exports.updateApplicationStatusById = async (req, res) => {
    try {
        const updatedApplication = await Application.update(
            { status: req.body.status },
            { where: { id: req.params.id } }
        );
        if (updatedApplication[0] === 0) {
            return res.status(404).json({ message: 'Заявка не найдена' });
        }
        res.status(200).json({ message: 'Статус заявки обновлен' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении статуса заявки', error });
    }
};
