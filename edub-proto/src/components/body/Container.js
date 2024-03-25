import Split from 'react-split';
import C2 from './Cont_l';
import { BlocklyWorkspace } from 'react-blockly';
import { useState } from 'react';
import { MY_TOOLBOX } from '../../utils/toolbox';

const MyBlocklyEditor = () => {
  const [xml, setXml] = useState();

  return (
    <BlocklyWorkspace
      className="comp" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={MY_TOOLBOX} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={setXml}
    />
  )
};


function C1() {
  return (
  <>
    <div class="comp">
      <MyBlocklyEditor/>
    </div>
  </>
  );
}
export default function Container() {
  return (<>
    <Split
    class="wrap"
    sizes={[70, 30]}
    minSize={100}
    expandToMin={false}
    gutterSize={10}
    gutterAlign="center"
    snapOffset={30}
    dragInterval={1}
    direction="horizontal"
    cursor="col-resize"
      >
    <MyBlocklyEditor />
    <C2 />
  </Split>
  </>)
}