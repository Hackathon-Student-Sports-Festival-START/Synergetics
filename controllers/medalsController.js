// ```
// Описание:
// 1. getAllMedals: Получение списка всех медальных зачетов, включая информацию об университетах.
// 2. getMedalsByUniversityId: Получение медальных зачётов для конкретного университета по его ID.
// 3. createMedal: Добавление нового медального зачета в базу данных.
// 4. updateMedalById: Обновление информации о медальном зачете по его ID.
// 5. deleteMedalById: Удаление медального зачета из базы данных по его ID.
// ```

const Medal = require('../models/medal');
const University = require('../models/university');

// Получить медальный зачет всех университетов
exports.getAllMedals = async (req, res) => {
    try {
        const medals = await Medal.findAll({
            include: [University] // Включение информации об университетах
        });
        res.status(200).json(medals);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении данных медального зачета', error });
    }
};

// Получить медальный зачет конкретного университета по ID
exports.getMedalsByUniversityId = async (req, res) => {
    try {
        const medals = await Medal.findAll({
            where: { universityId: req.params.universityId },
            include: [University]
        });
        if (!medals) {
            return res.status(404).json({ message: 'Медальный зачет не найден для данного университета' });
        }
        res.status(200).json(medals);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении данных медального зачета', error });
    }
};

// Добавить новый медальный результат
exports.createMedal = async (req, res) => {
    try {
        const newMedal = await Medal.create(req.body);
        res.status(201).json(newMedal);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при добавлении медального результата', error });
    }
};

// Обновить медальный результат по ID
exports.updateMedalById = async (req, res) => {
    try {
        const updatedMedal = await Medal.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedMedal[0] === 0) {
            return res.status(404).json({ message: 'Медальный результат не найден' });
        }
        res.status(200).json({ message: 'Медальный результат обновлен' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении медального результата', error });
    }
};

// Удалить медальный результат по ID
exports.deleteMedalById = async (req, res) => {
    try {
        const deleted = await Medal.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Медальный результат удален' });
        } else {
            res.status(404).json({ message: 'Медальный результат не найден' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при удалении медального результата', error });
    }
};

