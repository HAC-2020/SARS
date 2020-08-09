import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const RegisterPatient = () => {
    const [fields, setFields] = useState({
        name: '',
        gender: 'male',
        age: '',
        mobile: '',
        email: '',
        password: '',
        address: '',
        bloodGroup: 'O+'
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const changeHandler = (e) => {
        setFields({
            ...fields,
            [e.target.id]: e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (
            fields.name !== '' &&
            fields.password !== '' &&
            fields.gender !== '' &&
            fields.age !== '' &&
            fields.address !== '' &&
            fields.email !== '' &&
            fields.bloodGroup !== '' &&
            fields.mobile !== ''
        ) {
            axios
                .post('https://young-hamlet-78816.herokuapp.com/patient/auth', {
                    name: fields.name,
                    gender: fields.gender,
                    age: fields.age,
                    phoneNumber: fields.mobile,
                    email: fields.email,
                    pin: fields.password,
                    address: fields.address,
                    bloodGrp: fields.bloodGroup
                })
                .then((res) => {
                    setIsSubmitted(true);
                    console.log(res);
                })
                .catch((err) => console.log(err));
        } else {
        }
    };

    if (isSubmitted) {
        return <Redirect to='/' />;
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='row'>
                    <div className='col-5 offset-1'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                id='name'
                                value={fields.name}
                                onChange={changeHandler}
                                placeholder='Enter your Name'
                            />
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='form-group'>
                            <label htmlFor='age'>Age</label>
                            <input
                                type='number'
                                value={fields.age}
                                className='form-control'
                                id='age'
                                onChange={changeHandler}
                                placeholder='Enter your Age'
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5 offset-1'>
                        <div className='form-group'>
                            <label htmlFor='gender'>Gender</label>
                            <select
                                id='gender'
                                value={fields.gender}
                                className='form-control'
                                onChange={changeHandler}>
                                <option>male</option>
                                <option>female</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='form-group'>
                            <label htmlFor='mobile'>Mobile No.</label>
                            <input
                                type='number'
                                value={fields.mobile}
                                className='form-control'
                                id='mobile'
                                onChange={changeHandler}
                                placeholder='Enter 10-digit Mobile No.'
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5 offset-1'>
                        <div className='form-group'>
                            <label htmlFor='address'>Address</label>
                            <textarea
                                className='form-control'
                                value={fields.address}
                                id='address'
                                rows='1'
                                onChange={changeHandler}
                                placeholder='Enter your Residential Address'></textarea>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='form-group'>
                            <label htmlFor='bloodGroup'>Blood Group</label>
                            <select
                                id='bloodGroup'
                                className='form-control'
                                value={fields.bloodGroup}
                                onChange={changeHandler}>
                                <option>O+</option>
                                <option>O-</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5 offset-1'>
                        <div className='form-group'>
                            <label htmlFor='email'>E-Mail</label>
                            <input
                                type='email'
                                className='form-control'
                                value={fields.email}
                                id='email'
                                onChange={changeHandler}
                                placeholder='Enter your E-Mail'
                            />
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                value={fields.password}
                                className='form-control'
                                id='password'
                                onChange={changeHandler}
                                placeholder='Enter secure password'
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 offset-5 text-center mt-2'>
                        <button className='btn btn-primary' type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterPatient;
