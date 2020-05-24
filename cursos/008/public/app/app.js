import { log, timeoutPromise, retry } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';
import { EventEmitter } from './utils/event-emitter.js';

// Mônada 
// const textToArray = textM => textM.map(text => Array.from(text));
// const arrayToText = arrayM => arrayM.map(array => array.join(''));

// const transform = pipe(
//     textToArray,
//     arrayToText
// );
// const result = transform(Maybe.of('Canguaceiro'));
// alert(result.getOrElse(''));
// Mônada 

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() =>
    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
        .then(total => EventEmitter.emit('itensTotalizados', total))
        .catch(log)
);

document
    .querySelector('#myButton')
    .onclick = action;

EventEmitter.on('itensTotalizados', total => document.querySelector('#total').innerHTML = total);