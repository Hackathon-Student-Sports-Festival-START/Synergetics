// ```
// Описание:
// 1. getAllMedia: Получение списка всех медиафайлов.
// 2. getMediaById: Получение информации о конкретном медиафайле по его ID.
// 3. uploadMedia: Загрузка нового медиафайла и добавление его информации в базу данных.
// 4. updateMediaById: Обновление информации о медиафайле по его ID (например, метаданные).
// 5. deleteMediaById: Удаление медиафайла из базы данных по его ID.
// ```

const Media = require('../models/media');
const multer = require('multer');
const path = require('path');

// Настройка multer для загрузки файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Получить все медиафайлы
exports.getAllMedia = async (req, res) => {
    try {
        const media = await Media.findAll();
        res.status(200).json(media);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении медиафайлов', error });
    }
};

// Получить медиафайл по ID
exports.getMediaById = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Медиафайл не найден' });
        }
        res.status(200).json(media);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении медиафайла', error });
    }
};

// Загрузить новый медиафайл
exports.uploadMedia = async (req, res) => {
    upload.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: 'Ошибка при загрузке файла', err });
        }
        try {
            const newMedia = await Media.create({
                filename: req.file.filename,
                filePath: req.file.path,
                mimeType: req.file.mimetype
            });
            res.status(201).json(newMedia);
        } catch (error) {
            res.status(500).json({ message: 'Ошибка при сохранении медиафайла в базу данных', error });
        }
    });
};

// Обновить медиафайл по ID (только метаданные)
exports.updateMediaById = async (req, res) => {
    try {
        const updatedMedia = await Media.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedMedia[0] === 0) {
            return res.status(404).json({ message: 'Медиафайл не найден' });
        }
        res.status(200).json({ message: 'Информация о медиафайле обновлена' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении информации о медиафайле', error });
    }
};

// Удалить медиафайл по ID
exports.deleteMediaById = async (req, res) => {
    try {
        const deleted = await Media.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Медиафайл удален' });
        } else {
            res.status(404).json({ message: 'Медиафайл не найден' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при удалении медиафайла', error });
    }
};

