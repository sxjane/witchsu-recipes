import * as React from "react";
import { FrameLayout } from "@egjs/react-infinitegrid";

import pancake from '../../images/g11.jpeg'

function getItems(nextGroupKey, nextKey, count) {
    const nextItems = [];

    for (let i = 0; i < count; ++i) {
        nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
    }
    return nextItems;
}
const Item = ({ num }) => <div className="item">
    <div className="thumbnail">
        <img
            src={pancake}
            alt="pancake"
        />
    </div>
    <div className="info">{`egjs ${num}`}</div>
</div>;

export default function Gallery() {
    const [items, setItems] = React.useState(getItems(0, 0, 10));

    return <div>
        <FrameLayout
            className="framelayout container"
            groupBy={item => item.props["data-groupkey"]}
            options={{
                isOverflowScroll: false,
                useFit: true,
                useRecycle: true,
                horizontal: false,
            }}
            layoutOptions={{
                margin: 5 ,
                itemSize: 0,
                frame: [[1,1,2,3,4,4],[5,5,6,7,4,4],[5,5,8,9,9,10]],
                frameFill: false,
            }}
            onAppend={e => {
      
                const nextGroupKey = e.groupKey? e.groupKey + 1 : 1
                const nextKey = items.length;

                setItems([
                    ...items,
                    ...getItems(nextGroupKey, nextKey, 10),
                ]);
            }}>
            {items.map(item => <Item data-groupkey={item.groupKey} key={item.key} num={item.key} />)}
        </FrameLayout>
    </div>;
}