const disableShortcuts = (p) => {
    if (p) {
        const pr = p.parentNode;
        const ignore = (e) => { e.stopPropagation(); };
        pr.addEventListener('keydown', ignore, true);
        pr.addEventListener('keypress', ignore, true);
        pr.addEventListener('keyup', ignore, true);
    }
}

disableShortcuts(document.getElementById('wmd-input'))

const editor = document.querySelector('div.js-review-editor')
if (editor) {
    const observer = new MutationObserver(() => {
        disableShortcuts(document.querySelector('[id^="wmd-input"]'))
    });
    observer.observe(editor, {subtree: true, childList: true});
}
