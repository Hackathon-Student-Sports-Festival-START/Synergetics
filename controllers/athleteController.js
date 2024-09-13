// ```
// Описание:
// 1. getAllAthletes: Получение всех спортсменов из базы данных.
// 2. getAthleteById: Получение данных по конкретному спортсмену с помощью его ID.
// 3. createAthlete: Создание нового спортсмена и добавление его данных в базу данных.
// 4. updateAthleteById: Обновление данных спортсмена по его ID.
// 5. deleteAthleteById: Удаление спортсмена из базы данных по его ID.
// ```

const Athlete = require('../models/athlete');

// Получить всех спортсменов
exports.getAllAthletes = async (req, res) => {
    try {
        const athletes = await Athlete.findAll();
        res.status(200).json(athletes);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении данных спортсменов', error });
    }
};

// Получить данные одного спортсмена по ID
exports.getAthleteById = async (req, res) => {
    try {
        const athlete = await Athlete.findByPk(req.params.id);
        if (!athlete) {
            return res.status(404).json({ message: 'Спортсмен не найден' });
        }
        res.status(200).json(athlete);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении данных спортсмена', error });
    }
};

// Создать нового спортсмена
exports.createAthlete = async (req, res) => {
    try {
        const newAthlete = await Athlete.create(req.body);
        res.status(201).json(newAthlete);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при создании спортсмена', error });
    }
};

// Обновить данные спортсмена по ID
exports.updateAthleteById = async (req, res) => {
    try {
        const updatedAthlete = await Athlete.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedAthlete[0] === 0) {
            return res.status(404).json({ message: 'Спортсмен не найден' });
        }
        res.status(200).json({ message: 'Данные спортсмена обновлены' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении данных спортсмена', error });
    }
};

// Удалить спортсмена по ID
exports.deleteAthleteById = async (req, res) => {
    try {
        const deleted = await Athlete.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Спортсмен удален' });
        } else {
            res.status(404).json({ message: 'Спортсмен не найден' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при удалении спортсмена', error });
    }
};
