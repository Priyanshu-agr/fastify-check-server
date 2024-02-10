// Import the framework and instantiate it
import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
    logger: true
})

await fastify.register(cors, {
    origin: true
});

// Declare a route
fastify.get('/', async function handler(request, reply) {
    return {
        success: true,
        data: 'Server is up and running',
    }
})

// Run the server!
try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}

