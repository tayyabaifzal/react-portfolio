import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import './contact.css';

const SERVICE_ID = "service_dj8b9d7";
const TEMPLATE_ID = "template_bm1e1tp";
const USER_ID = "sPRps66YlxHO5uMPI";

const App = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <div id="contact" className="mt-3">
            <div className="text-center">
                <h1 className="icon mb-3">Contact Me</h1>
                <a href="https://github.com/tayyabaifzal" className="con-btn btn-dark me-2" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="www.linkedin.com/in/tayyabaifzal" className="con-btn btn-primary me-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:tayyaba.afzal@gmail.com" className="con-btn btn-danger">Email</a>
            </div>
            <div className="mb-5">
                <Form onSubmit={handleOnSubmit}>
                    <Form.Field
                        id='form-input-control-email'
                        control={Input}
                        label='Email'
                        name='user_email'
                        placeholder='Email…'
                        required
                        icon='mail'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Name'
                        name='user_name'
                        placeholder='Name…'
                        required
                        icon='user circle'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Message'
                        name='user_message'
                        placeholder='Message…'
                        required
                    />
                    <Button type='submit' color='green'>Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default App;