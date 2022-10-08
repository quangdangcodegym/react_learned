import React from "react";


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