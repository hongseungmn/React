import Split from 'react-split';
import C2 from './Cont_l';
import { BlocklyWorkspace } from 'react-blockly';
import "../../blocks/blocks.js";
import Blockly from 'blockly';
import {javascriptGenerator} from 'blockly/javascript';
import { useState } from 'react';
import { MY_TOOLBOX } from '../../utils/toolbox';

const MyBlocklyEditor = () => {
  const [xml, setXml] = useState();
  //const [javascriptCode, setJavascriptCode] = useState("");
  console.log("myBlocklyEditor 리 렌더링");

  function workspaceDidChange(workspace) {
    //const code = Blockly.JavaScript.workspaceToCode(workspace);
    //setJavascriptCode(code);
  }

  return (
    <BlocklyWorkspace
      className="comp" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={MY_TOOLBOX} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={setXml}
      onWorkspaceChange={workspaceDidChange}
      workspaceConfiguration={{
        toolbox: MY_TOOLBOX,
        trashcan: true,
        grid: {
          spacing: 15,
          length: 15,
          colour: "#ebebeb",
          snap: true,
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.1,
          pinch: true
        },
        renderer: "zelos"
      }
    }
    />
  );
};


export default function Container() {
  const [sizes, setSizes] = useState([70, 30]);

  const handleDragEnd = (newSizes) => {
    setSizes(newSizes);
  };
  return (<>
  <Split
    className="wrap"
    sizes={[70, 30]}
    minSize={100}
    expandToMin={false}
    gutterSize={10}
    gutterAlign="center"
    snapOffset={30}
    dragInterval={1}
    direction="horizontal"
    cursor="col-resize"
    onDragEnd={handleDragEnd}
  >
    <MyBlocklyEditor />
    <C2 />
  </Split>
  </>)
}