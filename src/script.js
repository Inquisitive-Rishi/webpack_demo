import _ from 'lodash';

function component() {
    const element = document.createElement('div')
    element.textContent = _.join(['Hello', 'Webpack'], ' ');

    return element;
}

document.body.appendChild(component())