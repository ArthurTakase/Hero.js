import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import Display from '../Pages/Display'
import General from '../Pages/General'
import Picture from '../Pages/Picture'

import '../scss/grid.scss'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

export default function Grid({ refs, data })
{
    const layout = [
        { i: "general", x: 0, y: 0, w: 8, h: 12 },
        { i: "display", x: 0, y: 1, w: 8, h: 6 },
        { i: "picture", x: 0, y: 2, w: 25, h: 6 },
    ];

    return (
        <>
        <GridLayout
            className="layout"
            layout={layout}
            cols={50}
            rowHeight={30}
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
        </GridLayout>
        </>
             
    )
}