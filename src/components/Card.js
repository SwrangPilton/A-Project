import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({ vid, title, itemId }) {
    const visibility = React.useContext(VisibilityContext)
    const visible = visibility.isItemVisible(itemId)

    return (
        <div
            role="button"
            style={{
                display: "inline-block",
                margin: "0 10px",
                width: "260px",
                userSelect: "none"
            }}
            tabIndex={0}
            className="card"
        >
            <div>
                {/* <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
                    visible: {JSON.stringify(visible)}
                </div> */}
                <iframe title='Wall' className='w-full h-full ' src={vid} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}
