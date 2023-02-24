import Header from '../Components/Header'
import { data, lang, notif } from '../App'
import { Input, Select } from '../Components/Input'

import { useState } from 'react'
import Collapsible from 'react-collapsible';

import '../scss/window_behavior.scss'

export default function Player({ refs, states }) {
    const txt = lang[localStorage.getItem("lang")]
    const [objects, setObjects] = useState(<></>)
    const [variables, setVariables] = useState(<></>)
    const [inventory, setInventory] = useState(<></>)
    const [select, setSelect] = useState(<></>)

    function updateObjects() {
        const objs = Object.values(data.player.allObjects)
        const objsJSX = objs.map((obj, i) => {
            return (
                <div className="object" key={i}>
                    <div className="name">{obj.name}</div>
                    <div className="description">{obj.description}</div>
                </div>
            )
        })

        const selectJSX = objs.map((obj, i) => {
            return ( <option value={obj.name} key={i}>{obj.name}</option> )
        })

        setObjects(objsJSX)
        setSelect(selectJSX)
    }

    function updateVariables() {
        const vars = Object.values(data.player.variables)
        const varsJSX = vars.map((v, i) => {
            return (
                <div className="object" key={i}>
                    <div className="name">{v.name}</div>
                    <div className="value">{v.value}</div>
                </div>
            )
        })

        setVariables(varsJSX)
    }

    function updateInventory() {
        const inv = data.player.inventory
        const invJSX = inv.map((obj, i) => {
            return (
                <div className="object" key={i}>
                    <div className="name">{obj}</div>
                </div>
            )
        })

        setInventory(invJSX)
    }

    function saveNewObject() {
        const name = refs.input.player.allObjects.name.current.value
        const description = refs.input.player.allObjects.description.current.value

        if (name === "") return { value: "error", msg: "Name is Empty" }
        if (description === "") return { value: "error", msg: "Description is Empty" }

        data.player.allObjects[name] = { name: name, description: description }

        updateObjects()

        return { value: "success", msg: "New Object added" }
    }

    function saveNewVariable() {
        const name = refs.input.player.variables.name.current.value
        const v = refs.input.player.variables.value.current.value
        const value = parseInt(v)

        if (name === "") return { value: "error", msg: "Name is Empty" }
        if (isNaN(value)) return { value: "error", msg: "Value is NaN" }

        data.player.variables[name] = { name: name, value: value }

        updateVariables()

        return { value: "success", msg: "New Variable added" }
    }

    function saveNewInventory() {
        const name = refs.input.player.inventory.select.current.value

        if (name === "") return { value: "error", msg: "Name is Empty" }

        data.player.inventory.push(name)

        updateInventory()

        return { value: "success", msg: "New Object added" }
    }

    return (
    <>
        <Header title="Player" />
        <div className="player content" ref={refs.window.player}>
            <Collapsible trigger="All Objects">
                <div className="inputZone">
                    <Input type="text" placeholder="Name" r={refs.input.player.allObjects.name} />
                    <Input type="text" placeholder="Description" r={refs.input.player.allObjects.description} />
                    <button onClick={() => { notif(saveNewObject) }}><i className='bx bx-plus'></i></button>
                </div>
                {objects}
            </Collapsible>
            <Collapsible trigger="Inventory">
                <div className="inputZone">
                    <Select r={refs.input.player.inventory.select} onChange={() => { notif(saveNewInventory) }} options={select} />
                    <button onClick={() => { notif(saveNewInventory) }}><i className='bx bx-plus'></i></button>
                </div>
                {inventory}
            </Collapsible>
            <Collapsible trigger="Variables">
                <div className="inputZone">
                <Input type="text" placeholder="Name" r={refs.input.player.variables.name} />
                    <Input type="number" placeholder="Value" r={refs.input.player.variables.value} />
                    <button onClick={() => { notif(saveNewVariable) }}><i className='bx bx-plus'></i></button>
                </div>
                {variables}
            </Collapsible>
        </div>
    </>
    )
}