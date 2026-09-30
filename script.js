function runDemo() {

    const output = document.getElementById("output");

    output.innerHTML = `
        > Starting CI workflow...<br><br>
        ✓ Checking out code...<br>
        ✓ Installing dependencies...<br>
        ✓ Running automated tests...<br>
        ✓ Building application...<br><br>
        ✓ CI Pipeline Successful!
    `;
}