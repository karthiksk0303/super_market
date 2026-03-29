// Players need to call checkAccess() in the console with the right mathematical key
function checkAccess(key) {
    const val = (key * 0x1337) ^ 0xDEADBEEF;
    if (val === 213511) {
        console.log("Access Granted. Decoding Flag...");
        // This is a Base64 + Caesar Cipher combo
        const part1 = "UFNOQUNFVE"; // PSNACET
        const part2 = "{HAHAHAHAA_F4ke_f14g_bu66y}";
        console.log("REAL FLAG: " + part1 + part2);
    } else {
        console.log("Access Denied. Try harder.");
    }
}
console.log("System Security: Active. Use dev-tools to inspect the checkout logic.");
