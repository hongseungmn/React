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

// int(input("메세지"))
IO += `
<block type="builtin_bk1">
  <field name="NAME">int</field>
  <value name="v1">
    <shadow type="indata">&#10;    </shadow>
    <block type="io_input">
      <value name="content1">
        <shadow type="indata">
          <field name="indata1">"메시지"</field>
        </shadow>
      </value>
    </block>
  </value>
</block>
`;

// list(map(int, input().split()))
IO += `
<block type="io_list_map_int_input">
  <value name="v1">
    <shadow type="indata">
      <field name="indata1">int</field>
    </shadow>
  </value>
  <value name="v2">
    <shadow type="indata">
      <field name="indata1">"메세지"</field>
    </shadow>
  </value>
  <value name="v3">
    <shadow type="indata">
      <field name="indata1">","</field>
    </shadow>
  </value>
</block>
`;

// input().입력문자 조작.()
// IO += `
// <block type="dynamic_dragfill_input">
//   <value name="v1">
//     <shadow type="indata">
//       <field name="indata1">"메세지"</field>
//     </shadow>
//   </value>
//   <value name="add1">
//     <shadow type="indata">
//       <field name="indata1"></field>
//     </shadow>
//   </value>
// </block>
// `;

// 주석
IO += `
<block type="io_comment_dropdown">
  <value name="v1">
    <shadow type="indata">
      <field name="indata1"># 주석(설명문)</field>
    </shadow>
  </value>
</block>
`;

//탭 임포트 블록
IO += `
<block type="import_tab">
  <value name="v1">
    <shadow type="indata">
      <field name="indata1">*</field>
    </shadow>
  </value>
</block>
`

// 사용자 입력 코드 - 파이썬 코드 블록
IO += `
<block type="itdata"></block>
`;

// 빈 블록
IO += `
<block type="io_empty">
  <value name="v1">
    <shadow type="indata">
      <field name="indata1"></field>
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

// # 한 줄 주적
// IO += `
// <block type="io_comment_oneline">
//   <value name="NAME">
//     <shadow type="indata">
//       <field name="indata1">설명문</field>
//     </shadow>
//   </value>
// </block>
// `;

// ''' - 여러줄 주석
// IO += `
// <block type="io_comment"></block>
// `;

IO += `</category>`;
