export function closest (element, selector) {
    if (typeof element.closest === 'function') {
        return element.closest(selector);
    }

    const matches = document.querySelectorAll(selector);

    for (let i = 0; i < matches.length; i++) {
        let el = element;
        while (el) {
            if (matches[i] === el) return el;
            el = el.parentElement;
        }
    }

    return undefined;
}

export function delegate (element, event, selector, handler) {
    const delegateHandler = function (e) {
        const matched = closest(e.target, selector);
        e.delegateTarget = matched;
        if (matched) handler.call(null, e);
    };

    element.addEventListener(event, delegateHandler);

    return function () {
        element.removeEventListener(event, delegateHandler);
    };
}