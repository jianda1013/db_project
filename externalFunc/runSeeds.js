module.exports = (knex, seed) => {
    if (!Array.isArray(seed)) return Promise.reject('SEED_NOT_ARRAY')
    const promise = [];
    for (const item of seed) {
        promise.push(
            knex.seed.run({
                directory: './seeds',
                specific: item
            })
        )
    }
    return Promise.all(promise)
}