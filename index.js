const disableShortcuts = (p) => {
    if (p) {
        const pr = p.parentNode;
        const ignore = (e) => { e.stopPropagation(); };
        pr.addEventListener('keydown', ignore, true);
        pr.addEventListener('keypress', ignore, true);
        pr.addEventListener('keyup', ignore, true);
    }
}

disableShortcuts(document.querySelector('[id^="wmd-input"]'));

const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
            if (addedNode.nodeType === Node.ELEMENT_NODE
                && addedNode.tagName.toUpperCase() === 'FORM'
                && addedNode.classList.contains('inline-post')) {
                disableShortcuts(addedNode.querySelector('[id^="wmd-input"]'));
            }
        }
    }
});
observer.observe(document, {subtree: true, childList: true});
