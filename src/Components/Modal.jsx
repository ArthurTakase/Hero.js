import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { states } from '../App'

export default function Modal()
{
    return (
        <Rodal visible={states.get.open} onClose={() => { states.set.setOpen(false) }} closeOnEsc className="modal" animation="slideDown">
            {states.get.modalContent}
        </Rodal>
    )
}