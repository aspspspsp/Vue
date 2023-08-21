import jwt from 'jsonwebtoken'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event) => {
    const user = event.context?.auth?.user
    if (!user?.id) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        })
    }

    return {
        id: user.id
    }
})
