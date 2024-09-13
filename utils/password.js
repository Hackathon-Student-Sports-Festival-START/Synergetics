const bcrypt = require('bcrypt');

// Number of salt rounds for hashing (you can adjust this value)
const SALT_ROUNDS = 12;

/**
 * Hashes a plain text password.
 * 
 * @param {string} password - The plain text password to hash.
 * 
 * @returns {Promise<string>} - The hashed password.
 */
exports.hash = async (password) => {
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

/**
 * Checks if a plain text password matches a given hashed password.
 * 
 * @param {string} password - The plain text password.
 * @param {string} passwordHash - The hashed password.
 * 
 * @returns {Promise<boolean>} - True if the password matches the hash, otherwise false.
 */
exports.check = async (password, passwordHash) => {
    try {
        const match = await bcrypt.compare(password, passwordHash);

        return match;
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
};
