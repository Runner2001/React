import { compose, pipe } from 'lodash/fp';


const input = '   JavaScript   ';

const trim = (str) => str.trim();
const wrapIndiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();
 
//functional programming style
const result = wrapIndiv(toLowerCase(trim(input)));

//using Lodash
//compose

const transform = compose(wrapIndiv, toLowerCase, trim);
transform(input);

//pipe
const useingpipe = pipe(trim, toLowerCase, wrapIndiv);
useingpipe(input);
