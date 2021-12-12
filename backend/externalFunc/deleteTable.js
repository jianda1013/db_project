module.exports = (knex, table) => {
    const promise = [];
    for (let i in table) {
        promise.push(knex(table[i]).del())
    }
    return Promise.all(promise)
        .catch(err => { console.log(err); reject(err) })
}