import Split from 'react-split';

const ComponentA = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      <h1>Component A</h1>
    </div>
  );
};
const ComponentB = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      <h1>Component B</h1>
    </div>
  );
};

function C2() {
  return (
    <div>
      <Split class="comp2 intterWrap" sizes={[50, 50]} direction="vertical">
        <ComponentA />
        <ComponentB />
      </Split>
    </div>
  );
}

export default C2;