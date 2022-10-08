/**
    const student = {
        fullName: 'Nguyen van A'
    }

    student.fullName = 'Nguyen Van B' // có thể sửa thuộc tính wriable = true
    console.log(student);
*/

/**
    "use strict"    // sử dụng kèm theo để bật chế độ nghiêm ngặt
    const student = Object.freeze({
        fullName: 'Nguyen van A'
    })

    // Không thể sửa object student vì đã đóng băng object
    student.fullName = 'Nguyen Van B' 
    console.log(student);
 */
/**
    // Khoi tao va dịnh nghĩa thuộc tính
    const student = Object.defineProperties(student, 'fullName', {
        value: 'Nguyen Van A',
        writeable: false
    })

    // Không thể sửa object student vì đã đóng băng object
    student.fullName = 'Nguyen Van B' 
    console.log(student);
 */

/**
    // Khong xoa duoc object chi xoa duoc thuoc tinh object
    // "use strict"
    const student = {
        fullName : 'Quang Dang'
    }
    delete student;
 */
/**
    // Tham số trùng tên: => Cần chế độ nghiêm ngặt
    function sum(a, a){
        return a+a;
    }
    console.log(sum(6,9));
 */

    // Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi bloc code
    