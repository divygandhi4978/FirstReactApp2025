import React, { useState } from 'react'

export default function ViewMode() {


    const [style, newStyle] = useState(
        {
            color: 'black',
            backgroundColor: 'whitesomke'
        }
    )

    const [btnText, newText] = useState('Dark Mode')

    const btn = () => {
        if (style.color === 'black') {
            newStyle({
                color: 'whitesmoke',
                backgroundColor: 'black'
            })
            newText('Light-Mode')
        }
        else {
            newStyle({
                color: 'black',
                backgroundColor: 'whitesmoke'
            })
            newText('Dark-Mode')
        }

    }

    return (
        <div className='container my-5 py-5 px-5' style={style}>
            <div className="accordion accordion-flush" style={style} id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={style}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={style}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={style}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>

            <div classNameName="container">
                <button type="button" className="btn btn-primary my-5" onClick={btn}>{btnText}</button>
                <div className="form-check form-switch" onClick={btn} >
                    <input className="form-check-input" type="checkbox" role="switch"  id="flexSwitchCheckDefault" />
                    {/* <label className="form-check-label" for="flexSwitchCheckDefault" onClick={btn}></label> */}
                </div>
            </div>
        </div>
    )
}
