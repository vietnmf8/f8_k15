import { Tab, Tabs } from "@/components/Tabs";
import React from "react";

function DemoTab() {
    return (
        <Tabs>
            <Tab title="Tab one">
                <p>Content one</p>
            </Tab>

            <Tab title="Tab two">
                <p>Content two</p>
            </Tab>

            <Tab title="Tab three">
                <p>Content three</p>
            </Tab>
        </Tabs>
    );
}

export default DemoTab;
