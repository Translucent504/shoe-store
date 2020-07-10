// GridLayout, JustifiedLayout, FrameLayout, SquareLayout, PackingLayout
import { SquareLayout } from "@egjs/react-infinitegrid";
import React, { useState } from 'react'
import Shoe from './Shoe'
import shoes from '../utils/ImageBunch'

const Grid = ({ cart, handleCart }) => {
    const [list, setList] = useState([])

    const handleAppend = (e) => {
        setList(list.concat([
            list.length >= shoes.length
                ? Math.floor(Math.random() * shoes.length)
                : list.length
        ]))
    }

    return (
        <div>
            {console.log(`above square ${cart}`)}
            <SquareLayout
                options={{
                    isConstantSize: true,
                    isEqualSize: true,
                }}
                layoutOptions={{
                    margin: 14,
                    align: "justify"

                }}
                tag="div"
                threshold={100}
                onAppend={handleAppend}
                onPrepend={e => console.log("prepend")}
                onLayoutComplete={e => console.log("layoutComplete")}
                onImageError={e => console.log("imageError")}
                onChange={e => console.log("change")}>

                {list.map(idx => <Shoe
                        handleCart={handleCart}
                        shoe={shoes[idx]} />)}
            </SquareLayout>
        </div>
    )
}

export default Grid

