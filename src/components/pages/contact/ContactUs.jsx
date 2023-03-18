import React, { useEffect, useContext } from 'react';
import { GoblaData } from '../../../App';
import './contact.css';

function ContactUs() {
    const { linkClicked } = useContext(GoblaData);
    useEffect(() => {
        console.log("Welcome to Contact");
        linkClicked("contact")
    }, [])
    return (
        <div className="contact">
            <h2>Contact Component is Under Development</h2>
        </div>
    )
}

export default ContactUs;