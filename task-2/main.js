
function submit() {
    const input = document.getElementById('fileInput');
    const fileSize = input.files[0].size;
    const fileSizeKB = Math.round(fileSize / 1024);
    document.getElementById('fileSize').textContent = 'File size: ' + fileSizeKB + ' KB';
}