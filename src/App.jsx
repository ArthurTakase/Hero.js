import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslation } from "react-i18next";

import Grid from './Components/Grid'
import Modal from './Components/Modal'
import './Tools/IndexedDB'
import './Tools/Shortcuts'

export let txt = undefined
export const states = {}
export const refs = {}
export const data = {
  gameInfos: {},
  data: {
    pictures: {},
    sounds: {},
  },
  player: {
    allObjects: {},
    inventory: [],
    variables: {},
  }
}

export function notif(func) {
  const ret = func()
  if (ret === undefined) return
  if (ret.value == "success") {
    toast.success(ret.msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  } else {
    toast.error(ret.msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }
}

export default function App() {
  const { t, i18n } = useTranslation();
  if (i18n.language !== localStorage.getItem('lang')) i18n.changeLanguage(localStorage.getItem('lang'))
  txt = t

  refs.window = {
    general: useRef(null),
    display: useRef(null),
    assets: useRef(null),
    player: useRef(null),
    dialog: useRef(null),
    map: useRef(null),
  },
  refs.input = {
    general: {
      gameTitle: useRef(null),
      firstDialogID: useRef(null),
    },
    player: {
      allObjects: {
        name: useRef(null),
        description: useRef(null),
      },
      variables: {
        name: useRef(null),
        value: useRef(null),
        display: useRef(null),
      },
      inventory: {
        select: useRef(null),
        quantity: useRef(null),
      }
    }
  }

  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState(<></>)

  states['set'] = {
    setOpen: setOpen,
    setModalContent: setModalContent,
  }
  states['get'] = {
    open: open,
    modalContent: modalContent,
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div id="tooltip"></div>
      <Grid />
      <Modal />
    </>
  )
}