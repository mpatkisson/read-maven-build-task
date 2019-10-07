import tl = require('azure-pipelines-task-lib/task');
import xpath = require('xpath');
import dom = require('xmldom');

async function run() {
  try {
    var title = '';
    const xml = '<book><title>Harry Potter</title></book>';
    const parser = new dom.DOMParser();
    const doc = parser.parseFromString(xml);
    const node = xpath.select("//title", doc);
    //const inputString: string = tl.getInput('samplestring', true) || 'bad';
    //if (inputString == 'bad') {
      //tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
      //return;
    //}
    console.log('Hello', node[0].toString());
  }
  catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();
