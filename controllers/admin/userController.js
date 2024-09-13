const User = require('#models/user');
const paginate = require('#utils/paginate');

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
exports.getUsers = async (req, res) => {
    try {
        const { page, limit, offset } = paginate(req);

        const { rows: users, count: totalUsers } = await User.findAndCountAll({
            limit,
            offset,
            // include: [Team] // Include teams if necessary
        });

        const totalPages = Math.ceil(totalUsers / limit);

        res.render('pages/admin/user/index', {
            users,
            currentPage: page,
            totalPages,
            totalUsers,
        });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении заявок', error });
    }
};