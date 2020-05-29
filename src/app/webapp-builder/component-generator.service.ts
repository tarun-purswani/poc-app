import { Injectable } from '@angular/core';

/**
 * Purpose of this service is to generate components for the calling components
 * It takes metadata as input, which is most likely an html element name or an html input type
 */

@Injectable()


export class ComponentGeneratorService {

  // this map is simply html elements written in stringified format, a very basic implementation
  // a future improvement would be asking user for attributes like readonly, disabled, classes, id etc  
  // this can be done in various ways but to keep it simple this is done as follows:
  public metaDataMap = {
    'Textfield': '<input type="text" placeholder="Enter some text..." />',
    'Dropdown' : '<select><option>Option 1</option><option>Option 2</option></select>',
    'Divider' : '<hr style="border:1px solid #666">',
    'Time' : '<input type="time" />',
    'Table' : '<table class="table table-bordered table-condensed"><tbody><tr><td>a</td><td>b</td><td>c</td></tr><tr><td>x</td><td>y</td><td>z</td></tr></tbody></table>',
    'Button' : '<button type="button">Button, Click!</button>'
  };

  constructor() { }

}
