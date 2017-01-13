function isEmpty(text, type) {
    // Oğuzhan SARI - 18.12.2015 16:16:00
    // atanan text değerinin geçerli olup olmadığının kontrolü
    // string ise boş olup olmadığının kontrolü
    // fonksiyon ise var olup olmadığının kontrolü
    // gibi...
    if (type != undefined) {
        if (type == "array" ? $.isArray(text) : typeof (text) === type) {
            return true;
        } else {
            return false;
        }
    } else {
        if (text == undefined || text == null || text.length <= 0 || text == "" || typeof (text) === "object" || typeof (text) === "function" || typeof (text) === "number" || typeof (text) === "boolean" || Object.prototype.toString.call(text) === '[object Date]') {
            return true;
        } else {
            return false;
        }
    }
}