module.exports = {
    read: (req, res) => {
        req.app.get('db')
        .read_products()
        .then(products => res.status(200).send(products))
        .catch(err => console.log(err))
    },

    create: (req, res) => {
        let { name, price, img } = req.body
        req.app.get('db')
        .create_product([name, price, img])
        .then(products => res.status(200).send(products))
        .catch(err => console.log(err))
    },
    delete: (req, res) => {
        let { id } = req.params
        req.app.get('db')
        .delete_product(id)
        .then(() => res.status(200).send("user deleted"))
        .catch(err => console.log(err))
    },
    edit: (req, res) => {
        let { id } = req.params
        let { price, img } = req.body
        req.app.get('db')
        .edit_product([id, price, img])
        .then(products => res.status(200).send(products))
    }
}