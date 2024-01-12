// Khái niệm Truthy và Falsy trong JavaScript liên quan đến việc chuyển đổi kiểu dữ liệu (Type conversion) để ép giá trị bất kỳ thành một giá trị Boolean trong một ngữ cảnh yêu cầu giá trị Boolean.

// Truthy và Falsy là những giá trị mà JavaScript khi ép về kiểu Boolean, hoặc trong một ngữ cảnh Boolean, nó sẽ cho ra giá trị true hoặc false.

// Các giá trị được xem là Truthy bao gồm: chuỗi khác rỗng, số khác 0 và tất cả các object. Ví dụ, các giá trị sau đây sẽ được coi là Truthy:
if(123){
    // Đây là một số khác 0, nên đoạn code này sẽ được thực thi
}
if ("hello"){
    // Đây là một chuỗi khác rỗng, nên đoạn code này sẽ được thực thi
}
if({}){
    // Đây là một object, nên đoạn code này sẽ được thực thi
}
if(undefined){
    // Đây là undefined, nên đoạn code này sẽ không được thực thi
}
if(0){
    // Đây là số 0, nên đoạn code này sẽ không được thực thi
}
if('') {
    // Đây là chuỗi rỗng, nên đoạn code này sẽ không được thực thi
}