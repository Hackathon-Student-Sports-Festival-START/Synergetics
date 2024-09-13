const User = require('#models/user');
const paginate = require('#utils/paginate');
const { hash } = require('#utils/password');

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

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
exports.getUser = async (req, res) => {
    try {
        const userId = req.params.user; // Extract the user ID from the route parameters

        // Fetch the user by ID from the database
        const user = await User.findByPk(userId);

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Render the user edit page and pass the user data to the view
        res.render('pages/admin/user/edit', {
            user,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
};

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
exports.getUserCreate = async (req, res) => {
    try {
        res.render('pages/admin/user/create', {
            // user,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
};

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
exports.postUserCreate = async (req, res) => {
    try {
        const { name, password, email, roleId } = req.body;

        // Hash the password
        const hashedPassword = await hash(password);

        // Create the user
        await User.create({
            name,
            password: hashedPassword,
            email,
            RoleId: roleId, // assuming 'RoleId' is the foreign key to Role model
        });

        res.redirect('/admin/user');
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
};
