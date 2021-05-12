import React from 'react'
import corn from "../easyimages/vegetables/corn.png"
import cabbage from "../easyimages/vegetables/cabbage.png"
import chilli from "../easyimages/vegetables/chilli.png"
import carrot from "../easyimages/vegetables/carrot.png"
import pepper from "../easyimages/vegetables/pepper.png"
import broccoli from "../easyimages/vegetables/broccoli.png"
export default function Background() {
    return (
        <div id="bg">
            <img className="corn" src={corn} width="42vw"></img>
            <img className="cabbage" src={cabbage} width="50vw"></img>
            <img className="chilli" src={chilli} width="20vw"></img>
            <img className="carrot" src={carrot} width="50vw"></img>
            <img className="pepper1" src={pepper} width="40vw"></img>
            <img className="pepper2" src={pepper} width="40vw"></img>
            <img className="broccoli" src={broccoli} width="42vw"></img>
            <img className="broccoli2" src={broccoli} width="50vw"></img>
        </div>
    )
}
