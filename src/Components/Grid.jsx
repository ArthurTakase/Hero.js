import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import Display from '../Pages/Display'
import General from '../Pages/General'
import Picture from '../Pages/Picture'
import '../scss/grid.scss'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

export default function Grid({ refs, data })
{
    return (
        <>
        {/* <ResponsiveGridLayout
                className="layout"
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                // rowHeight={30}
                // width={1200}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                layout={[
                    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
                    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: "c", x: 4, y: 0, w: 1, h: 2 }
                  ]}
        >
            <div key="a">a</div>
            <div key="b">b</div>
            <div key="c">c</div>
        </ResponsiveGridLayout> */}
                
        {/* <General refs={refs} />
        <Display refs={refs} />
        <Picture refs={refs} /> */}
        </>
    )
}