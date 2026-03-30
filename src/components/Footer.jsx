import React from "react";

const currYear = new Date().getFullYear();

function Footer(){
    return <div>
        <footer><p>Copyright © Vaibhav Shakya {currYear}</p></footer>
    </div>;
}

export default Footer;
