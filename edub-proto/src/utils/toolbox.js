import { IO } from "./js/IO"

export let MY_TOOLBOX = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "Variables",
      "custom": "VARIABLE"
    },
    {
      "kind": "category",
      "name": "IO",
      "contents": [
        {
          "kind": "block",
          "type": "io_bk1",
          "blockxml": `
          <block type="io_bk1">
          <value name="content1">
            <shadow type="indata">
              <field name="indata1"></field>
            </shadow>
          </value>
        </block>
        `
        },
        {
          "kind": "block",
          "blockxml": `
          <block type="io_bk2">
            <value name="content">
              <shadow type="indata">
                <field name="indata1"></field>
              </shadow>
              <block type="variables_get">
                <field name="VAR">var</field>
              </block>
            </value>
          </block>
          `
        },
        {
          "kind": "block",
          "blockxml": `
          <block type="io_bk3">
            <value name="content1">
              <shadow type="indata">
                <field name="indata1">"메시지"</field>
              </shadow>
            </value>
            <value name="content2">
              <shadow type="indata">
                <field name="indata1"></field>
              </shadow>
              <block type="variables_get">
                <field name="VAR">var</field>
              </block>
            </value>
          </block>
          `
        }
      ]
    },
    {
      'kind': 'search',
      'name': 'Search',
      'contents': [],
    },
  ]
}


//   '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" class="toolbox" style="display:none">';
// MY_TOOLBOX +=
//   ` <category name="TEST" colour="%{BKY_CAT_VAR}" custom="VARIABLE"></category>`;
// MY_TOOLBOX += IO;
// MY_TOOLBOX += "</xml>";