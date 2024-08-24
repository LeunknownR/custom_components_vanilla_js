function getValueFromInput($input) {
	switch ($input.type) {
		case "checkbox":
			return $input.checked;
		default:
			return $input.value;
	}
}

export default function initSwitches() {
	const $form = document.querySelector("form");
	$form.addEventListener("submit", e => {
		e.preventDefault();
		const data = Object.fromEntries(
			Array.from(
				document.querySelectorAll("form input")
			).map(($input) => [$input.name, getValueFromInput($input)])
		)
		console.log(data);
	});
}