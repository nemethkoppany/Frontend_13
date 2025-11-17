import {useState} from 'react';
import TabButton from "./tab-button.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples(){
     /*
    a tabContent most egy tömb
    tabContent[0] -> state jelenlegi állapota
    tabContent[1] -> függvény, amellyel megváltoztatható a state állapota (set)
  */
    const [tabContent, setTabContent] = useState(undefined);

  function handleSelect(button) {
    setTabContent(button);
  }

  function exampleContent(){
    return(
        <>
        {!tabContent && <p>Please click a button</p> }

        {tabContent && (
          <section id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
            <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </section>
        )}
        </>
    )
  }
  const buttonLabels = ['Components','JSX','Props','State']
    return(
        
        <section id="examples">
        <h2>Examples</h2>
        <menu>

            {buttonLabels.map(b => <TabButton onSelect={()=>handleSelect(b.toLowerCase())} 
            isActive={tabContent == b.toLowerCase}
            key={b} >{b}</TabButton>)}


            {/* Ilyen volt */}
          {/* <TabButton
            onSelect={() => handleSelect("components")}
            isActive={tabContent == "components"}
          >
            Components
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("jsx")}
            isActive={tabContent == "jsx"}
          >
            JSX
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("props")}
            isActive={tabContent == "props"}
          >
            Props
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("state")}
            isActive={tabContent == "state"}
          >
            State
          </TabButton> */}
        </menu>
        {exampleContent()}
      </section>
    )
}