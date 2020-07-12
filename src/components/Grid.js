// GridLayout, JustifiedLayout, FrameLayout, SquareLayout, PackingLayout
import { SquareLayout } from "@egjs/react-infinitegrid";
import React, { useState } from 'react'
import Shoe from './Shoe'
import all_shoes from '../utils/ImageBunch'

const Grid = ({ gender, notify, handleCart }) => {
    const [list, setList] = useState([0, 1, 2])
    let shoes = all_shoes

    if (gender !== 'a') {
        shoes = all_shoes.filter(s => s.gender === gender)
        if (Math.max(...list) >= shoes.length) {
            setList([0,1,2])
            return
        }
    }


    const handleAppend = (e) => {
        setList(list.concat([
            list.length >= shoes.length
                ? Math.floor(Math.random() * shoes.length)
                : list.length
        ]))
    }

    return (
        <div>
            <SquareLayout
                options={{
                    isConstantSize: true,
                    isEqualSize: true,
                }}
                layoutOptions={{
                    margin: 14,
                    align: "center"

                }}
                tag="div"
                threshold={100}
                onAppend={handleAppend}>

                {list.map((idx, i) => <Shoe
                    notify={notify}
                    handleCart={handleCart}
                    shoe={shoes[idx]}
                    key={i.toString() + shoes[idx].name} />)}
            </SquareLayout>
        </div>
    )

}

export default Grid

