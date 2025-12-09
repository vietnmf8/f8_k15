/* eslint-disable react/prop-types */
import React, { useMemo, useState } from "react";

/* Tabs */
function Tabs({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleActive = (index) => {
        setActiveIndex(index);
    };

    // Tabs
    const tabs = useMemo(() => {
        return children.map((child) => ({
            title: child.props.title,
            content: child.props.children,
        }));
    }, [children]);

    return (
        <div className="tabs">
            <div className="tab-list">
                {tabs.map((tab, index) => (
                    <div
                        onClick={() => handleActive(index)}
                        className={`tab-item${index === activeIndex ? " active" : ""}`}
                        key={index}
                    >
                        {tab.title}
                    </div>
                ))} 
            </div>

            <div className="tab-content">{tabs[activeIndex].content}</div>
        </div>
    );
}

/* Tab */
function Tab({ children }) {
    return <div title="Tab one">{children}</div>;
}

/* Tab Content */
function TabContent({ children }) {
    return <div>{children}</div>;
}

export { Tabs, Tab, TabContent };
