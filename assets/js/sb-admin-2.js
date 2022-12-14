/** @format */

;(function ($) {
	'use strict' // Start of use strict

	// Toggle the side navigation
	$('#sidebarToggle, #sidebarToggleTop').on('click', function (e) {
		$('body').toggleClass('sidebar-toggled')
		$('.sidebar').toggleClass('toggled')
		if ($('.sidebar').hasClass('toggled')) {
			$('.sidebar .collapse').collapse('hide')
		}
	})

	// Close any open menu accordions when window is resized below 768px
	$(window).resize(function () {
		if ($(window).width() < 768) {
			$('.sidebar .collapse').collapse('hide')
		}
	})

	// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
	$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
		if ($(window).width() > 768) {
			var e0 = e.originalEvent,
				delta = e0.wheelDelta || -e0.detail
			this.scrollTop += (delta < 0 ? 1 : -1) * 30
			e.preventDefault()
		}
	})

	// Scroll to top button appear
	$(document).on('scroll', function () {
		var scrollDistance = $(this).scrollTop()
		if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn()
		} else {
			$('.scroll-to-top').fadeOut()
		}
	})

	// Smooth scrolling using jQuery easing
	$(document).on('click', 'a.scroll-to-top', function (e) {
		var $anchor = $(this)
		$('html, body')
			.stop()
			.animate(
				{
					scrollTop: $($anchor.attr('href')).offset().top,
				},
				1000,
				'easeInOutExpo'
			)
		e.preventDefault()
	})

	// Custion Script
	// Table Checkbox Select All
	$(document).on('change', '[type="checkbox"].check-select-all', function (e) {
		let table = e.currentTarget.closest('table')
		if (e.currentTarget.checked) {
			$(table).find('.custom-checkbox input[type="checkbox"]').prop('checked', true)
		} else {
			$(table).find('.custom-checkbox input[type="checkbox"]').prop('checked', false)
		}
	})

	// ToolTip
	$('[data-toggle="tooltip"]').tooltip()

	// WorkStatus [work | system] Switch Toggle
	$(document).on('click', '.ct__switch--handle', function (e) {
		let target = e.currentTarget.dataset.target
		let checked = e.target.dataset.statusSystem === 'true' ? true : false
		$(target).prop('checked', checked)
		$('.ct__switch--handle').removeClass('active')
		$(e.target).addClass('active')
	})

	$(document).on('click', '.ct__switch--admin input', function (e) {
		let checked = e.currentTarget.checked
		let target = $(`.ct__switch--handle[data-status-system="${checked}"]`)

		$('.ct__switch--handle').removeClass('active')
		$(target).addClass('active')
	})

	// Stepper
	$(document).on('click', 'button[data-stepper]', function () {
		let { stepper } = this.dataset
		let target = $(this).closest('.ct__stepper').find('input')
		if (stepper === 'plus') $(target).val(+$(target).val() + 1)
		else if (stepper === 'minus' && +$(target).val() !== 0) $(target).val(+$(target).val() - 1)
	})

	// Tabs
	$(document).on('click', '#agreementTab .nav-link', function () {
		$('#agreementTab .nav-link').tab('dispose')
		$(this).tab('show')
	})

	$(document).on('click', '.nav-link-close', function () {
		$(this).closest('.nav-item').remove()

		if (!$('#subPageTabs').find('.nav-link').length) $('#subPageTabs').remove()
		else $('#subPageTabs').find('.nav-link').eq(0).tab('show')
	})

	$(document).on('click', '.nav-link-close-all ', function () {
		$('#subPageTabs').remove()
	})

	// ?????????
	$(document).on('click', '#insertRowToTable, #deleteRowToTable', function () {
		let target = this.dataset.controls
    
		if (this.id === 'insertRowToTable') {
      let trElement = null

			if (target === '#programManageTable') trElement = programManageTableElement
      else if (target === '#userGroupTable') trElement = userGroupTableElement
      else if (target === '#codeManageTable') trElement = codeManageTableElement
      else if (target === '#addWordTable') trElement = addWordTableElement
      else if (target === '#systemManageTable') trElement = systemManageTableElement
      else if (target === '#adminPolicyTable') trElement = adminPolicyTableElement


      $(target).find('tbody').prepend(trElement)

			// ?????????
		} else if (this.id === 'deleteRowToTable') {
			$(target).find('tbody > tr')[0].remove()
		}
	})
})(jQuery) // End of use strict

const adminPolicyTableElement = `
<tr>
  <td scope="row">1</td>
  <td>
    <button class="btn btn-sm btn-info" aria-label="??????"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????? ??????">
      <option selected>??????????????????</option>
      <option>??????????????????</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????????">
      <option selected>??????</option>
      <option>????????????</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="?????????????????????">
      <option selected>1???</option>
      <option>3???</option>
      <option>5???</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????????">
      <option selected>1??????</option>
      <option>3??????</option>
      <option>6??????</option>
      <option>12??????</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????????????????????">
      <option selected>1??????</option>
      <option>2??????</option>
      <option>3??????</option>
      <option>4??????</option>
      <option>5??????</option>
      <option>6??????</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????????">
      <option selected>1??????</option>
      <option>3??????</option>
      <option>6??????</option>
      <option>12??????</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="???????????? ????????????">
      <option selected>??????</option>
      <option>?????????</option>
    </select>
  </td>
</tr>
`

