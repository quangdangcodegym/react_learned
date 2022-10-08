// Định nghĩa key: value cho object
// Định nghĩa method cho object
// Định nghĩa key cho object dưới dạng biến

    // ĐỊNH NGHĨA KEY-VALUE DÀI dòng
    // var name = 'Javascript';
    // var price = 1000;

    // var course = {
    //     name: name,
    //     price: price
    // }
    // console.log(course); // {name: 'Javascript', price: 1000}

// Literal kiểu ĐỊNH NGHĨA KEY-VALUE ngắn gọn hơn
        // var name = 'Javascript';
        // var price = 1000;

        // var course = {
        //     name,
        //     price,
        // }
        // console.log(course); // {name: 'Javascript', price: 1000}

// ĐỊNH NGHĨA funtion DÀI dòng
    // var name = 'Javascript';
    // var price = 1000;

    // var course = {
    //     name,
    //     price,
    //     getName: function(){
    //         return name;
    //     }
    // }
    // console.log(course.getName()); // Javascript

// Literal ĐỊNH NGHĨA funtion ngắn gọn
    // var name = 'Javascript';
    // var price = 1000;

    // var course = {
    //     name,
    //     price,
    //     getName(){
    //         return name;
    //     }
    // }
    // console.log(course.getName()); // Javascript

// Định nghĩa key cho object dưới dạng biến

    var fieldName = 'new-name';
    var fieldPrice = 'price';
    const course = {
        name : 'Javascript',
        [fieldName]: 'Javascript',
        [fieldPrice]: 1000
    }
    console.log(course); // {name: 'Javascript', new-name: 'Javascript', price: 1000}