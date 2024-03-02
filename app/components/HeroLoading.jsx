"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from next

// Load AceEditor dynamically to prevent SSR errors
const AceEditor = dynamic(import('react-ace'), { ssr: false });

// Import necessary Ace modes and themes
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/theme-github'
 // You can choose your preferred theme

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (value) => {
    setCode(value);
  };

  const handleRun = () => {
    try {
      // Here you can execute the code using eval or some other method
      // For simplicity, we'll just log the output to the console
      console.log(eval(code));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Code Editor</h2>
      <div>
        <AceEditor
          mode="javascript"
          theme="github"
          onChange={handleChange}
          name="code_editor"
          editorProps={{ $blockScrolling: true }}
          value={code}
          setOptions={{
            fontSize: '14px',
            tabSize: 2,
          }}
          style={{ width: '100%', minHeight: '400px' }}
        />
      </div>
      <button onClick={handleRun}>Run</button>
      <div>
        <h3>Output</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
