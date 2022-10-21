import React from "react";

/**
 * Tạo component theo cách bình thường không có CONTRUCTOR
class DemoApp1 extends React.Component{
    render(){
        return(
            <>
                <h1> WELLCOME {this.props.firstName} {this.props.lastName}</h1>
                <h1> Test demoapp1</h1>
            </>
        )
    }
}
export default DemoApp1;

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

class DemoApp1 extends React.Component{
    // NẾU có khai báo CONTRUCTOR thi phai them props va co super
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <h1> WELLCOME {this.props.firstName} {this.props.lastName}</h1>
                <h1> Test demoapp1</h1>
            </>
        )
    }
}
export default DemoApp1;