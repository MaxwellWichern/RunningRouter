import React from 'react'
import Banner from './Banner.jsx'
import Map from './Map.jsx'
import CustomModal from './Modal.jsx'

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('login');
  return (
    <>
    <Banner loggedIn={loggedIn} setLoggedIn={setLoggedIn} setModalContent={setModalContent} setShowModal={setShowModal} />
    <Map />
    <CustomModal showModal={showModal} setShowModal={setShowModal} modalContent={modalContent} />
    </>

  )
}

export default App
