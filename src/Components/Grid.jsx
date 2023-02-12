import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import Display from '../Pages/Display'
import General from '../Pages/General'
import Picture from '../Pages/Picture'
import File from '../Pages/File'

import '../scss/grid.scss'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

export default function Grid({ refs, data })
{
    const layout = [
        { i: "file", x: 0, y: 0, w: 18, h: 2 },
        { i: "general", x: 0, y: 1, w: 18, h: 18 },
        { i: "display", x: 0, y: 2, w: 18, h: 9 },
        { i: "picture", x: 0, y: 3, w: 50, h: 10 },
    ];

    return (
        <>
        <GridLayout
            className="layout"
            layout={layout}
            cols={100}
            rowHeight={15}
            width={1920}
            onLayoutChange={(layout) => {}}
        >
            <div className="gidDiv" key="general" >
                <General refs={refs} data={data} />
            </div>
            <div className="gidDiv" key="picture" >
                <Picture refs={refs} data={data} />
            </div>
            <div className="gidDiv" key="display" >
                <Display refs={refs} data={data} />
            </div>
            <div className="gidDiv" key="file" >
                <File refs={refs} data={data} />
            </div>
        </GridLayout>
        </>
             
    )
}