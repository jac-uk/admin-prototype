const express = require('express')
const router = express.Router()

// compare arrays function
//const arraysAreEqual = function(a, b){
//	return JSON.stringify(a) == JSON.stringify(b)
//  }

// Add your routes here - above the module.exports line

router.all('/view-process-applications/exercise-ended/application-jac00105-router', function (req, res) {
	
	let applicationJac00105 = req.session.data['application-jac00105'] || []
	
	// To make only one option to be checked
	// e.g. if (arraysAreEqual(applicationJac00105, ['jac00105-abc0001'])) {

	// 'includes' means if it includes that value at all, it doesnt care what else is checked

	if (applicationJac00105.includes('jac00105-abc0001')) {
		res.redirect('applied-jac00105-abc0001')
	} else if (applicationJac00105.includes('jac00105-abc0002') && applicationJac00105.includes('jac00105-abc0003') && applicationJac00105.includes('jac00105-abc0004') && applicationJac00105.includes('jac00105-abc0005')) {
		res.redirect('bulk-status')
	} else if (applicationJac00105.includes('jac00105-abc0006')) {
		res.redirect('applied-jac00105-abc0006')
	} else {
		res.redirect('applied')
	}
})

module.exports = router