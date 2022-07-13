import React, { useMemo, useState } from 'react'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { onWheel } from '../utils/useOnWheel';
import usePreventBodyScroll from '../utils/usePreventBodyScroll'
import { LeftArrow, RightArrow } from './Arrows';
import { Card } from './Card';
import trending from '../data/trending.json'
import tvshows from '../data/tvshows.json'
import movies from '../data/movies.json'

export default function Shows({ name }) {
    const showType = name.replaceAll(' ', '').toLowerCase()
    console.log(showType)
    const elemPrefix = "test";
    const getId = (index) => `${elemPrefix}${index}`;
    const vid_idx = (index) => index;
    console.log(Object.entries(movies))
    // console.log(links)

    // const shuffle = () => {
    //     return trending.sort(() => (Math.random() > .4) ? 1 : -1);
    // }
    // if (name === "TV Shows") {
    //     shuffle()
    // }
    // shuffle()
    // console.log(shuffle())
    const getItems = useMemo(() =>
        Array(10)
            .fill(0)
            .map((_, ind) => ({
                id: getId(ind),
                vid: showType === 'trending' ? trending[vid_idx(ind)].video : ((showType === 'movies' ? (movies[vid_idx(ind)].video) : (tvshows[vid_idx(ind)].video)))
            })), [])

    const [items] = useState(getItems);
    const { disableScroll, enableScroll } = usePreventBodyScroll();

    return (
        <div className='px-2 pt-4' id={`${showType}`}>
            <h1 className='pl-8 text-2xl font-bold my-4'>{name}</h1>
            <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow}
                    onWheel={onWheel}
                >
                    {items.map(({ vid, id }) => (
                        <Card
                            vid={vid}
                            title={id}
                            itemId={id} // NOTE: itemId is required for track items
                            key={id}
                        />
                    ))}

                </ScrollMenu>
            </div>
        </div>
    )
}
