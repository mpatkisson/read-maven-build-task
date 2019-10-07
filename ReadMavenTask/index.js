"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("azure-pipelines-task-lib/task");
const xpath = require("xpath");
const dom = require("xmldom");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
run();
