import React from 'react';

const SearchBar = (props)=>{
    const searchKeyWord = ()=>{
        let txtSearch = document.getElementById("idTxtSearch").value;
        props.onKwChange(txtSearch);
    }
    return(
        <section className="add-contact-area my-3">
        <div className="container">
            <div className="d-flex align-items-center">
                <h3 className="fw-bolder">Contact Manage</h3><a className="btn btn-primary btn-sm ms-2"
                    href="/cg-contact/contact/add"><i className="fa fa-plus me-2" />New</a>
            </div>
            <div>
                <p className="fst-italic">Ea do esse elit qui enim laborum ea nulla consectetur est pariatur ex. Id et
                    do laboris mollit ullamco laboris. Mollit consequat eiusmod nulla exercitation quis reprehenderit
                    officia tempor. Voluptate fugiat tempor ullamco occaecat nostrud eiusmod cillum nostrud et commodo
                    ex occaecat deserunt. Elit veniam proident esse ad laboris nostrud excepteur do.</p>
                <div className="d-flex w-25">
                    <form className="d-flex"><input type="search" className="form-control" id='idTxtSearch' />
                    <button type="button" className="btn btn-outline-secondary btn-sm ms-2" onClick={searchKeyWord} >Search</button></form>
                </div>
            </div>
        </div>
    </section>
    );
}
export default SearchBar;