import '../scss/window_behavior.scss'
import '../scss/local_game.scss'

import { txt, states, refs } from '../App'
import { exportJSON } from "../Tools/Export"
import { save } from "../Tools/Export"
import { HeroDB } from '../Tools/IndexedDB'
import importGame from '../Tools/Import'
import { uploadJSON } from '../Tools/UploadFile'

import notFound from '../assets/notFound.jpg'

export default function File() {
  async function localImport() {
    const games = await HeroDB.getAllFromDB()
    states.set.setModalContent(
      <>
        <div className="modalContent">
          <div className="modalTitle">Load local saved project</div>
          <div className="localGames">
            {
            games.map((game, index) => {
              const firstPicture = Object.keys(game.data.data.pictures).length
                ? game.data.data.pictures[Object.keys(game.data.data.pictures)[0]]
                : notFound
              return (
                <div className="localGame" key={index} onClick={() => { importGame(game.data) }}>
                  <img src={firstPicture} />
                  <div>{game.id}</div>
                </div>
              )
            })
            }
            { games.length === 0 ? <div>No local saved project</div> : null }
          </div>
        </div>
      </>
    )
    states.set.setOpen(true)
  }

  async function fileImport(event) {
  const file = event.target.files[0]

  uploadJSON(file, function(game) {
    importGame(game)
  })
  }

  return (
    <>
    <div className="file content" ref={refs.window.general}>
      <button className="WIP" title={txt.new}><i className='bx bxs-file-plus'></i></button>
      <button title={txt.save} onClick={async () => await save()}><i className='bx bx-save'></i></button>
      <button title={txt.browser_projects} onClick={async () => await localImport()}><i className='bx bx-cloud'></i></button>
      <button title={txt.export} onClick={() => { exportJSON() }}><i className='bx bx-export'></i></button>
      <label className="button" htmlFor="uploadGame" title="Upload your game"><i className='bx bx-import'></i></label>
      <input style={{display: "none"}} type="file" id="uploadGame" accept=".json" onChange={fileImport} />
      <button className="WIP" title={txt.theme}><i className='bx bxs-palette'></i></button>
      {/* <button onClick={changeLanguage} title={txt.language}>{
          localStorage.getItem("lang") === "en" ? "🇫🇷" : "🇬🇧"
      }</button> */}
    </div>
    </>
  )
}
