import { Injectable } from '@angular/core';

@Injectable()


export class ComponentGeneratorService {
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
