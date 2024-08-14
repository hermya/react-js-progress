import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
    const [tabContent, setTabContent] = useState();
    const [selectedTab, setSelectedTab] = useState();
  
    const handleClick = (selectedButton) => {
      setTabContent(EXAMPLES[selectedButton]);
      setSelectedTab(selectedButton);
    };
    return (
        <section id="examples">
            <h2>
                Examples
            </h2>
            <menu>
                <TabButton onClick={() => handleClick('components')} isSelected={selectedTab == 'components'} >Components</TabButton>
                <TabButton onClick={() => handleClick('jsx')} isSelected={selectedTab == 'jsx'}>JSX</TabButton>
                <TabButton onClick={() => handleClick('props')} isSelected={selectedTab == 'props'}>Props</TabButton>
                <TabButton onClick={() => handleClick('state')} isSelected={selectedTab == 'state'}>States</TabButton>
            </menu>
            {
                !tabContent ?
                    <p>Please select a topic!</p> :
                    <div id="tab-content">
                        <h3>{tabContent.title}</h3>
                        <p>{tabContent.description}</p>
                        <pre>
                            <code>{tabContent.code}</code>
                        </pre>
                    </div>
            }

        </section>);
}