import React, { useState } from 'react'
import { BsChevronRight } from "react-icons/bs";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { onWheel } from '../utils/useOnWheel';
import usePreventBodyScroll from '../utils/usePreventBodyScroll'
import { LeftArrow, RightArrow } from './Arrows';
import { Card } from './Card';


const moviesData = [
    {
        id: 1,
        name: 'Stranger Things',
        video: 'https://www.youtube.com/embed/sBEvEcpnG7k',
        genre: ['Horror', 'Sci-fi', 'TV Series'],
        plot: 'After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters',
    },
    {
        id: 2,
        name: 'Detective Conan',
        video: 'https://www.youtube.com/embed/5DcWtjrYcFI',
        genre: ['Drama', 'Thriller', 'TV Series'],
        plot: 'The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all.',
    }
]

export default function Shows({ name }) {

    const elemPrefix = "test";
    const getId = (index) => `${elemPrefix}${index}`;
    const getItems = () =>
        Array(20)
            .fill(0)
            .map((_, ind) => ({ id: getId(ind) }));

    const [items] = useState(getItems);
    // items[0].push({ 'title': 'one two three' })
    console.log(items[0])
    const { disableScroll, enableScroll } = usePreventBodyScroll();

    return (
        <div className='px-2 pt-4 '>
            <h1 className='pl-8 text-2xl font-bold my-4'>{name}</h1>
            <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow}
                    onWheel={onWheel}
                >
                    {items.map(({ id }) => (
                        <Card
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
