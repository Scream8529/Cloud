const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const FileController = require('../controllers/FileController')

router.post("/files", authMiddleware, FileController.createDir)
router.get("/files", authMiddleware, FileController.getFiles)

module.exports = router