const systemManageTableElement = `
<tr>
  <td scope="row">1</td>
  <td>
    <button class="btn btn-sm btn-info" aria-label="??????"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????? ??????">
      <option selected>??????????????????</option>
      <option>??????????????????</option>
    </select>
  </td>
  <td><input type="text" class="form-control form-control-sm" placeholder="??????IP" aria-label="??????IP"></td>
  <td><input type="text" class="form-control form-control-sm" placeholder="??????IP" aria-label="??????IP"></td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????????">
      <option selected>??????</option>
      <option>????????????</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????????">
      <option selected>??????</option>
      <option>????????????</option>
    </select>
  </td>
  <td><input type="text" class="form-control form-control-sm" placeholder="??????" aria-label="??????"></td>
  <td>2022-01-01 13:00</td>
</tr>
`

const addWordTableElement = `
<tr>
<td scope="row">1</td>
<td></td>
<td><input type="text" class="form-control form-control-sm" placeholder="????????????" aria-label="????????????"></td>
<td><input type="text" class="form-control form-control-sm" placeholder="????????????" aria-label="????????????"></td>
<td>
  <input type="text" class="form-control form-control-sm" placeholder="????????????" aria-label="????????????">
</td>
<td>??????(,)??? ??????</td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="????????????">
    <option selected>??????</option>
    <option>????????????</option>
  </select>
</td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="????????????">
    <option selected>??????</option>
    <option>????????????</option>
  </select>
</td>
</tr>
`

const codeManageTableElement = `
<tr>
<td scope="row">1</td>
<td></td>
<td><input type="text" class="form-control form-control-sm" placeholder="????????????" aria-label="????????????"></td>
<td>
  <button class="btn btn-info btn-icon-split btn-sm mr-2">
    <span class="icon text-white-50">
      <i class="fas fa-search"></i>
    </span>
    <span class="text">????????????</span>
  </button>
</td>
<td><input type="text" class="form-control form-control-sm" placeholder="????????? ??????" aria-label="????????? ??????"></td>
<td>CD001</td>
<td><input type="text" class="form-control form-control-sm" placeholder="???????????? ??????" aria-label="???????????? ??????"></td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="????????????">
    <option selected>??????</option>
    <option>????????????</option>
  </select>
</td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="????????????">
    <option selected>??????</option>
    <option>????????????</option>
  </select>
</td>
</tr>
`

const userGroupTableElement = `
<tr>
  <td scope="row">1</td>
  <td>
    <button class="btn btn-sm btn-info" aria-label="??????"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????????">
      <option selected>??????</option>
      <option>????????????</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="????????????????????? ??????">
      <option selected>?????????????????????</option>
      <option>?????????????????????</option>
    </select>
  </td>
  <td>
    <input type="text" class="form-control form-control-sm" placeholder="????????? ??????" aria-label="????????? ??????">
  </td>
  <td>
  <input type="text" class="form-control form-control-sm" placeholder="???????????? ??????" aria-label="???????????? ??????">
  </td>
  <td>2022-01-01 13:00</td>
  <td>2022-01-01 13:00</td>
</tr>`

const programManageTableElement = `
<tr>
  <td scope="row" class="text-center">
    <button class="btn btn-sm btn-info" aria-label="??????"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm" aria-label="????????? ??????">
      <option selected="">??????????????????</option>
      <option>??????????????????</option>
      <option>??????????????????</option>
      <option>??????????????????</option>
    </select>
  </td>
  <td>
      <input type="text" class="form-control form-control-sm" placeholder="???????????? ??????" aria-label="???????????? ??????">
  </td>
  <td>
      <input type="text" class="form-control form-control-sm" placeholder="????????????URL ??????" aria-label="????????????URL ??????">
  </td>
  <td>
      <input type="text" class="form-control form-control-sm" placeholder="?????????????????? ??????" aria-label="?????????????????? ??????">
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="listCheck10">
      <label class="custom-control-label" for="listCheck10" aria-label="???????????? ??????/??????"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="detailCheck10">
      <label class="custom-control-label" for="detailCheck10" aria-label="???????????? ??????/??????"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="assignCheck10">
      <label class="custom-control-label" for="assignCheck10" aria-label="???????????? ??????/??????"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="modifyCheck10">
      <label class="custom-control-label" for="modifyCheck10" aria-label="???????????? ??????/??????"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="deleteCheck10">
      <label class="custom-control-label" for="deleteCheck10" aria-label="???????????? ??????/??????"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="excelCheck10">
      <label class="custom-control-label" for="excelCheck10" aria-label="?????????????????? ??????/??????"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="downloadCheck10">
      <label class="custom-control-label" for="downloadCheck10" aria-label="?????????????????? ??????/??????"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="printCheck10">
      <label class="custom-control-label" for="printCheck10" aria-label="???????????? ??????/??????"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="switchID1" checked="">
      <label class="custom-control-label" for="switchID1" aria-label="switchID1"></label>
    </div>
  </td>
</tr>`
