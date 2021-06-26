import React, { useState } from 'react'
import {Controlled as ControlledEditor} from 'react-codemirror2'

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {

    const{
        language,
        displayName,
        value,
        onChange
    } = props

    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value){
        onChange(value)
    }

    return (
        <div className={`editor-main ${displayName}`}>
            <div className="editor-header">
                <h3>{displayName}</h3>
                <button 
                    type="button"
                    className="expand-collapse-btn"
                    onClick={ () => {
                        setOpen( (prevOpen) => {
                            return !!!prevOpen
                        })
                }}> <FontAwesomeIcon icon={ open ? faCompressAlt : faExpandAlt}/> </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper" 
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    )
}