// ```
// Описание:
// 1. getAllSchedules: Получение списка всех расписаний игр.
// 2. getScheduleById: Получение информации по конкретному расписанию игры с помощью его ID.
// 3. createSchedule: Создание нового расписания игры и добавление его данных в базу данных.
// 4. updateScheduleById: Обновление информации о расписании игры по его ID.
// 5. deleteScheduleById: Удаление расписания игры из базы данных по его ID.
// ```

const Schedule = require('../models/schedule');

// Получить все расписание
exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.findAll();
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении расписания игр', error });
    }
};

// Получить расписание по ID игры
exports.getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findByPk(req.params.id);
        if (!schedule) {
            return res.status(404).json({ message: 'Расписание не найдено' });
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении расписания игры', error });
    }
};

// Создать новое расписание игры
exports.createSchedule = async (req, res) => {
    try {
        const newSchedule = await Schedule.create(req.body);
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при создании расписания игры', error });
    }
};

// Обновить расписание игры по ID
exports.updateScheduleById = async (req, res) => {
    try {
        const updatedSchedule = await Schedule.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedSchedule[0] === 0) {
            return res.status(404).json({ message: 'Расписание игры не найдено' });
        }
        res.status(200).json({ message: 'Расписание игры обновлено' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении расписания игры', error });
    }
};

// Удалить расписание игры по ID
exports.deleteScheduleById = async (req, res) => {
    try {
        const deleted = await Schedule.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Расписание игры удалено' });
        } else {
            res.status(404).json({ message: 'Расписание игры не найдено' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при удалении расписания игры', error });
    }
};

