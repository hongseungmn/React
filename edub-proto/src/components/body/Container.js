import Split from 'react-split';
import C2 from './Cont_l';


function C1() {
  return <div class="comp">Component 1 </div>;
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
    <C1 />
    <C2 />
  </Split>
  </>)
}