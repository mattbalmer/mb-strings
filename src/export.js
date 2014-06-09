    // === Export ===
    if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = formatString;
    }
    else {
        window.mb = window.mb || {};
        window.mb.formatString = formatString;
    }
