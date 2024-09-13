/**
 * @param {import('express').Request} req 
 */
module.exports = (req) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; // Items per page
    const offset = (page - 1) * limit;

    return {
        page,
        limit,
        offset,
    }
}