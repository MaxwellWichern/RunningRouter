import React from 'react'
import Banner from './Banner.jsx'
import MapOl from './MapOl.jsx'
import MapCenter from './MapCenter.jsx'
import MapDraw from './MapDraw.jsx'
import CustomModal from './Modal.jsx'

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('login');
  return (
    <>
    <Banner loggedIn={loggedIn} />
    <Banner loggedIn={loggedIn} setLoggedIn={setLoggedIn} setModalContent={setModalContent} setShowModal={setShowModal} />
    <MapOl>
      <MapCenter>
        <MapDraw />
      </MapCenter>
    </ MapOl>
    <CustomModal showModal={showModal} setShowModal={setShowModal} modalContent={modalContent} />
    </>

  )
}

export default App
