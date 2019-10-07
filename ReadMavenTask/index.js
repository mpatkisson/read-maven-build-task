'use strict';

var tl = require('azure-pipelines-task-lib/task'),
    xpath = require('xpath'),
    dom = require('xmldom');

function run() {
    try {
    var title = '';
    const xml = '<book><title>Harry Potter</title></book>';
    const parser = new dom.DOMParser();
    const doc = parser.parseFromString(xml);
    const node = xpath.select1("//title", doc);
    //const inputString: string = tl.getInput('samplestring', true) || 'bad';
    //if (inputString == 'bad') {
      //tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
      //return;
    //}
    console.log('Hello', node.firstChild.data);
  }
  catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();
