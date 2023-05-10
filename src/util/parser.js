import jsonxml from 'jsontoxml';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseXML = promisify(parseString);

export default class Parser {
  static parseJSONBodyToXML(jsonBody) {
    return jsonxml(jsonBody, { html: true });
  }

  static async convertXMLtoJSON(xmlMessage) {
    const options = { trim: true, explicitArray: false, explicitRoot: false };
    return parseXML(xmlMessage, options);
  }
}


