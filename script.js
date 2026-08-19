function toggleBooks(btn) {
    let list = btn.nextElementSibling;

    if (list.style.display === "block") {
        list.style.display = "none";
        btn.innerText = "Explore";
    } else {
        list.style.display = "block";
        btn.innerText = "Hide";
    }
}