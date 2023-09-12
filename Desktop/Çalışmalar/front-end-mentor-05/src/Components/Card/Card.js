import React from 'react'

function Card({
    img,
    music,
    headText,
    paragraph,
    cardHead,
    cardMoney,
    cardLink,
    buttonText,
    canselButton }) {
    return (
        <div className='card'>
            <header>
                <img src={img} alt={img}/>
            </header>
            <article>
                <h1>{headText}</h1>
                <p>{paragraph}</p>
                <div className='music-bar'>

                    <div className='music-left'>
                        {music}
                        <span>
                            <h3>{cardHead}</h3>
                            <h4>{cardMoney}</h4>
                        </span>
                    </div>
                    <h3>
                        {cardLink}
                    </h3>
                </div>
            </article>
            <footer>
                <button className='btn-text'>
                    {buttonText}
                </button>
                <button className='btn-cansel'>
                    {canselButton}
                </button>
            </footer>
        </div>
    )
}

export default Card
