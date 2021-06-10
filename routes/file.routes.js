const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const FileController = require('../controllers/FileController')

router.post("", authMiddleware, FileController.createDir)
router.post("/upload", authMiddleware, FileController.uploadFile)
router.post("/avatar", authMiddleware, FileController.uploadAvatar)
router.delete("/avatar", authMiddleware, FileController.deleteAvatar)
router.get("", authMiddleware, FileController.getFiles)
router.get("/download", authMiddleware, FileController.downloadFile)
router.delete("/", authMiddleware, FileController.deleteFile)
router.get("/search", authMiddleware, FileController.searchFile)

module.exports = router