import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedItem, opened, selectCardItem, completed } from '../Redux/cardSlice'

function Card({ framework }) {
    const seleted = useSelector(selectCardItem)
    const dispacth = useDispatch()

    const handleClick = (card) => {

        dispacth(opened(card.id))
        if (seleted.length <= 2) {
            dispacth(completed(card.id))
            
        }
       
        dispacth(selectedItem(card))

       


    }
    return (
        <div className={"card " + (framework.status ? ' opened' : ' ') + (framework.completed ? ' matched' : ' ')}
            onClick={() => handleClick(framework)}
        >
        
            <div className='front'>
                ?
            </div>
            <div className='back'>
                <img src={framework.img} alt={framework.name} />

            </div>
        </div>
    )
}

export default Card
