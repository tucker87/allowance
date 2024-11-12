import Fastify from 'fastify'
import { fastifySwagger } from '@fastify/swagger'
import users from './users/users'

const fastify = Fastify({
    logger: true
})

fastify.register(fastifySwagger, {
    openapi: {
        openapi: '3.0.0',
        info: {
            title: 'Allowance Api',
            description: 'Fastify swagger API',
            version: '0.1.0'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            }
        ],
        tags: [
            {name: 'user', description: 'User related end-points'}
        ],
        components: {
            // securitySchemes: {
            //     apiKey: {
            //         type: 'apiKey',
            //         name: 'apiKey',
            //         in: 'header'
            //     }
            // }
        }
    }
})

fastify.get('/swagger', () => fastify.swagger())


fastify.register(users)

const start = async () => {
    try {
        await fastify.listen({port: 3000})
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()