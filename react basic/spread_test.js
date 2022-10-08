// TOÁN TỬ SPREAD: hợp nhất 2 mảng, 2 object

    // LẤY CÁC PHẨN TỬ CỦA MẢNG ĐƯA VÀO ....
    // var array1 = ['javascript', 'rubby', 'php'];
    // var array2 = ['ReactJS', 'Dart'];
    // var array3 = [...array2, ...array1];

    // console.log(array3); // ['ReactJS', 'Dart', 'javascript', 'rubby', 'php']

    // var object1 = {
    //     name: 'Javascript'
    // }
    // var object2 = {
    //     price: 1000
    // }
    // var object3 = {
    //     ...object1,
    //     ...object2
    // }
    // console.log(object3); // {name: 'Javascript', price: 1000}

    // SỬ DỤNG SPREAD có thuộc tính trùng
    // var defautConfig = {
    //     api: '24h.com.vn',
    //     apiVersion: 'v1',
    //     other: 'orther'

    // }
    // var exerciseConfig = {
    //     ...defautConfig,
    //     api: '25h.com.vn'
    // }
    // console.log(exerciseConfig) // {api: '25h.com.vn', apiVersion: 'v1', other: 'orther'}

    var array = ['Javascript', 'PHP', 'Rubby'];

    function logger(a,b){
        console.log(a,b);   //Javascript PHP
    }
    logger(...array)