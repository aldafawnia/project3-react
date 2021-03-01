import React, {useState} from 'react';
import axios from 'axios';

import {
    useHistory,
} from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Register(){

    const [form, setForm] = useState({
        'username':'',
        'email':'',
        'password':'',
        'full_name':'',
        'contact_number':'',
        'building_name':'',
        'street_name':'',
        'unit_number':'',
        'postal_code':'',
        'country':'',
    })

    const [validations, setValidations] = useState({
        'usernameTaken':false,
        'usernameEmpty':false,
        'emailTaken':false,
        'emailEmpty':false,
        'passwordInvalid':false,
        'passwordEmpty':false,
        'fullNameInvalid':false,
        'contactNumberInvalid':false,
        'buildingNameInvalid':false,
        'streetNameInvalid':false,
        'unitNumberInvalid':false,
        'postalCodeInvalid':false,
        'countryInvalid':false,
        'accountRegistrationInvalid':false,
        'addressRegistrationInvalid':false,
    })

    const [errors, setErrors] = useState({
        'usernameUnique':'',
        'usernameRequired':'',
        'emailUnique':'',
        'emailRequired':'',
        'passwordMinimum':'',
        'passwordRequired':'',
        'fullNameRequired':'',
        'contactNumberRequired':'',
        'buildingNameRequired':'',
        'unitNumberRequired':'',
        'postalCodeRequired':'',
        'countryRequired':'',
    })

    const history = useHistory();

    const BASE_URL= 'https://8080-ce658780-baa8-4628-bf51-6d14254b95b4.ws-us03.gitpod.io/';

    function updateFormField(event) {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    async function submitRegister(event){
        event.preventDefault();
        const newRegister = {
          'email':form.email,
          'password':form.password,
          'first_name':form.first_name,
          'last_name':form.last_name,
          'contact_number':form.contact_number,
          'street_name':form.street_name,
          'block_number':form.block_number,
          'unit_number':form.unit_number,
          'building_name':form.building_name,
          'postal_code':form.postal_code,
        }
        let response = await axios.post(`${BASE_URL}/users/create`, newRegister)
        console.log(response.data)
        if(Array.isArray(response.data)){
            for(let error of response.data){
                if(error.field === 'username'){
                    if(error.validation === 'unique'){
                        setValidations({
                            ...validations,
                            'usernameTaken':true
                        })
                        setErrors({
                            ...errors,
                            'usernameUnique':error.message
                        })
                    }
                    if(error.validation === 'required'){
                        setValidations({
                            ...validations,
                            'usernameEmpty':true
                        })
                        setErrors({
                            ...errors,
                            'usernameRequired':error.message
                        })
                    }
                    document.querySelector('#user-register').style.display = "block";
                    document.querySelector('#address-register').style.display = "none";
                }
                if(error.field === 'email'){
                    if(error.validation === 'unique'){
                        setValidations({
                            ...validations,
                            'emailTaken':true
                        })
                        setErrors({
                            ...errors,
                            'emailUnique':error.message
                        })
                    }
                    if(error.validation === 'required'){
                        setValidations({
                            ...validations,
                            'emailEmpty':true
                        })
                        setErrors({
                            ...errors,
                            'emailRequired':error.message
                        })
                    }
                    document.querySelector('#user-register').style.display = "block";
                    document.querySelector('#address-register').style.display = "none";
                }
                if(error.field === 'password'){
                    if(error.validation === 'required'){
                        setValidations({
                            ...validations,
                            'passwordInvalid':true
                        })
                        setErrors({
                            ...errors,
                            'passwordRequired':error.message
                        })
                    }
                    if(error.validation === 'minimum'){
                        setValidations({
                            ...validations,
                            'passwordEmpty':true
                        })
                        setErrors({
                            ...errors,
                            'passwordMinimum':error.message
                        })
                    }
                    document.querySelector('#user-register').style.display = "block";
                    document.querySelector('#address-register').style.display = "none";
                }
                if(error.field === 'full_name'){
                    setValidations({
                        ...validations,
                        'fullNameInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'fullNameRequired':error.message
                    })
                    document.querySelector('#user-register').style.display = "block";
                    document.querySelector('#address-register').style.display = "none";
                }
                if(error.field === 'contact_number'){
                    setValidations({
                        ...validations,
                        'contactNumberInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'contactNumberRequired':error.message
                    })
                    document.querySelector('#user-register').style.display = "block";
                    document.querySelector('#address-register').style.display = "none";
                }
                if(error.field === 'building_name'){
                    setValidations({
                        ...validations,
                        'buildingNameInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'buildingNameRequired':error.message
                    })
                }
                if(error.field === 'unit_number'){
                    setValidations({
                        ...validations,
                        'unitNumberInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'unitNumberRequired':error.message
                    })
                }
                if(error.field === 'postal_code'){
                    setValidations({
                        ...validations,
                        'postalCodeInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'postalCodeRequired':error.message
                    })
                }
                if(error.field === 'country'){
                    setValidations({
                        ...validations,
                        'countryInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'countryRequired':error.message
                    })
                }
            }
        }
        else{
            alert('Your account is registered successfully!')
            history.push('/')
        }
    }

    function nextPage(){
        document.querySelector('#user-register').style.display = "none";
        document.querySelector('#address-register').style.display = "block";
    }

    function previousPage(){
        document.querySelector('#user-register').style.display = "block";
        document.querySelector('#address-register').style.display = "none";
    }

    return (
        <React.Fragment>
            <Container>
                <Form method="POST">
                    <div id="user-register" className="m-5">
                      <div style={{width:'100%', height:'10vh'}} className="mb-1">
                          <h2>STEP 1: REGISTER ACCOUNT</h2>
                      </div>
                      <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" name="email" autoComplete = "off" value={form.username} placeholder="Enter email" onChange={updateFormField}/>
                        {validations.emailTaken ? (<div style={{color:'red'}}>{errors.emailUnique}</div>) : ''}
                        {validations.emailEmpty ? (<div style={{color:'red'}}>{errors.emailRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" autoComplete = "off" value={form.email} placeholder="Enter email" onChange={updateFormField}/>
                        {validations.emailTaken ? (<div style={{color:'red'}}>{errors.emailUnique}</div>) : ''}
                        {validations.emailEmpty ? (<div style={{color:'red'}}>{errors.emailRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" autoComplete = "off" value={form.password} placeholder="Enter password" onChange={updateFormField}/>
                        {validations.passwordInvalid ? (<div style={{color:'red'}}>{errors.passwordRequired}</div>) : ''}
                        {validations.passwordTooShort ? (<div style={{color:'red'}}>{errors.passwordMin}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="first_name" autoComplete = "off" value={form.full_name} placeholder="Enter first name" onChange={updateFormField}/>
                        {validations.firstNameInvalid ? (<div style={{color:'red'}}>{errors.firstNameRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" name="contact_number" autoComplete = "off" value={form.contact_number} placeholder="Enter contact number" onChange={updateFormField}/>
                        {validations.contactNumberInvalid ? (<div style={{color:'red'}}>{errors.contactNumberRequired}</div>) : ''}
                      </Form.Group>
                      <Button variant="light" onClick={nextPage}>Next</Button>
                    </div>
                    <div id="address-register" className="m-5" style={{display:'none'}}>
                      <div style={{width:'100%', height:'10vh'}} className="mb-1">
                        <h2>STEP 2: ADDRESS</h2>
                      </div>
                      <Form.Group>
                        <Form.Label>Building Name</Form.Label>
                        <Form.Control type="text" name="building_name" autoComplete = "off" value={form.building_name} placeholder="Enter building name" onChange={updateFormField}/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Street Name</Form.Label>
                        <Form.Control type="text" name="street_name" autoComplete = "off" value={form.street_name} placeholder="Enter street name" onChange={updateFormField}/>
                        {validations.streetNameInvalid ? (<div style={{color:'red'}}>{errors.streetNameRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Unit Number</Form.Label>
                        <Form.Control type="text" name="unit_number" autoComplete = "off" value={form.unit_number} placeholder="Enter unit number" onChange={updateFormField}/>
                        {validations.unitNumberInvalid ? (<div style={{color:'red'}}>{errors.unitNumberRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" name="postal_code" autoComplete = "off" value={form.postal_code} placeholder="Enter postal code" onChange={updateFormField}/>
                        {validations.postalCodeInvalid ? (<div style={{color:'red'}}>{errors.postalCodeRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" name="postal_code" autoComplete = "off" value={form.country} placeholder="Enter postal code" onChange={updateFormField}/>
                        {validations.postalCodeInvalid ? (<div style={{color:'red'}}>{errors.postalCodeRequired}</div>) : ''}
                      </Form.Group>
                      <Button variant="light" className="mr-3" onClick={previousPage}>Back</Button>
                      <Button variant="light" type="submit" onClick={submitRegister}>Register</Button>
                    </div>
                </Form>
            </Container>
        </React.Fragment>
    )
}