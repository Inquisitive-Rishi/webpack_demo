import _ from 'lodash';
import './style.css';
import myIcon from './man.png';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div')
    element.textContent = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const icon = new Image()
    icon.src = myIcon;

    console.table(Data)
    console.table(Notes)

    element.appendChild(icon)

    return element;
}

document.body.appendChild(component())