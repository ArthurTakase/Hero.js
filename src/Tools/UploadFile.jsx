export function uploadFile(file, _callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        _callback(reader.result)
    };
    reader.onerror = function(error) {
        console.log('Error: ', error);
    };
}

export function uploadJSON(file, _callback) {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        _callback(JSON.parse(reader.result))
    };
    reader.onerror = function(error) {
        console.log('Error: ', error);
    };
}