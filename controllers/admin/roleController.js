const Role = require('#models/role');
const paginate = require('#utils/paginate');

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
exports.getRoles = async (req, res) => {
    try {
        const { page, limit, offset } = paginate(req);

        const { rows: roles, count: totalRoles } = await Role.findAndCountAll({
            limit,
            offset,
            // include: [Team] // Include teams if necessary
        });

        const totalPages = Math.ceil(totalRoles / limit);

        res.render('pages/admin/role/index', {
            roles,
            currentPage: page,
            totalPages,
            totalRoles,
        });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении заявок', error });
    }
};

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
exports.getRole = async (req, res) => {
    try {
        const roleId = req.params.role; // Extract the role ID from the route parameters

        // Fetch the role by ID from the database
        const role = await Role.findByPk(roleId);

        // Check if the role exists
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }

        // Render the role edit page and pass the role data to the view
        res.render('pages/admin/role/edit', {
            role,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching role data', error });
    }
};

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
exports.getRoleCreate = async (req, res) => {
    try {
        res.render('pages/admin/role/create', {
            // role,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching role data', error });
    }
};

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
exports.postRoleCreate = async (req, res) => {
    try {
        const { name } = req.body;

        // Create the role
        await Role.create({
            name,
        });

        res.redirect('/admin/role');
    } catch (error) {
        res.status(500).json({ message: 'Error fetching role data', error });
    }
};
