import React, {Component} from 'react';
import * as MD from 'react-icons/lib/md';

import "./ContactForm.scss"
import Input from "../Input/Input";

class ContactForm extends Component {
    render() {
        return (
            <div className={"contact-panel"}>
                <div className="contact-panel__content">
                    <div className="contact-panel__title post__title--dark">
                        <span>Sign up for our newsletter!</span>
                    </div>
                    <div className="contact-panel__form">
                        <form action="">
                            <Input
                                labelText=""
                                name={"email"}
                                type={'email'}
                                placeholder={'Enter a valid email address'}
                            />
                            <button type="submit"><MD.MdSend /></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;