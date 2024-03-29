class TestController {
    // [GET] /
    index(req, res) {
        res.send("YAHOO~~~ my API is running 🥳");
    }
}

export default new TestController();