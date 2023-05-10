module.exports = {
    register: async ( req, res) => {
        console.log("register")
        res.status(200).send("registered")
    },
    login: async ( req, res) => {
        console.log("login")
        res.status(200).send("logged in")
    }
}