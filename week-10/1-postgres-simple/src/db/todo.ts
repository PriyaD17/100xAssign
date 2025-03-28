import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const res= await client.query( 
        `INSERT INTO todos (user_id, title, description) 
         VALUES ($1, $2, $3) 
         RETURNING *;`,
        [userId, title, description]
        );
    
    return res.rows[0]; 
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const res= await client.query(
        `UPDATE todos SET done= true 
        WHERE id= $1 
        RETURNING * ; ` ,
        [todoId]
    );
    return res.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const res = await client.query(
        `SELECT * FROM todos 
        WHERE id= $1;`,
        [userId]
    );
    return res.rows;
}