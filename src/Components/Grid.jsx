import GridLayout from "react-grid-layout";
import Display from '../Pages/Display'
import General from '../Pages/General'
import Assets from '../Pages/Assets'
import File from '../Pages/File'
import Player from '../Pages/Player'

import '../scss/grid.scss'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

export default function Grid({ refs, data, states })
{
    const layout = [
        { i: "file", x: 0, y: 0, w: 18, h: 2 },
        { i: "general", x: 0, y: 1, w: 18, h: 18 },
        { i: "display", x: 0, y: 2, w: 18, h: 5 },
        { i: "assets", x: 0, y: 37, w: 34, h: 13 },
        { i: "player", x: 18, y: 0, w: 34, h: 20 },
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
            <div className="gidDiv" key="general" >
                <General refs={refs} data={data} />
            </div>
            <div className="gidDiv" key="assets" >
                <Assets refs={refs} data={data} states={states} />
            </div>
            <div className="gidDiv" key="display" >
                <Display refs={refs} data={data} />
            </div>
            <div className="gidDiv" key="file" >
                <File refs={refs} data={data} />
            </div>
            <div className="gidDiv" key="player" >
                <Player refs={refs} data={data} />
            </div>
            {/* <div className="gidDiv" key="data" >
                <Picture refs={refs} data={data} />
            </div>
            <div className="gidDiv" key="create" >
                <Picture refs={refs} data={data} />
            </div>
            <div className="gidDiv" key="map" >
                <Picture refs={refs} data={data} />
            </div> */}
        </GridLayout>
        </>
             
    )
}