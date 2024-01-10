/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-30 10:29:34
 * @Description: 
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        'MYSQL_HOST': '106.75.184.221',
        'MYSQL_PORT': '3306',
        'MYSQL_DATABASE': 'everylittlecode',
        'MYSQL_USER': 'root',
        'MYSQL_PASSWORD': '123456',
        'BASE': 'http://localhost:3000'
    },
}

module.exports = nextConfig
