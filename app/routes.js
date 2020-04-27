const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/view-process-applications/v1/stages/application-jac00105-router', function (req, res) {
	
	let applicationJac00105 = req.session.data['application-jac00105'] || []
	
	if (applicationJac00105.includes('jac00105-abc0001')) {
		res.redirect('/view-process-applications/v1/stages/applied-jac00105-abc0001')
	} else if (applicationJac00105.includes('jac00105-abc0002') && applicationJac00105.includes('jac00105-abc0003') && applicationJac00105.includes('jac00105-abc0004') && applicationJac00105.includes('jac00105-abc0005')) {
		res.redirect('/view-process-applications/v1/stages/bulk-status')
    } else if (applicationJac00105.includes('jac00105-abc0006')) {
		res.redirect('/view-process-applications/v1/stages/applied-jac00105-abc0006')
    } else {
		res.redirect('/view-process-applications/v1/stages/applied')
	}
})

module.exports = router
