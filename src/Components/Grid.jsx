import GridLayout from "react-grid-layout";
import General from '../Pages/General'
import Assets from '../Pages/Assets'
import File from '../Pages/File'
import Player from '../Pages/Player'
import Dialog from '../Pages/Dialog/Dialog'
import Map from '../Pages/Map'

import '../scss/grid.scss'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

export default function Grid()
{
  const layout = [
    { i: "file", x: 0, y: 0, w: 15, h: 2 },
    { i: "general", x: 0, y: 2, w: 15, h: 8 },
    { i: "player", x: 0, y: 10, w: 15, h: 26 },
    { i: "create", x: 15, y: 0, w: 55, h: 36 },
    { i: "assets", x: 70, y: 0, w: 30, h: 17 },
    { i: "map", x: 70, y: 17, w: 30, h: 19 },
  ];

  return (
    <>
    <GridLayout
      className="layout"
      layout={layout}
      cols={200}
      rowHeight={15}
      width={3840}
      verticalCompact={false}
      preventCollision={true}
      allowOverlap={true}
    >
      <div className="gidDiv" key="file"><File /></div>
      <div className="gidDiv" key="general"><General /></div>
      <div className="gidDiv" key="assets"><Assets /></div>
      <div className="gidDiv" key="player"><Player /></div>
      <div className="gidDiv" key="create" ><Dialog /></div>
      <div className="gidDiv" key="map" ><Map /></div>
    </GridLayout>
    </>
  )
}