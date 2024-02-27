let selectedRowIndex;
function buyTicket(button) {
    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "block";

    const row = button.closest('.table-row');
    const rows = document.querySelectorAll('.table-row');
    selectedRowIndex = Array.from(rows).indexOf(row);

    document.getElementById("confirmationText").innerText = "Подтверждение";
}

function confirmPurchase() {
    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "none";

    if (typeof selectedRowIndex === 'number' && !isNaN(selectedRowIndex)) {
        const rows = document.querySelectorAll('.table-row');
        const cellsInRow = rows[selectedRowIndex].querySelectorAll('.table-cell');

        cellsInRow.forEach(cell => {
            cell.style.backgroundColor = "gray";
        });

        selectedRowIndex = null;
    }
}

function cancelPurchase() {
    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "none";
}
