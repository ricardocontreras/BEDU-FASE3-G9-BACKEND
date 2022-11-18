const permission = (...allowedRoles) => {
    return (req, res, next) => {
        const { user } = req;
        if (user && allowedRoles.includes(user.type)) {
            console.log(user);
            return next();
        }
        return res.status(403).json({ message: 'Forbidden' });
    };
}

module.exports = permission;