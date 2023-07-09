import GridLayout from "react-grid-layout";
import General from '../Pages/General'
import Assets from '../Pages/Assets'
import File from '../Pages/File'
import Player from '../Pages/Player'

import '../scss/grid.scss'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

export default function Grid()
{
    const layout = [
        { i: "file", x: 0, y: 0, w: 15, h: 2 },
        { i: "general", x: 0, y: 1, w: 15, h: 17 },
        { i: "assets", x: 0, y: 37, w: 34, h: 14 },
        { i: "player", x: 15, y: 0, w: 19, h: 24 },
        // { i: "preview", x: 68, y: 37, w: 32, h: 10 },
        // { i: "map", x: 18, y: 0, w: 50, h: 29 },
        // { i: "create", x: 68, y: 0, w: 32, h: 29 },
    ];

    return (
        <>
        <GridLayout
            className="layout"
            layout={layout}
            cols={100}
            rowHeight={15}
            width={1920}
        >
            <div className="gidDiv" key="file" >
                <File />
            </div>
            <div className="gidDiv" key="general" >
                <General />
            </div>
            <div className="gidDiv" key="assets" >
                <Assets />
            </div>
            <div className="gidDiv" key="player" >
                <Player />
            </div>
            {/* <div className="gidDiv" key="data" >
                <Picture />
            </div>
            <div className="gidDiv" key="create" >
                <Picture />
            </div>
            <div className="gidDiv" key="map" >
                <Picture />
            </div> */}
        </GridLayout>
        </>
    )
}