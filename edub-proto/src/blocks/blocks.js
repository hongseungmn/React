import Blockly from 'blockly';
import {pythonGenerator,Order} from 'blockly/python';

// 코드 - 파이썬 부분 코드(만능)
Blockly.Blocks["indata"] = {
    init: function () {
    this.appendDummyInput().appendField(
        new Blockly.FieldTextInput("코드"),
        "indata1"
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
    this.setTooltip("");
    this.setHelpUrl("");
    },
};

// 코드 - 파이썬 부분 코드(만능)
pythonGenerator.forBlock["indata"] = function (block,generator) {
    var text_modified_col = block.getFieldValue("indata1");
    // TODO: Assemble Python into code variable.
    var code = text_modified_col;
    return [code, Order.NONE];
};


//io_bk1 - print()
Blockly.Blocks["io_bk1"] = {
    init: function () {
    this.appendDummyInput()
        .appendField("LANGUAGE.IO.print.NAME").appendField('(');
    this.appendValueInput("content1").setCheck("String");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("io_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
    },


};
pythonGenerator.forBlock["io_bk1"] = function (block,generator) {
  // Collect argument strings.
    var fieldValue = block.getFieldValue('content1');
    var innerCode = generator.valueToCode(block, 'content1', Order.ATOMIC);
    return 'my code string';
};

//io_bk2 - print(var) - 결과 출력
Blockly.Blocks["io_bk2"] = {
    init: function () {
    this.appendDummyInput()
        .appendField("LANGUAGE.IO.print.NAME").appendField('(');
    this.appendValueInput("content").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("io_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
    },
};

pythonGenerator.forBlock["io_bk2"] = function (block,generator) {
    var value_content = generator.valueToCode(
    block,
    "content",
    Order.ATOMIC
    );
    // TODO: Assemble Python into code variable.
    var code = "print(" + value_content + ")\n";
    return code;
};

//io_bk3 print("메시지", var) - 결과 출력 text + var
Blockly.Blocks["io_bk3"] = {
    init: function () {
    this.appendDummyInput()
        .appendField("LANGUAGE.IO.print.NAME").appendField('(');
    this.appendValueInput("content1").setCheck(null);
    this.appendDummyInput().appendField(", ");
    this.appendValueInput("content2").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("io_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
    },
};
// print("메시지", var) - 결과 출력 text + var
pythonGenerator.forBlock["io_bk3"] = function (block,generator) {
    var value_content1 = generator.valueToCode(
    block,
    "content1",
    Order.ATOMIC
    );
    var value_content2 = generator.valueToCode(
    block,
    "content2",
    Order.ATOMIC
    );
    // TODO: Assemble Python into code variable.
    var code = `print(${value_content1}, ${value_content2})\n`;
    return code;
};

//io_bk5 - f-string
Blockly.Blocks['io_bk4'] = {
    init: function () {
    const options = [
        ["변수사용", "{var}"],
        ["산술연산", "{var*2}"],
        ["함수사용", "{round(var)}"],
        ["숫자에콤마", "{var:,}"],
        ["소수점자리", "{var:.2f}"],
        ["소수점자리", "{var:20.2f}"],
        ["왼쪽정렬", "{var:20}"],
        ["가운데정렬", "{var:^20}"],
        ["오른쪽정렬", "{var:>20}"],
    ];
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(options,this.checkDpField),"NAME").appendField("f \"");
    this.appendValueInput("v1")
        .setCheck(null);
    this.appendDummyInput().appendField("\" ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("io_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
    },
    checkDpField: function(field) {
    const childs = this.sourceBlock_.childBlocks_;
    let value = "";
    
    switch(field) {
        case "{var}":
        value = `변수값은 {var}`;
        break;
        case "{var*2}":
        value = `산술연산 {var*2}`;
        break;
        case "{round(var)}":
        value = `함수사용 {round(var)}`;
        break;
        case "{var:,}":
        value = `숫자에콤마 {var:,}`;
        break;
        case "{var:.2f}":
        value = `소수점2자리 {var: .2f}`;
        break;
        case "{var:20.2f}":
        value = `20자리중소수점2자리 {var:20.2f}`;
        break;
        case "{var:20}":
        value = `20자리왼쪽정렬 {var:20}`;
        break;
        case "{var:^20}":
        value= `20자리가운데정렬 {var:^20}`;
        break;
        case "{var:>20}":
        value= `20자리오른쪽정렬 {var: >20}`;
        break;
    }
    for (let b of childs) {
        if (b.isShadow_) b.setFieldValue(value, "indata1");
    }
    }
};

pythonGenerator.forBlock['io_bk4'] = function(block,generator) {
    var dropdown = block.getFieldValue('NAME');
    var value_v1 = generator.valueToCode(block,generator, 'v1', Order.ATOMIC);
    var code = `f"${value_v1}"`;

    return [code, Order.ATOMIC];
};


//io_bk5 input("메시지") - 형변환 + 데이터입력
Blockly.Blocks["io_bk5"] = {
    init: function () {
    this.appendDummyInput()
        .appendField("LANGUAGE.IO.input.NAME").appendField("(");
    this.appendValueInput("content1").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("io_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
    },
};
// input("메시지") - 형변환 + 데이터입력
pythonGenerator.forBlock["io_bk5"] = function (block,generator) {
    var value_content1 = generator.valueToCode(
    block,
    "content1",
    Order.ATOMIC
    );
    // TODO: Assemble Python into code variable.
    var code = "input(" + value_content1 + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return code
};

Blockly.Blocks['io_bk6'] = {
    init: function() {
    this.appendValueInput("v1")
        .appendField('#')
        .setCheck(null);
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("io_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['io_bk6'] = function(block,generator) {
    var value_v1 = generator.valueToCode(block,generator, 'v1', Order.ATOMIC);
    var statements_name = generator.statementToCode(block,generator, 'NAME');
    var code = `# ${value_v1}\n${statements_name}`;
    return code;
}


//탭 임포트 블록
Blockly.Blocks['import_tab'] = {
    init: function () {
    const options = [['Block1', 'Block1'], ['Block2', 'Block2'], ['Block3', 'Block3']];
    this.appendDummyInput()
        .appendField('from')
        .appendField(new Blockly.FieldDropdown(options), "NAME");
    this.appendValueInput("v1")
        .appendField('import')
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("io_blocks_sub");
    this.setTooltip('');
    this.setHelpUrl('');
    },
};

pythonGenerator.forBlock["import_tab"] = function (block,generator) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_v1 = generator.valueToCode(block,generator, 'v1', Order.ATOMIC);
    var code = `from ${dropdown_name} import ${value_v1}\n`
    return code;
};