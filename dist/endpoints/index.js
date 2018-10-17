"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
// import generateUser from './authenticate';
var postLogin_1 = __importDefault(require("./postLogin"));
var authenticate_1 = __importDefault(require("./authenticate"));
var registerUser_1 = __importDefault(require("./registerUser"));
var express_1 = require("express");
var router = express_1.Router();
router.use(registerUser_1.default);
router.use(postLogin_1.default);
router.use(authenticate_1.default);
exports.default = router;
