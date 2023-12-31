export const getAllPosts = `SELECT title,createdAt FROM articles_list ORDER BY createdAt DESC`
export const getAllTags = `SELECT * FROM articles_tags`
export const getTagsCount = `SELECT tag_key as tagName, tag_id as tagId, COUNT(article_id) as articleNums FROM article_list_tag GROUP BY tag_key, tag_id;`