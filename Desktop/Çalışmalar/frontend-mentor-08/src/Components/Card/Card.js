import React from 'react'

function Card() {
    return (
        <div className='card'>
            <div className='cardback'></div>
            <div className='cart-bottom'>
                <div>
                    <img className='mt-[-50px] ml-28 rounded-full border-4 border-white ' src={process.env.PUBLIC_URL + "/Asset/image-victor.jpg"} alt='victor.png' />
                    <div className='flex flex-col gap-2 m-3 items-center justify-center'>
                        <h1>Victor Crest <span>26</span></h1>
                        <p>London</p>
                    </div>
                </div>
                <hr className='h-[2px] mx-2 my-6 opacity-[0.17] rounded-full bg-text'></hr>
                <div className='flex gap-12 justify-center items-center m-6'>
                    <div>
                        <h2>80K</h2>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h2>803K</h2>
                        <p>Likes</p>
                    </div>
                    <div>
                        <h2>1.4K</h2>
                        <p>Photos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
