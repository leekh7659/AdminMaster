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

	// 행추가
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

			// 행삭제
		} else if (this.id === 'deleteRowToTable') {
			$(target).find('tbody > tr')[0].remove()
		}
	})
})(jQuery) // End of use strict

const adminPolicyTableElement = `
<tr>
  <td scope="row">1</td>
  <td>
    <button class="btn btn-sm btn-info" aria-label="수정"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="시스템 선택">
      <option selected>해외정보활용</option>
      <option>해외정보활용</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="사용여부">
      <option selected>사용</option>
      <option>사용안함</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="로그인최대시도">
      <option selected>1회</option>
      <option>3회</option>
      <option>5회</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="의무변경">
      <option selected>1개월</option>
      <option>3개월</option>
      <option>6개월</option>
      <option>12개월</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="임시비번유효시간">
      <option selected>1시간</option>
      <option>2시간</option>
      <option>3시간</option>
      <option>4시간</option>
      <option>5시간</option>
      <option>6시간</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="휴면전환">
      <option selected>1개월</option>
      <option>3개월</option>
      <option>6개월</option>
      <option>12개월</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="휴면전환 메일발송">
      <option selected>발송</option>
      <option>미발송</option>
    </select>
  </td>
</tr>
`

const systemManageTableElement = `
<tr>
  <td scope="row">1</td>
  <td>
    <button class="btn btn-sm btn-info" aria-label="수정"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="시스템 선택">
      <option selected>해외정보활용</option>
      <option>해외정보활용</option>
    </select>
  </td>
  <td><input type="text" class="form-control form-control-sm" placeholder="시작IP" aria-label="시작IP"></td>
  <td><input type="text" class="form-control form-control-sm" placeholder="종료IP" aria-label="종료IP"></td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="허용여부">
      <option selected>허용</option>
      <option>허용안함</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="사용여부">
      <option selected>사용</option>
      <option>사용안함</option>
    </select>
  </td>
  <td><input type="text" class="form-control form-control-sm" placeholder="비고" aria-label="비고"></td>
  <td>2022-01-01 13:00</td>
</tr>
`

const addWordTableElement = `
<tr>
<td scope="row">1</td>
<td></td>
<td><input type="text" class="form-control form-control-sm" placeholder="시스템명" aria-label="시스템명"></td>
<td><input type="text" class="form-control form-control-sm" placeholder="시스템명" aria-label="시스템명"></td>
<td>
  <input type="text" class="form-control form-control-sm" placeholder="시스템명" aria-label="시스템명">
</td>
<td>쉼표(,)로 구분</td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="사용여부">
    <option selected>사용</option>
    <option>사용안함</option>
  </select>
</td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="사용여부">
    <option selected>사용</option>
    <option>사용안함</option>
  </select>
</td>
</tr>
`

const codeManageTableElement = `
<tr>
<td scope="row">1</td>
<td></td>
<td><input type="text" class="form-control form-control-sm" placeholder="시스템명" aria-label="시스템명"></td>
<td>
  <button class="btn btn-info btn-icon-split btn-sm mr-2">
    <span class="icon text-white-50">
      <i class="fas fa-search"></i>
    </span>
    <span class="text">상세보기</span>
  </button>
</td>
<td><input type="text" class="form-control form-control-sm" placeholder="코드명 입력" aria-label="코드명 입력"></td>
<td>CD001</td>
<td><input type="text" class="form-control form-control-sm" placeholder="코드설명 입력" aria-label="코드설명 입력"></td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="사용여부">
    <option selected>사용</option>
    <option>사용안함</option>
  </select>
</td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="사용여부">
    <option selected>사용</option>
    <option>사용안함</option>
  </select>
</td>
</tr>
`

const userGroupTableElement = `
<tr>
  <td scope="row">1</td>
  <td>
    <button class="btn btn-sm btn-info" aria-label="수정"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="사용여부">
      <option selected>사용</option>
      <option>사용안함</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="운영관리시스템 선택">
      <option selected>운영관리시스템</option>
      <option>운영관리시스템</option>
    </select>
  </td>
  <td>
    <input type="text" class="form-control form-control-sm" placeholder="권한명 입력" aria-label="권한명 입력">
  </td>
  <td>
  <input type="text" class="form-control form-control-sm" placeholder="권한설명 입력" aria-label="권한설명 입력">
  </td>
  <td>2022-01-01 13:00</td>
  <td>2022-01-01 13:00</td>
</tr>`

const programManageTableElement = `
<tr>
  <td scope="row" class="text-center">
    <button class="btn btn-sm btn-info" aria-label="수정"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm" aria-label="시스템 선택">
      <option selected="">해외정보활용</option>
      <option>해외정보활용</option>
      <option>해외정보활용</option>
      <option>해외정보활용</option>
    </select>
  </td>
  <td>
      <input type="text" class="form-control form-control-sm" placeholder="시스템명 입력" aria-label="시스템명 입력">
  </td>
  <td>
      <input type="text" class="form-control form-control-sm" placeholder="프로그램URL 입력" aria-label="프로그램URL 입력">
  </td>
  <td>
      <input type="text" class="form-control form-control-sm" placeholder="프로그램설명 입력" aria-label="프로그램설명 입력">
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="listCheck10">
      <label class="custom-control-label" for="listCheck10" aria-label="목록옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="detailCheck10">
      <label class="custom-control-label" for="detailCheck10" aria-label="상세옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="assignCheck10">
      <label class="custom-control-label" for="assignCheck10" aria-label="등록옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="modifyCheck10">
      <label class="custom-control-label" for="modifyCheck10" aria-label="수정옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="deleteCheck10">
      <label class="custom-control-label" for="deleteCheck10" aria-label="삭제옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="excelCheck10">
      <label class="custom-control-label" for="excelCheck10" aria-label="엑셀다운옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="downloadCheck10">
      <label class="custom-control-label" for="downloadCheck10" aria-label="파일다운옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="printCheck10">
      <label class="custom-control-label" for="printCheck10" aria-label="출력옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="switchID1" checked="">
      <label class="custom-control-label" for="switchID1" aria-label="switchID1"></label>
    </div>
  </td>
</tr>`
