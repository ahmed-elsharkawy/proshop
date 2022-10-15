import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin User",
        email: 'admin@example.com',
        password: bcrypt.hashSync('123', 10),
        isAdmin: true
    },
    {
        name: "Ahmed Mohamed",
        email: 'ahmed@example.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: "Ali Omar",
        email: 'ali@example.com',
        password: bcrypt.hashSync('123', 10),
    },
]

export default users;