module.exports = {
    read: (req, res) => {
        req.app.get('db')
        .read_products()
        .then(products => res.status(200).send(products))
    },
    create: (req, res) => {
        req.app.get('db')
        .create_product([name, price, img])
        .then(product => res.status(200).send(product))
    }
}