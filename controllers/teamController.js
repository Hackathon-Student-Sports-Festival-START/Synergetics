// ```
// Описание:
// 1. getAllTeams: Получение всех команд из базы данных вместе с информацией о спортсменах в этих командах.
// 2. getTeamById: Получение данных по конкретной команде с помощью её ID, включая информацию о спортсменах.
// 3. createTeam: Создание новой команды и добавление её данных в базу данных.
// 4. updateTeamById: Обновление данных команды по её ID.
// 5. deleteTeamById: Удаление команды из базы данных по её ID.
// ```

const Team = require('../models/team');
const Athlete = require('../models/athlete');

// Получить все команды
exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.findAll({
            include: [Athlete] // Включение информации о спортсменах в командах, если нужно
        });
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении данных команд', error });
    }
};

// Получить данные одной команды по ID
exports.getTeamById = async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id, {
            include: [Athlete] // Включение информации о спортсменах в команде, если нужно
        });
        if (!team) {
            return res.status(404).json({ message: 'Команда не найдена' });
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении данных команды', error });
    }
};

// Создать новую команду
exports.createTeam = async (req, res) => {
    try {
        const newTeam = await Team.create(req.body);
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при создании команды', error });
    }
};

// Обновить данные команды по ID
exports.updateTeamById = async (req, res) => {
    try {
        const updatedTeam = await Team.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedTeam[0] === 0) {
            return res.status(404).json({ message: 'Команда не найдена' });
        }
        res.status(200).json({ message: 'Данные команды обновлены' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении данных команды', error });
    }
};

// Удалить команду по ID
exports.deleteTeamById = async (req, res) => {
    try {
        const deleted = await Team.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Команда удалена' });
        } else {
            res.status(404).json({ message: 'Команда не найдена' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при удалении команды', error });
    }
};