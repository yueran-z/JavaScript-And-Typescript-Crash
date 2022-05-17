const APP = {
    list: null,
    names: [],
    key: null,
    storage: null,
    init(key) {
        //script runs on every page that links to main.js
        APP.key = key;
        APP.storage = window.localStorage;
        return APP;
    },
    getStorage() {
        //load the key item from localStorage into our names array
        let ref = APP.storage.getItem(APP.key);
        if (!ref) {
            APP.storage.setItem(APP.key, JSON.stringify([]));
        }
        APP.names = JSON.parse(ref);
        return APP;
    },
    addName(nm, list) {
        //add a name to the names array and then update localstorage
        let obj = {
            id: Date.now(),
            name: nm,
        };
        APP.names.push(obj);
        APP.saveNames();
        if (list) {
            APP.buildList(list);
        }
    },
    removeName(nm) {
        //remove a name from the names array and then update localstorage
        APP.names = APP.names.filter((obj) => obj.name !== nm);
        APP.saveNames();
    },
    updateName(oldName, newName) {
        //update the names array and then localStorage
        APP.names = APP.names.map((obj) => {
            if (obj.name === oldName) {
                return {
                    id: obj.id,
                    name: newName,
                };
            }
            return obj;
        });
        APP.saveNames();
    },
    saveNames() {
        //save the updated names array in localStorage
        APP.storage.setItem(APP.key, JSON.stringify(APP.names));
    },
    clearNames() {
        //remove all names from localStorage and empty the names array
        APP.names = [];
        APP.storage.clear();
    },
    buildList(element) {
        //update the list element based on the names array
        if (!APP.names) {
            APP.names = [];
        }
        element.innerHTML = APP.names
            .map((obj) => {
                return `<li data-key="${obj.id}">${obj.name}</li>`;
            })
            .join('\n');
    },
};