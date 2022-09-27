const router = require("express").Router(),
    AnswerRouter = require('./answer'),
    QuastionRouter = require('./quastion')

router.use('/answers', AnswerRouter)
router.use('/quastions', QuastionRouter)
    // router.use('/tickets', TicketRouter)
    // router.use('/decree', DecreeRouter)

module.exports = router