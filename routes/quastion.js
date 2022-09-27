const router = require("express").Router(),
    QuastionController = require('../controllers/quastion')

router.get("/", QuastionController.index)
router.get("/:qid", QuastionController.show)
router.put("/:qid/update", QuastionController.update)
router.delete("/:qid/delete", QuastionController.delete)
router.post("/create", QuastionController.create)
module.exports = router