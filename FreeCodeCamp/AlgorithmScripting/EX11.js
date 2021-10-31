function convertHTML(str) {
    let symb = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&apos;'
    }
    return str.replace(/[&<>"']/g, m => symb[m])
}

console.log(convertHTML("Schindler's List"))