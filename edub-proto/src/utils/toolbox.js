
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
