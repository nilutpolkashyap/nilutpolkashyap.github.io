document.addEventListener('DOMContentLoaded', function () {
    const dropdownRows = document.querySelectorAll('.dropdown-row');

    dropdownRows.forEach(function (row) {
        const header = row.querySelector('.row-header');
        header.addEventListener('click', function () {
            const content = row.querySelector('.row-content');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 10px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px";
            }
        });
    });
});
