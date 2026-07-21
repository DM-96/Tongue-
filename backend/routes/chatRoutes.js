const express = require("express");

const router = express.Router();

// Importiamo controller
const chatController = require("../controllers/chatController");

// Endpoint POST /api/chat
router.post("/", chatController);

module.exports = router;
