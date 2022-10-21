import React from "react";

/**
 * Sử dụng state dùng class conponent
 */
class DemoApp1State extends React.Component{
    // NẾU có khai báo CONTRUCTOR thi phai them props va co super
    constructor(props){
        super(props)
        this.state = {
            "firstName": "Thuy",
            "lastName": "Trang"
        }
    }
    changeFn = ()=>{
        this.setState({"firstName": "Thi"})
    }
    changeLn = ()=>{
        this.setState({"lastName": "Sau"})
    }
    render(){
        return(
            <>
                <h1> Hello {this.state.firstName} - {this.state.lastName}</h1>
                <input type="button" value="Change FirstName" onClick={this.changeFn}/>
                <input type="button" value="Change LastName" onClick={this.changeLn}/>
            </>
        )
    }
}
export default DemoApp1State;