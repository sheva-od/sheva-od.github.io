$(".button-collapse").sideNav({
	edge: 'right'
});

$(document).ready(function() {
  $('select').material_select();
});

$('.toggle-calendar').dateRangePicker({
  format: 'MMMM D, YYYY',
  showShortcuts: true,
  startOfWeek: 'monday',
	shortcuts : null,
	language:'en',
	customShortcuts:
	[
		{
			name: 'TODAY',
			dates : function()
			{
				var movetodate = moment().toDate();
				return [movetodate];
			}
		},
		{
			name: 'YESTERDAY',
			dates : function()
			{
				var movetodate = moment().add(-1, 'days').toDate();
				return [movetodate];
			}
		},
		{
			name: 'LAST WEEK',
			dates : function()
			{
        var start = moment().subtract(1, 'weeks').startOf('isoWeek').toDate();
				var end =  moment().subtract(1, 'weeks').endOf('isoWeek').toDate();
				return [start,end];
			}
		},
		{
			name: 'LAST MONTH',
			dates : function()
			{
        var start = moment().subtract(1, 'months').date(1).toDate();
				var end = moment().subtract(1, 'months').endOf('month').toDate();
				return [start,end];
			}
		},
		{
			name: 'LAST 3 MONTHS',
			dates : function()
			{
        var start = moment().subtract(3, 'months').date(1).toDate();
				var end = moment().subtract(1, 'months').endOf('month').toDate();
				return [start,end];
			}
		}
	]
});

$('.shortcuts b').text('Select:');
$('.separator-day').text('>');
$('.apply-btn').val('OK');

$('.toggle-menu').on('click', function(e){
  e.preventDefault();
  $('#sidebar').toggleClass('expanded');
});

$('.menu a').on('click', function(e){
  e.preventDefault();
  var $parent = $(this).parent();

  $('.menu li').removeClass('active');
  if(!$parent.hasClass('side-submenu') && $parent.parent().hasClass('menu')) {
    $('.menu li').removeClass('open');
  }
  $parent.addClass('active');
});

$('.side-submenu a').on('click', function(e){
  e.preventDefault();
  var $parent = $(this).parent();
  var $defaultActive = $('.side-submenu-dropdown li:nth-child(2)');

  $parent.toggleClass('open');
  $defaultActive.addClass('active');
  $('#sidebar, li.side-submenu').addClass('visible-overflow');
  if($parent.hasClass('active') && !$parent.hasClass('side-submenu')) {
    $defaultActive.removeClass('active');
  }
});

$('.toggle-filter').on('click', function(e){
  e.preventDefault();

  $('#filter-wrap').toggleClass('open');
});

$('#moreItems').on('click', function(e){
  e.preventDefault();

  if($('.more-items').hasClass('open')) {
    $(this).html('More<i class="material-icons right">arrow_drop_down</i>');
  } else {
    $(this).html('Less<i class="material-icons right up">arrow_drop_down</i>');
  }

  $('.more-items').toggleClass('open');
});
