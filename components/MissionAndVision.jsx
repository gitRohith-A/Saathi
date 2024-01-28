import React from 'react'
import missCard from '../public/missionAndVision/missCard.png'
import vissCard from '../public/missionAndVision/viscard.png'
import Image from 'next/image'

function MissionAndVision() {
    return (
        <section className='mission' id='mission'>
            <div className="container">

                <div className="d-flex justify-content-center">
                    <h1 className='fs-38'>Mission and Vision</h1>
                </div>

                <div className="card my-5">
                    <div className="card-container">
                        <Image src={missCard} height={460} width={600} alt='miss' />
                        <div className="description ">
                            <div className="head fw-bold fs-22">Mission</div>
                            <div className="miss-body">
                                Our mission is to reach all the elderly people who are passionate about being independent and keeping themselves engaged in life by providing them with the opportunities they are seeking.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-container">
                        <div className="description ">
                            <div className="head fw-bold fs-22">Vision</div>
                            <div className="miss-body">
                                Our Vision is to make the ignored part of the society ; i.e the elderly sector of people , become independent and live a better standard of life.
                            </div>
                        </div>
                        <Image src={vissCard} height={460} width={600} style={{ borderRadius: '0 8px 8px 0px' }} alt='vis' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionAndVision
