// GridLayout, JustifiedLayout, FrameLayout, SquareLayout, PackingLayout
import { GridLayout } from "@egjs/react-infinitegrid";

import React, { useState } from 'react'
import Shoe from './Shoe'

const Item = ({
    link,
    width,
    height,
    title,
    url,
    channelLink,
    channelTitle
}) => (
        <div className="item">
            <span className="image-container">
                <img
                    data-width={width}
                    data-height={height}
                    src={url}
                    alt="thumbnail"
                />
            </span>
        </div>
    );

//  onAppend={e => setList(list.concat([<Shoe shoe={shoes[Math.floor(Math.random()*3)]}/>]))}


const Grid = () => {

    const shoes = [
        {
            name: "VALOUR BLUE",
            img_main: "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            imgs_side: [
                "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/c2106819-a9b5-49a2-ab49-6f08c4227cd5/killshot-og-midnight-navy-release-date.jpg"
            ]

        },
        {
            name: "UNIVERSITY GOLD",
            img_main: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/a23c6b2f-246c-41bb-b538-f1ea34069d47/air-jordan-12-university-gold-release-date.jpg",
            imgs_side: [
                "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/c67443ec-6a01-46d4-bd4d-8d6c7fc09e37/air-jordan-12-university-gold-release-date.jpg"
            ]

        },
        {
            name: "PURPLE GRAPE",
            img_main: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/10ad283e-e6e7-4fbe-9445-5f14ec9ff454/air-jordan-5-purple-grape-release-date.jpg",
            imgs_side: [
                "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/54a215ae-e957-4c9d-baeb-026cc533c4bc/air-jordan-5-purple-grape-release-date.jpg"
            ]

        },
        {
            name: "CONCORD SKETCH",
            img_main: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/028eca4c-f0ad-433e-9a46-e1de93ecf4fe/womens-air-jordan-11-low-concord-sketch-release-date.jpg",
            imgs_side: [
                "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/ee21422e-b993-4263-a17f-d5028598e636/womens-air-jordan-11-low-concord-sketch-release-date.jpg"
            ]

        }
    ]

    const [list, setList] = useState([<Shoe shoe={shoes[0]} />, <Shoe shoe={shoes[1]} />, <Shoe shoe={shoes[2]} />])

    return (
        <GridLayout
            options={{
                isConstantSize: true,
            }}
            layoutOptions={{
                margin: 8,
                align: "center"
            }}
            tag="div"
            threshold={100}
            isOverflowScroll={false}
            isEqualSize={false}
            isConstantSize={false}
            useFit={false}
            useRecycle={false}
            horizontal={false}
            percentage={false}
            onAppend={e => setList(list.concat([<Shoe shoe={shoes[Math.floor(Math.random()*3)]}/>]))}
            onPrepend={e => "append"}
            onLayoutComplete={e => "layoutComplete"}
            onImageError={e => "imageError"}
            onChange={e => "change"}>
            {list}
        </GridLayout>
    )
}

export default Grid

