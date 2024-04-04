export let IO = `<category name = "IO" colour = "%{BKY_CAT_IO}">`;

// print()
IO += `
<block type="io_bk1">
  <value name="content1">
    <shadow type="indata">
      <field name="indata1"></field>
    </shadow>
  </value>
</block>
`;

// print(var)
IO += `
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
`;

// print("메시지", var)
IO += `
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
`;

// // print(f"문자열형식화(f-string)")
// IO += `
// <block type="dynamic_dragfill_print">
// </block>
// `;

IO += `
<block type="io_bk1">
  <value name="content1">
    <shadow type="indata">
      <field name="indata1"></field>
    </shadow>
    <block type="io_bk4">
      <field name="NAME">{var}</field>
      <value name="v1">
        <shadow type="indata">
          <field name="indata1">{var}</field>
        </shadow>
      </value>
    </block>
  </value>
</block>
`;

// input("메시지")
IO += `
  <block type="io_bk5">
    <value name="content1">
      <shadow type="indata">
        <field name="indata1">"메시지"</field>
      </shadow>
    </value>
  </block>
`;



// 복사용 블럭
IO += `
<block type="io_bk6">
  <value name="v1">
    <shadow type="indata">
      <field name="indata1">주석</field>
    </shadow>
  </value>
</block>
`;

IO += `</category>`;
