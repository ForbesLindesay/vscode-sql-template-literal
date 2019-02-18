const query = sql`SELECT * FROM users`;

const table = 'users';
const query2 = sql`SELECT * FROM ${table}`;
