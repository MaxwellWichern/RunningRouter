import React from 'react';
import { forgotPassword } from '../../requests/authenticationRequests.js'
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import PropTypes from 'prop-types'
import FormReset from './FormReset.jsx'


const FormForgot = (props) => {
  const setModalContent = props.setModalContent;
  const handleClose = props.handleClose;
  const emailInputRef = props.emailInputRef
  const [email, setEmail] = React.useState('')

  const handleForgot = (e) => {
    e.preventDefault()
    const wrapper = async () => {
    const loginSuccess = await forgotPassword(email)
    if (loginSuccess) {
      setModalContent(<FormReset handleClose={handleClose} email={email} />)
    } else{
      alert('Login failed')
    }
  }
  wrapper()
  }

  return (
    <div>
    <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Forgot Password</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="w-full">
              <Button onClick={handleForgot}>Send Account Recovery Email</Button>
            </div>
          </div>
        </Modal.Body>
    </div>
  );
};
FormForgot.propTypes = {
  handleClose: PropTypes.func.isRequired,
  emailInputRef: PropTypes.object.isRequired,
}

export default FormForgot;
