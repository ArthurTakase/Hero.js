import Collapsible from 'react-collapsible';

import '../scss/window_behavior.scss'
import '../scss/collapse.scss'

export default function Collapse({ children, name, header }) {
  return (
    <Collapsible trigger={name} open>
      <div className="collapseHeader">
        {header}
      </div>
      {children}
    </Collapsible>
  )
}