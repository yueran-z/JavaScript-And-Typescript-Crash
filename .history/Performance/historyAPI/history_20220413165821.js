//  history.js
//  window.history
//  window.location
//  pushState, replaceState, history.state, popstate, hashchange 
// http:// sub.example.com :80 /path/filename.html 
// ?query=string&num=1
// #hashvalue - comes after the querystring
// 127.0.0.1 localhost


document.addEventListener('DOMContentLoaded', () => {
    //history.pushState({"abc":123}, "title", url);  //add to the array
    //history.replaceState({"abc":123}, "title", url);   //replace current entry
    //history.pushState(null, "Title", "pretend.html");
    //add listeners to buttons and links that navigate
    document.getElementById("link").addEventListener('click', c);
    //intercept initial load incase there is a hash value or state
    //add listeners for hashchange and popstate
    window.addEventListener("hashchange", hc);
    window.addEventListener("popstate", ps);

});

function c(ev) {
    show('clicked');
    ev.preventDefault();
    let href = ev.currentTarget.href;
    let pid = ev.currentTarget.getAttribute("data-person");
    show(href);
    history.replaceState({
        "pid": pid
    }, "title", href);
    loadPerson();
}

function loadPerson() {
    show('LoadPerson');
    let hs = JSON.stringify(history.state);
    let data = JSON.parse(hs);
    console.log(data.pid);
    show(data.pid);
}

function hc(ev) {
    // ev.newURL  ev.oldURL
    show("hashchange");
    //location.hash
}

function ps(ev) {
    //  ev.state
    show("popstate");
}

function show(output) {
    let p = document.createElement('p');
    p.textContent = output;
    document.getElementById('output').appendChild(p);
    setTimeout(_ => {
        document.getElementById('output').removeChild(p);
    }, 4000);
}

//show('location.href: ' + location.href);
//show('location.search: ' + location.search);
//show('location.hash: ' + location.hash);
//history.go(-3)
//history.back();
//history.forward();
//location.reload();
//location.replace("http://www.google.com");
//show('history.state:' + history.state );