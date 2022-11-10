import { useState } from "react";


const Footer = () => {
    const [name, setName] = useState("Danil");

    return (
        <footer>
            I`m footer
        </footer>
    );
}

export default Footer;