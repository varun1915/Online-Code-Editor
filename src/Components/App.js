import React, { useEffect, useState } from 'react';
import Editor from './Editor';
import useLocalStorage from '../hooks/useLocalStorage';

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"


function App() {

  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useLocalStorage('');

  useEffect(() => {
    const timeout = setTimeout( () => {
      setSrcDoc (`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
 
  return (
    <div className="container">
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>  
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>  
        <Editor language="js" displayName="JS" value={js} onChange={setJs}/>  
      </div>

      <div className="bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );  
}

export default App;

