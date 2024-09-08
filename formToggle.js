function showGaransi() {
    document.getElementById('formContent').style.display = "block"; // Tampilkan elemen form
    document.getElementById('formContent').innerHTML = `
        <strong>FORM GARANSI</strong><br>
        (SERTAKAN SCREENSHOT DENGAN BUBBLE TERPISAH)<br>
        — app & plan:<br>
        — issue:<br>
        — duration:<br>
        — date purchase:<br>
        — email:<br>
        — pass:<br>
        — profile - pin:
    `;
}

function showHousehold() {
    document.getElementById('formContent').style.display = "block"; // Tampilkan elemen form
    document.getElementById('formContent').innerHTML = `
        <strong>FORM HOUSEHOLD NETFLIX</strong><br>
        (kirim form saat sudah send request otp. bukan sebelum send req otp)<br><br>
        📍 form berlaku selama 10 menit. tidak send setelah 10 menit = janjian ulang <br><br>
        Email : <br>
        Profile : <br><br>
        Kirim proof sudah send code. No proof = no otp.
    `;
}
