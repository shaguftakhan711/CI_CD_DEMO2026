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
function makeChange() {

    const output = document.getElementById("changeOutput");

    output.innerHTML = `
        <strong>Developer changed the code.</strong>
        <br><br>
        Code is now ready to be committed to Git.
        <br><br>
        <strong>Next step → git commit</strong>
    `;
}