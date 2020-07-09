// GridLayout, JustifiedLayout, FrameLayout, SquareLayout, PackingLayout
import {SquareLayout } from "@egjs/react-infinitegrid";
import React, { useState } from 'react'
import Shoe from './Shoe'
import airmax_main from '../images/air-max_main.webp'
import airmax_side from '../images/air-max_side.webp'
import animal_main from '../images/animal-instinct_main.webp'
import animal_side from '../images/animal-instinct_side.webp'
import anthracite_main from '../images/anthracite_main.webp'
import anthracite_side from '../images/anthracite_side.webp'
import barelyvolt_main from '../images/barely-volt_main.webp'
import barelyvolt_side from '../images/barely-volt_side.webp'
import chill_main from '../images/chill_main.webp'
import chill_side from '../images/chill_side.webp'
import duckcamo_main from '../images/duck-camo_main.webp'
import duckcamo_side from '../images/duck-camo_side.webp'
import graffiti_main from '../images/graffiti_main.webp'
import graffiti_side from '../images/graffiti_side.webp'
import homeaway_main from '../images/home-away_main.webp'
import homeaway_side from '../images/home-away_side.webp'
import hype_main from '../images/hype_main.webp'
import hype_side from '../images/hype_side.webp'
import midnightnavy_main from '../images/midnight-navy_main.webp'
import midnightnavy_side from '../images/midnight-navy_side.webp'
import mvp_main from '../images/mvp_main.webp'
import mvp_side from '../images/mvp_side.webp'
import n7_main from '../images/n7_main.webp'
import n7_side from '../images/n7_side.webp'
import paleivory_main from '../images/pale-ivory_main.webp'
import paleivory_side from '../images/pale-ivory_side.webp'
import pcg_main from '../images/pcg_main.webp'
import pcg_side from '../images/pcg_side.webp'
import tealtint_main from '../images/teal-tint_main.webp'
import tealtint_side from '../images/teal-tint_side.webp'
import tiedye_main from '../images/tie-dye_main.webp'
import tiedye_side from '../images/tie-dye_side.webp'
import voltblack_main from '../images/volt-black_main.webp'
import voltblack_side from '../images/volt-black_side.webp'



const Grid = () => {

    const shoes = [
        {
            name: "CHILL",
            img_main: chill_main,
            img_side: chill_side
        },
        {
            name: "AIR MAX",
            img_main: airmax_main,
            img_side: airmax_side
        },
        {
            name: "ANIMAL INSTINCT",
            img_main: animal_main,
            img_side: animal_side
        },
        {
            name: "ANTHRACITE",
            img_main: anthracite_main,
            img_side: anthracite_side
        },
        {
            name: "BARELY VOLT",
            img_main: barelyvolt_main,
            img_side: barelyvolt_side
        },
        {
            name: "DUCK CAMO",
            img_main: duckcamo_main,
            img_side: duckcamo_side
        },
        {
            name: "GRAFFITI",
            img_main: graffiti_main,
            img_side: graffiti_side
        },
        {
            name: "HOME AWAY",
            img_main: homeaway_main,
            img_side: homeaway_side
        },
        {
            name: "HYPE",
            img_main: hype_main,
            img_side: hype_side
        },
        {
            name: "MIDNIGHT NAVY",
            img_main: midnightnavy_main,
            img_side: midnightnavy_side
        },
        {
            name: "MVP",
            img_main: mvp_main,
            img_side: mvp_side
        },
        {
            name: "N7",
            img_main: n7_main,
            img_side: n7_side
        },
        {
            name: "PALE IVORY",
            img_main: paleivory_main,
            img_side: paleivory_side
        },
        {
            name: "PCG",
            img_main: pcg_main,
            img_side: pcg_side
        },
        {
            name: "TEAL TINT",
            img_main: tealtint_main,
            img_side: tealtint_side
        },
        {
            name: " TIE DYE",
            img_main: tiedye_main,
            img_side: tiedye_side
        },
        {
            name: "VOLT BLACK",
            img_main: voltblack_main,
            img_side: voltblack_side
        },
    ]

    const [list, setList] = useState([<Shoe shoe={shoes[0]}/>,
        <Shoe shoe={shoes[1]}/>,
        <Shoe shoe={shoes[2]}/>])

    return (
        <SquareLayout
            options={{
                isConstantSize: true,
                isEqualSize: true,
            }}
            layoutOptions={{
                margin: 14,
                align:"justify"
        
            }}
            tag="div"
            threshold={100}
            onAppend={e => setList(list.concat([<Shoe shoe={list.length>=shoes.length ? shoes[Math.floor(Math.random() * shoes.length)] :shoes[list.length]} />]))}
            onPrepend={e => "append"}
            onLayoutComplete={e => "layoutComplete"}
            onImageError={e => "imageError"}
            onChange={e => "change"}>
            {list}
        </SquareLayout>
    )
}

export default Grid

