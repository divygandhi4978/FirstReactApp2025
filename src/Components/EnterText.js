//By this module learned about "State" and "EventHandeling"

import React, { useState } from "react";

export default function EnterText(props) {
    const [text, setText] = useState('');
    // text = "dg" //Wrong way to set the text value
    // setText("updated") //Correct way

    const clickBtn = () => {
        console.log(text);
        // console.log(text.split(' ')[0]);
        let newText = text.toUpperCase() + " [ Learned State variable and Event Handeling ]"
        setText(newText)
        props.showAlert("Converted to Uppercase.!", "success")
    }

    const changed = (event) => {
        setText(event.target.value)
    }

    const [txt, newTxt] = useState('')

    function inShort() {
        let newtxt = txt.split(' ')
        let dt = newtxt[0][0].toUpperCase() + '.' + newtxt[1][0].toUpperCase() + '.' + newtxt[2]
        console.log(dt);
        props.showAlert("Converted to shortform.!", "success")

        createEle(dt)
    }

    function createEle(innert) {
        const dp = document.createElement("h5")
        dp.innerHTML = `<h5 class='dta'> Shortened Name : ${innert}</h5>`
        document.getElementById("101").append(dp)

    }

    const onChangeName = (event) => {
        newTxt(event.target.value)
    }

    function clickBtnLwr() {
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase.!", "success")

    }

    function clrPage() {
        window.location.reload()
    }

    function findEmail() {
        const dd = text.split(" ")
        let flag = 0

        for (let i = 0; i < dd.length; i++) {
            if (dd[i].toLowerCase().endsWith('gmail.com')) {
                showEmail(dd[i]);
                flag = 1
                console.log('founddd');

            }
        }

        if (!flag) {
            props.showAlert("No email found.!", "danger")
        }
    }

    function showEmail(value) {
        const dp = document.createElement("p")
        dp.innerHTML = `<h5 class='dta'> ${value}</h5>`
        document.getElementById("1011").append(dp)
    }

    return (
        <div className="container my-3" style={props.mode === 'dark' ? { backgroundColor: "#122932", color: "whitesmoke" } : { backgroundColor: "white", color: "black" }}>
            <div className="mb-3" id="1011">
                <h1 htmlFor="exampleFormControlTextarea1" className="form-label">
                    {props.head}
                </h1>
                <input type="text"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Enter data here"
                    value={text}
                    onChange={changed}
                ></input>
                <button className="btn btn-primary my-3" onClick={clickBtn}>UpperCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={clickBtnLwr}>LowerCase</button>
                <button className="btn btn-dark my-3" onClick={findEmail}>Find Email-id in the text</button>


            </div>

            <div className="mb-3" id="101">
                <h1 htmlFor="exampleFormControlTextarea1" className="form-label">
                    Enter Name here [ 3 Words required. ]:
                </h1>
                <textarea rows={4}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={txt}
                    placeholder="Enter name to make it shorter.!"
                    onChange={onChangeName}
                ></textarea>

                <div className="container">
                    <p className="my-2">Number of Word : {txt.split(" ").length} , Character : {txt.length} <br /></p>
                    <h8>Average Reader will require <b>{txt.length * 0.00518134715026} seconds</b> time to read.</h8>
                </div>
                <button className="btn btn-success my-3" id="bt101" onClick={inShort}>Short form</button>
                <button className="btn btn-danger my-3 mx-3" id="bt101" onClick={clrPage}>Page Reload</button>

                <div className="container">
                    <h4>Preview</h4>
                    <div className="dta">{txt.length > 0 ? txt : "Enter in Above text area to show here."}</div>
                </div>
            </div>


        </div>


    );
}
