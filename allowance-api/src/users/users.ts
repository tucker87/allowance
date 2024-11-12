import {db, usersTable} from '../db'

async function routes (fastify, options) {
    fastify.get('/users', async (request, reply) => {
        reply.header("Access-Control-Allow-Origin", "*");
        reply.header("Access-Control-Allow-Methods", "POST")
        return db.select().from(usersTable)
    })
}
export default routes;