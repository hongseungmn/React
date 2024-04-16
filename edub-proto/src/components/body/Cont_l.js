import Split from 'react-split';
import Editor from '@monaco-editor/react';
import { useEffect } from 'react';
import '@blockly/toolbox-search';


const ComponentB = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      <h1>Component B</h1>
    </div>
  );
};

function C2({code}) {
  // useEffect(() => {
  //   console.log('code',code);
    

  // },[code])
  return (
    //처음에 렌더링은 한 후 useEffect를 통해 코드 부분만 바꿀 수 있을까 setValue 나 그런걸로
    <div>
      <Split className="comp2 intterWrap" sizes={[50, 50]} direction="vertical">
        <Editor 
          height='100%'
          language='python'
          theme='tomorrow'
          value={code}
          options={{
            fontSize: 15,
            minimap: { enabled: false },
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto'
            },
            scrollBeyondLastLine: false,
            automaticLayout: true
          }}
        />
        <ComponentB />
      </Split>
    </div>
  );
}

export default C2;