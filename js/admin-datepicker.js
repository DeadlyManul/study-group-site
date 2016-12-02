webshim.setOptions('forms-ext', {
    replaceUI: 'auto',
    types: 'date',
    date: {
        startView: 1,
        inlinePicker: true,
        classes: 'hide-inputbtns'
    }
});

webshim.setOptions('forms', {
    lazyCustomMessages: true
});

webshim.polyfill('forms forms-ext');