import { IO } from "./js/IO"

export let MY_TOOLBOX =
  '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" class="toolbox" style="display:none">';
MY_TOOLBOX +=
  ` <category name="TEST" colour="%{BKY_CAT_VAR}" custom="VARIABLE"></category>`;
MY_TOOLBOX += IO;
MY_TOOLBOX += "</xml>";