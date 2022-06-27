const lihatsatu = document.querySelector(`#lihatsatu`);
console.log(lihatsatu);

// lihatsatu.addEventListener(``)
$(document).ready(function () {

	$(`#lihatsatu`).click(function () {
		$(`#target1`).fadeToggle('slow');
	});

	$(`#lihatdua`).click(function () {
		$(`#target2`).fadeToggle('slow');
	});

	$(`#lihattiga`).click(function () {
		$(`#target3`).fadeToggle('slow');
	});

});
