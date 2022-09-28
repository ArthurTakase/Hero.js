function fileTo64(file, _callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        _callback(reader.result)
    };
    reader.onerror = function(error) {
        console.log('Error: ', error);
    };
}