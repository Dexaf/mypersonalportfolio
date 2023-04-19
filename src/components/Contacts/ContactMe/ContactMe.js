import React, { createRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import LoadingSpinner from "../../Utility/LoadingSpinner/LoadingSpinner";
import Swal from 'sweetalert2'

export const ContactMe = () => {
    const form = createRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm('service_7w83poi', 'template_eb7adhf', form.current, 'user_CHBhnv3iRJDJJHQccH6VH')
            .then((result) => {
                Swal.fire("Message sent!",
                    "",
                    "success")
                e.target.reset();
            }, (error) => {
                Swal.fire("There was an error",
                    "Try again later or contact me using the contacts under the form",
                    "error")
            }).finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <>
            <h3 className='is-size-3 mb-5'>
                Contact me
            </h3>
            <div style={{ position: "relative" }}>
                {isLoading && <LoadingSpinner />}
                <form ref={form} onSubmit={sendEmail}>
                    <div className='columns'>
                        <div className='column'>
                            <label><i className="fa-solid fa-user"></i> Name</label>
                            <input className="input is-info" type="text" name="nominativo" required />
                        </div>
                        <div className='column'>
                            <label><i className="fa-solid fa-envelope"></i> Email</label>
                            <input className="input is-info" type="email" name="email" required />
                        </div>
                    </div>
                    <label><i className="fa-regular fa-note-sticky"></i> Message</label>
                    <textarea className="input is-info" rows="4" cols="50" name="messaggio" required />
                    <button className="button is-info mt-5 is-size-5 is-animated" style={{ width: "100%" }} type="submit">
                        Send <i className="fa-solid fa-share ml-2"></i>
                    </button>
                </form>
            </div>
        </>
    );
};