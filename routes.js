const express = require('express');
const router = express.Router();

const fast_element_benchmarks = require('./benchmarks/fast-element')
  
  
router.get('/fast-element', fast_element_benchmarks.index)
router.get('/fast-element/template-compilation', fast_element_benchmarks.template_compilation)

module.exports = router
  