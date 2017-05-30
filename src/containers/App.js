import React from 'react';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import '../styles/scss/main.scss';

function App() {
  return (
    <div className="app">
      <AceEditor
        mode="javascript"
        onChange={(newValue) => {}}
        name="editor"
        fontSize={14}
        editorProps={{$blockScrolling: true}}
      />
    </div>
  );
}

export default App;
