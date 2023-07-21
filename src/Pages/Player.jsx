import Header from '../Components/Header'
import { data, notif, states, refs, txt } from '../App'
import { Checkbox, Input, Select } from '../Components/Input'
import Collapse from '../Components/Collapse'

import { useState } from 'react'

import '../scss/window_behavior.scss'

export function reload_inventory() {
  const invCount = data.player.inventory.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})

  if (Object.keys(invCount).length === 0) {
    states.set.inventory(<>{txt('misc.empty')}</>)
    return
  }

  states.set.inventory(Object.keys(invCount).map((obj, i) => {
    return (
      <div className="object" key={i}>
        <div className="name">{obj}</div>
        <div className="count">{invCount[obj]}</div>
      </div>
    )
  }))
}

export function reload_variables() {
  const vars = Object.values(data.player.variables)

  if (vars.length === 0) {
    states.set.variables(<>{txt('misc.empty')}</>)
    return
  }

  states.set.variables(vars.map((v, i) => {
    return (
      <div className="object" key={i}>
        <div className="name">{v.name}</div>
        <div className="value">{v.value}</div>
        <div className="display">{v.display ? txt('misc.show') : txt('misc.hidden')}</div>
      </div>
    )
  }))

  try {
    refs.input.player.variables.name.current.value = ""
    refs.input.player.variables.value.current.value = ""
    refs.input.player.variables.display.current.checked = true
  } catch (e) { }
}

export function reload_objects() {
  const objs = Object.values(data.player.allObjects)

  if (objs.length === 0) {
    states.set.objects(<>{txt('misc.empty')}</>)
    return
  }

  states.set.objects(objs.map((obj, i) => {
      return (
        <div className="object" key={i}>
          <div className="name">{obj.name}</div>
          <div className="description">{obj.description}</div>
        </div>
      )
  }))
  states.set.select(objs.map((obj, i) => {
    return ( <option value={obj.name} key={i}>{obj.name}</option> )
  }))
}

export default function Player() {
  const [objects, setObjects] = useState(<>{txt('misc.empty')}</>)
  const [variables, setVariables] = useState(<>{txt('misc.empty')}</>)
  const [inventory, setInventory] = useState(<>{txt('misc.empty')}</>)
  const [select, setSelect] = useState(<></>)

  states.set.objects = setObjects
  states.set.variables = setVariables
  states.set.inventory = setInventory
  states.set.select = setSelect
  states.get.objects = objects
  states.get.variables = variables
  states.get.inventory = inventory

  function modalInventory() {

    function saveNewInventory() {
      const name = refs.input.player.inventory.select.current.value
      const quantity = refs.input.player.inventory.quantity.current.value

      if (name === "") return { value: "error", msg: `${txt('player.name')} ${txt('misc.is_empty')}` }
      if (quantity === "") return { value: "error", msg: `${txt('player.quantity')} ${txt('misc.is_empty')}` }

      for (let i = 0; i < quantity; i++) data.player.inventory.push(name)
      reload_inventory()
      states.set.setOpen(false)
      return { value: "success", msg: txt('success.newObject') }
    }

    if (Object.keys(data.player.allObjects).length === 0)
        return { value: "error", msg: txt('error.newObject') }

    states.set.setModalContent(
      <>
        <div className="modalContent">
          <div className="modalTitle">{txt('player.addItem')}</div>
          <Select label={txt('player.item')} r={refs.input.player.inventory.select} options={select} />
          <Input type="number" label={txt('player.quantity')} placeholder={txt('player.quantity')} r={refs.input.player.inventory.quantity} />
          <button onClick={() => { notif(saveNewInventory) }} className='marg-top-10'><i className='bx bx-plus'></i></button>
        </div>
      </>
    )
    states.set.setOpen(true)
  }

  function modalObjects() {

    function saveNewObject() {
      const name = refs.input.player.allObjects.name.current.value
      const description = refs.input.player.allObjects.description.current.value

      if (name === "") return { value: "error", msg: `${txt('player.name')} ${txt('misc.is_empty')}` }
      if (description === "") return { value: "error", msg: `${txt('player.description')} ${txt('misc.is_empty')}` }

      data.player.allObjects[name] = { name: name, description: description }
      reload_objects()
      states.set.setOpen(false)
      return { value: "success", msg: txt('success.newObject') }
    }

    states.set.setModalContent(
      <>
        <div className="modalContent">
          <div className="modalTitle">{txt('player.addItemToGame')}</div>
          <Input type="text" label={txt('player.name')} placeholder={txt('player.name')} r={refs.input.player.allObjects.name} />
          <Input type="text" label={txt('player.description')} placeholder={txt('player.description')} r={refs.input.player.allObjects.description} />
          <button onClick={() => { notif(saveNewObject) }} className='marg-top-10'><i className='bx bx-plus'></i></button>
        </div>
      </>
    )
    states.set.setOpen(true)
  }

  function modalVariables() {

    function saveNewVariable() {
      const name = refs.input.player.variables.name.current.value
      const v = refs.input.player.variables.value.current.value
      const value = parseInt(v)
      const display = refs.input.player.variables.display.current.checked

      if (name === "") return { value: "error", msg: `${txt('player.name')} ${txt('misc.is_empty')}` }
      if (isNaN(value)) return { value: "error", msg: `${txt('player.value')} ${txt('misc.is_nan')}` }

      data.player.variables[name] = { name, value, display }
      reload_variables()
      states.set.setOpen(false)
      return { value: "success", msg: txt('success.newVariable') }
    }

    states.set.setModalContent(
      <>
        <div className="modalContent">
          <div className="modalTitle">{txt('player.addVariable')}</div>
          <Input type="text" label={txt('player.name')} placeholder={txt('player.name')} r={refs.input.player.variables.name} />
          <Input type="number" max="9007199254740991" label={txt('player.value')} placeholder={txt('player.value')} r={refs.input.player.variables.value} />
          <div className='pad-left-5 pad-right-5 pad-top-5'>
            <Checkbox label={txt('player.displayInGame')} r={refs.input.player.variables.display} id="displayInGame" />
          </div>
          <button onClick={() => { notif(saveNewVariable) }} className='marg-top-10'><i className='bx bx-plus'></i></button>
        </div>
      </>
    )
    states.set.setOpen(true)
  }

  return (
  <>
    <Header title={txt('player.title')} />
    <div className="player content" ref={refs.window.player}>
      <Collapse name={txt('player.allObjects')} header={<button data-tooltip={txt('player.addItemToGameAction')} onClick={modalObjects}><i className='bx bx-plus'></i></button>}>
        {objects}
      </Collapse>
      <Collapse name={txt('player.inventory')} header={<button data-tooltip={txt('player.addItemAction')} onClick={() => notif(modalInventory)}><i className='bx bx-plus'></i></button>}>
        {inventory}
      </Collapse>
      <Collapse name={txt('player.variables')} header={<button data-tooltip={txt('player.addVariableAction')} onClick={modalVariables}><i className='bx bx-plus'></i></button>}>
        {variables}
      </Collapse>
    </div>
  </>
  )
}