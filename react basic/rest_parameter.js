//=====> Toán tử rest
const obj =     {
        name:'Javascript',
        price: 1000,
        description: 'Descripton ...',
        address: 'hue'
    }

    const {name, price} = obj;

    console.log(name);

/**
 * 
    function logger(...params){
        console.log(params); // (5) [1, 2, 3, 4, 5]
    }

    logger(1,2,3,4,5);
    // Lấy phần còn lại

    // Lấy phần còn lại sau tham số a, b 
    function logger1(a, b,...params){
        console.log(params); => (3) [3,4,5]
    }

    logger1(1,2,3,4,5);
 */

    // SỬ DỤNG DESTRUCTURING
    // VẤN ĐỀ: mất công phải obj.nam, obj.price..
    // function logger(obj){
    //     console.log(obj.name);
    //     console.log(obj.price);
    // }

    // logger({
    //     name:'Javascript',
    //     price: 1000,
    //     description: 'Descripton ...'
    // })

    // DESTRUCTURING: khai báo và sử dụng tên thuộc tính của OBJECT
    // function logger({name, price, ...param}){
    //     console.log(name);
    //     console.log(price);
    //     console.log(param);
    // }
    // logger({
    //     name:'Javascript',
    //     price: 1000,
    //     description: 'Descripton ...',
    //     address: 'hue'
    // })
    // DESTRUCTURING: khai báo và sử dụng tên thuộc tính của ARRAY
        // function logger([a, b]){
        //     console.log(a);
        //     console.log(b);
        // }
        // logger([2,6])
        // function logger([a, b, ...param]){
        //     console.log(a); // a = 2
        //     console.log(b); // b = 6
        //     console.log(param); // param= [4,5,6]
        // }
        // logger([2,6, 4, 5, 6])

        

