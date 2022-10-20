import React from 'react';
function SbNewsletter() {
    return ( 
        <div className="sidebar_widget newsletter mb-35">
                    <div className="block_title">
                      <h3>newsletter</h3>
                    </div>
                    <form action="#">
                      <p>Sign up for your newsletter</p>
                      <input placeholder="Your email address" type="text" />
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
     );
}

export default SbNewsletter;