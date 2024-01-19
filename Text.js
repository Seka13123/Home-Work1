function request() {
    var inputID = document.getElementById('inputtext');
    window.location.href = ('https://www.google.com/search?q=' + inputID.value);
    
}