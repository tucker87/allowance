import {db, usersTable} from 'allowance-data/src/db/index'

async function routes (fastify, options) {
    fastify.get('/users', async (request, reply) => {
        reply.header("Access-Control-Allow-Origin", "*");
        reply.header("Access-Control-Allow-Methods", "POST")
        return db.select().from(usersTable)
    })
}
export default routes;