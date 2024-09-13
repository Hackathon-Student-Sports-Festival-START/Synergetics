// ```
// Описание:
// 1. getAllCompetitions: Получение списка всех соревнований.
// 2. getCompetitionById: Получение информации по конкретному соревнованию с помощью его ID.
// 3. createCompetition: Создание нового соревнования и добавление его данных в базу данных.
// 4. updateCompetitionById: Обновление информации о соревновании по его ID.
// 5. deleteCompetitionById: Удаление соревнования из базы данных по его ID.
// ```


const Competition = require('../models/competition');

// Получить все соревнования
exports.getAllCompetitions = async (req, res) => {
    try {
        const competitions = await Competition.findAll();
        res.status(200).json(competitions);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении данных соревнований', error });
    }
};

// Получить данные одного соревнования по ID
exports.getCompetitionById = async (req, res) => {
    try {
        const competition = await Competition.findByPk(req.params.id);
        if (!competition) {
            return res.status(404).json({ message: 'Соревнование не найдено' });
        }
        res.status(200).json(competition);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении данных соревнования', error });
    }
};

// Создать новое соревнование
exports.createCompetition = async (req, res) => {
    try {
        const newCompetition = await Competition.create(req.body);
        res.status(201).json(newCompetition);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при создании соревнования', error });
    }
};

// Обновить данные соревнования по ID
exports.updateCompetitionById = async (req, res) => {
    try {
        const updatedCompetition = await Competition.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedCompetition[0] === 0) {
            return res.status(404).json({ message: 'Соревнование не найдено' });
        }
        res.status(200).json({ message: 'Данные соревнования обновлены' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении данных соревнования', error });
    }
};

// Удалить соревнование по ID
exports.deleteCompetitionById = async (req, res) => {
    try {
        const deleted = await Competition.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Соревнование удалено' });
        } else {
            res.status(404).json({ message: 'Соревнование не найдено' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при удалении соревнования', error });
    }
};
