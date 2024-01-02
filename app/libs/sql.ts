/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-30 11:44:18
 * @Description: 
 */
export const getAllPosts = `SELECT title,createdAt,article_id FROM articles_list ORDER BY createdAt DESC`
export const getAllTags = `SELECT * FROM articles_tags`
export const getTagsCount = `SELECT tag_key as tagName, tag_id as tagId, COUNT(article_id) as articleNums FROM article_list_tag GROUP BY tag_key, tag_id;`
export const getArticlesByTagId = (id: string) => `SELECT tag.article_id, al.title, al.createdAt FROM article_list_tag tag JOIN articles_list al ON tag.article_id = al.article_id WHERE tag_id=${id}`
export const getPostById = (id: string) => `SELECT * FROM articles_list WHERE article_id=${id}`