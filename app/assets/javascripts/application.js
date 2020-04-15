/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  	window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  	window.GOVUKFrontend.initAll()
})

// MOJ 'Multi select' component
new MOJFrontend.MultiSelect({
	container: $('.moj-multi-select__select-all-container'),
	checkboxes: $('.govuk-checkboxes__input')
});

// MOJ 'Sortable table' component
new MOJFrontend.SortableTable({
	table: $('table')[0]
});

// MOT 'Filter a list' pattern
new MOJFrontend.FilterToggleButton({
    bigModeMediaQuery: '(min-width: 48.063em)',
    startHidden: true,
    toggleButton: {
		container: $('.moj-action-bar__filter'),
		showText: 'Show filter',
		hideText: 'Hide filter',
		classes: 'govuk-button--secondary'
    },
    closeButton: {
		container: $('.moj-filter__header-action'),
		text: 'Close'
    },
    filter: {
      	container: $('.moj-filter')
    }
  });