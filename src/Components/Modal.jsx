import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

export default function Modal({ states })
{


    return (
        <Rodal visible={states.get.open} onClose={() => { states.set.setOpen(false) }} closeOnEsc className="modal">
            {states.get.modalContent}
        </Rodal>
    )
}