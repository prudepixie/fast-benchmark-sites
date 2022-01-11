import express from "express"
const router = express.Router();
import { template_compilation } from '../benchmarks/fast-element/index.js'

router.get(`/fast-element/template-compilation`, template_compilation)


export default router