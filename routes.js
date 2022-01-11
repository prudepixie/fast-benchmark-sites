import express from "express"
const router = express.Router();
import { index, template_compilation_162, template_compilation_160, template_compilation_150, template_compilation_140, template_compilation_130 } from './benchmarks/fast-element/index.js'


router.get('/fast-element', index)
router.get('/fast-element@1.6.2/template-compilation', template_compilation_162)
router.get('/fast-element@1.6.0/template-compilation', template_compilation_160)
router.get('/fast-element@1.5.0/template-compilation', template_compilation_150)
router.get('/fast-element@1.4.0/template-compilation', template_compilation_140)
router.get('/fast-element@1.3.0/template-compilation', template_compilation_130)


export default router