export default function initCheckboxNoInput() {
	document.querySelectorAll(".checkbox-no-input").forEach(($checkbox) => {
		$checkbox.addEventListener("click", () => {
			try {
				const checked = JSON.parse($checkbox.dataset.checked);
				$checkbox.dataset.checked = !checked;
			}
			catch (err) {
				$checkbox.dataset.checked = false;
			}
		});
	});
}