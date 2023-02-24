import Header from '../Components/Header'
import { data, lang, notif } from '../App'
import { Input, Select } from '../Components/Input'
import Collapse from '../Components/Collapse'

import { useState } from 'react'

import '../scss/window_behavior.scss'

export default function Player({ refs, states }) {
    const txt = lang[localStorage.getItem("lang")]
    const [objects, setObjects] = useState(<>Empty</>)
    const [variables, setVariables] = useState(<>Empty</>)
    const [inventory, setInventory] = useState(<>Empty</>)
    const [select, setSelect] = useState(<></>)

    function modalInventory() {

        function saveNewInventory() {
            const name = refs.input.player.inventory.select.current.value
    
            if (name === "") return { value: "error", msg: "Name is Empty" }
    
            data.player.inventory.push(name)
    
            updateInventory()
    
            return { value: "success", msg: "New Object added" }
        }

        function updateInventory() {
            const invCount = data.player.inventory.reduce((acc, cur) => {
                acc[cur] = (acc[cur] || 0) + 1
                return acc
            }, {})

            setInventory(Object.keys(invCount).map((obj, i) => {
                return (
                    <div className="object" key={i}>
                        <div className="name">{obj}</div>
                        <div className="count">{invCount[obj]}</div>
                    </div>
                )
            }))
            states.set.setOpen(false)
        }

        states.set.setModalContent(
            <>
                <div className="modalContent">
                    <div className="modalTitle">Add Item to Inventory</div>
                    <Select r={refs.input.player.inventory.select} options={select} />
                    <button onClick={() => { notif(saveNewInventory) }}><i className='bx bx-plus'></i></button>
                </div>
            </>
        )
        states.set.setOpen(true)
    }

    function modalObjects() {

        function saveNewObject() {
            const name = refs.input.player.allObjects.name.current.value
            const description = refs.input.player.allObjects.description.current.value
    
            if (name === "") return { value: "error", msg: "Name is Empty" }
            if (description === "") return { value: "error", msg: "Description is Empty" }
    
            data.player.allObjects[name] = { name: name, description: description }
    
            updateObjects()
    
            return { value: "success", msg: "New Object added" }
        }

        function updateObjects() {
            const objs = Object.values(data.player.allObjects)
            setObjects(objs.map((obj, i) => {
                return (
                    <div className="object" key={i}>
                        <div className="name">{obj.name}</div>
                        <div className="description">{obj.description}</div>
                    </div>
                )
            }))
            setSelect(objs.map((obj, i) => {
                return ( <option value={obj.name} key={i}>{obj.name}</option> )
            }))
            states.set.setOpen(false)
        }

        states.set.setModalContent(
            <>
                <div className="modalContent">
                    <div className="modalTitle">Add Item to Game</div>
                    <Input type="text" placeholder="Name" r={refs.input.player.allObjects.name} />
                    <Input type="text" placeholder="Description" r={refs.input.player.allObjects.description} />
                    <button onClick={() => { notif(saveNewObject) }}><i className='bx bx-plus'></i></button>
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
    
            if (name === "") return { value: "error", msg: "Name is Empty" }
            if (isNaN(value)) return { value: "error", msg: "Value is NaN" }
    
            data.player.variables[name] = { name: name, value: value }
    
            updateVariables()
    
            return { value: "success", msg: "New Variable added" }
        }

        function updateVariables() {
            const vars = Object.values(data.player.variables)
            setVariables(vars.map((v, i) => {
                return (
                    <div className="object" key={i}>
                        <div className="name">{v.name}</div>
                        <div className="value">{v.value}</div>
                    </div>
                )
            }))
            states.set.setOpen(false)
        }

        states.set.setModalContent(
            <>
                <div className="modalContent">
                    <div className="modalTitle">Add Variable to Player</div>
                    <Input type="text" placeholder="Name" r={refs.input.player.variables.name} />
                    <Input type="number" placeholder="Value" r={refs.input.player.variables.value} />
                    <button onClick={() => { notif(saveNewVariable) }}><i className='bx bx-plus'></i></button>
                </div>
            </>
        )
        states.set.setOpen(true)
    }

    return (
    <>
        <Header title="Player" />
        <div className="player content" ref={refs.window.player}>
            <Collapse name="All Objects" header={<button onClick={modalObjects}><i className='bx bx-plus'></i></button>}>
                {objects}
            </Collapse>
            <Collapse name="Inventory" header={<button onClick={modalInventory}><i className='bx bx-plus'></i></button>}>
                {inventory}
            </Collapse>
            <Collapse name="Variables" header={<button onClick={modalVariables}><i className='bx bx-plus'></i></button>}>
                {variables}
            </Collapse>
        </div>
    </>
    )
}