const router = require("express").Router(),
    DecreeController = require('../controllers/decree')

    router.get("/:texx/:fromyear/:toyear/:legtitle", DecreeController.search)
    router.get("/findme", DecreeController.findall)
    router.post("/create", DecreeController.create)
module.exports = router