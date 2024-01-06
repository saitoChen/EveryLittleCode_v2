import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT as (number | undefined),
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
});

export default async function excuteQuery(query:string, values?:any) {
  try {
    const results = await db.query(query, values);
    return results;
  } catch (error) {
    return { error };
  }
}