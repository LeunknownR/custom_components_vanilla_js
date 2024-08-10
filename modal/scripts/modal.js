const OPEN_MODAL_CLASS = "open";
function setupModalToggleButtons($modal) {
	const {modalId} = $modal.dataset;
	const $toggleButtonList = document.querySelectorAll(`.modal-toggle-button[data-modal-id=${modalId}]`)
	$toggleButtonList.forEach(($toggleButton) => {
		$toggleButton.addEventListener("click", () => {
			$modal.classList.toggle(OPEN_MODAL_CLASS)
		});
	});
}
/**
 * @param {Element} $modal 
 */
function setupModalCloseButtons($modal) {
	const $closeButtons = $modal.querySelectorAll(".modal-close-button, .modal-action-button[data-action=close]")
	$closeButtons.forEach(($button) => {
		$button.addEventListener("click", () => {
			$modal.classList.remove(OPEN_MODAL_CLASS);
		});
	});
}
function initModals() {
	const $modals = document.querySelectorAll(".modal");
	$modals.forEach(($modal) => {
		$modal.addEventListener("click", (e) => {
			if (e.target === $modal)
				$modal.classList.remove(OPEN_MODAL_CLASS);
		});
		// Nota: Usando el stopPropagation, detienen la propagación de eventos asociados al padre, para el mismo elemento y para sus hijos
		//$modal.querySelector(".modal-window").addEventListener("click", (e) => {
		//	e.stopPropagation();
		//});
		setupModalToggleButtons($modal);
		setupModalCloseButtons($modal);
	});
}

export default initModals;