
/**
# Tao component theo cách bình thường
function DemoApp2(){
    return (
        <>
            <h1>WELLCOME TO FUNCTION CONPONENT</h1>
            <h2>Test 2</h2>
        </>
    )
}
export default DemoApp2;

 */

/** 
# Tạo Component có khai báo thêm props
    Kết hợp sử dụng rest synctax để truyền nhiều thuộc tính
    let obj = {
    "firstName": "Quang", 
    "lastName": "Dang",
    "country": "VietNam",
    "gender": "Nam",
    "location": "Go Vap"
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <DemoApp2  {...obj}/>
    </React.StrictMode>
    );
*/
function DemoApp2(props){
    return (
        <>
            <h1>WELLCOME TO FUNCTION CONPONENT {props.firstName} {props.lastName}</h1>
            <h2>Test 2</h2>
        </>
    )
}
export default DemoApp2;