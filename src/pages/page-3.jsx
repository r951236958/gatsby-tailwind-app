import React, { useState, useRef, useEffect } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Button from 'components/Button'
// import Dropdown from 'components/Dropdown'
import Dropdown from 'components/Dropdowns/Dropdown1'
import ImageModal from 'components/ImageModal'
import OpenModalButton from 'components/OpenModalButton'
import Modal from 'components/ModalDemo'
import Modal1 from 'components/Modals/Modal1'


const Page3 = () => {
  const title = 'Test'
  // const [vegetagle, setVegetable] = useState(undefined)
  // const [fruit, setFruit] = useState(undefined)
  const [isOpen, setIsOpen] = useState(false)
  const [modalShown, toggleModal] = useState(false)
  const [show, setShow] = useState(false)

  const handlOpenModal =(open) => {
    console.log('close modal')
    setIsOpen(open)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const setModalOpen = () => {
    toggleModal(!modalShown)
  }

  const handleShowModal = () => {
    setShow(!show)
  }

  return (
    <Layout title={title}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />

      <div className="flex flex-row w-full p-4 space-x-4">
        {/* <Dropdown
          placeholder="Select Vegetable"
          value={vegetagle}
          onChange={(v) => setVegetable(v)}
          options={['Tomato', 'Cucumber', 'Potato']}
        />
        <Dropdown
          placeholder="Select Fruit"
          value={fruit}
          onChange={(v) => setFruit(v)}
          options={['Apple', 'Banana', 'Orange', 'Mango']}
        />
      */}
        <Dropdown
          header={<h2 className="font-bold">John Stevens</h2>}
          options={[
            [
              {
                id: '1',
                link: '/likes',
                text: 'My Likes',
              },
              {
                id: '2',
                link: '/favorites',
                text: 'My Favorites',
              },
              {
                id: '3',
                link: '/profile',
                text: 'Profile',
              },
            ],
            {
              id: '4',
              link: '/settings',
              text: 'Settings',
            },
            {
              id: '5',
              link: '/logout',
              text: 'Logout',
            },
          ]}
        />
      </div>
      <div className="w-full">
        <Button size="sm" text="Open Modal" onClick={handleShowModal} />

        <Modal1
          title="Wait!"
          text="Are you sure you want to delete this item?"
          type="warning"
          showCancelButton
          confirmButtonText="Yes!"
          cancelButtonText="No"
        />
      </div>
      <OpenModalButton handlClick={() => handlOpenModal(true)}>
        Open modal
      </OpenModalButton>
      <Button size="xl" text="Open Modal" onClick={setModalOpen} />

      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false)
        }}
      >
        <div className="text-xl dark:text-gray-800">
          Look! I&apos;m inside the modal!
        </div>
      </Modal>

      <ImageModal isOpen={isOpen} handleClose={handleClose}>
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-xl text-blue-500">Hello World!</div>
        </div>
      </ImageModal>
    </Layout>
  )
}

export default Page3