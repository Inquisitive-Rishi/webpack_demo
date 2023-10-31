import _ from 'lodash';
import './style.css';
import myIcon from './man.png';


function component() {
    const element = document.createElement('div')
    element.textContent = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const icon = new Image()
    icon.src = myIcon;

    element.appendChild(icon)

    return element;
}

document.body.appendChild(component())