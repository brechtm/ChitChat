
function downloadBlob(blobUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', blobUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            var blob = this.response;
            var reader = new window.FileReader();
            reader.readAsBinaryString(blob);
            reader.onloadend = function() {
                window.webkit.messageHandlers.download.postMessage(btoa(reader.result));
            }
        }
    };
    xhr.send();
}
