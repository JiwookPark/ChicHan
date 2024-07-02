document.addEventListener("DOMContentLoaded", function() {
    // JavaScript 코드가 여기에 작성됩니다.
});

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(page).classList.remove('hidden');
}

function showRegionDetails(region) {
    alert(region + " 지역의 상세 정보를 여기에 표시합니다.");
}

function openCardPage(url) {
    window.location.href = url;
}