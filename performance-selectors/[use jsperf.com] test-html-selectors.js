function getDOM(targetType, targetElement) {
    let element = '';
    if (targetType === 'id') {
        element = document.getElementById(targetElement);
    }
    if (targetType === 'class') {
        element = document.getElementsByClassName(targetElement);
    }
    if (targetType === 'tag') {
        element = document.getElementsByTagName(targetElement)[0];
    }
    return element;
}

// Single ID:
{
    // [Single ID] Long getElementById
    document.getElementById('bJMfEMUQuRnNCYDcuBIH');
    // [Single ID] Short getElementById
    document.getElementById('foo');

    // [Single ID] Long querySelector ID
    document.querySelector('#bJMfEMUQuRnNCYDcuBIH');
    // [Single ID] Short querySelector ID
    document.querySelector('#foo');

    // [Single ID] Long Abstracted
    getDOM('id', 'bJMfEMUQuRnNCYDcuBIH');
    // [Single ID] Short Abstracted
    getDOM('id', 'foo');

}

// Single Class:
{
    // [Single Class] Long getElementsByClassName
    document.getElementsByClassName('bJMfEMUQuRnNCYDcuBIH')[0];
    // [Single Class] Short getElementsByClassName
    document.getElementsByClassName('foo')[0];

    // [Single Class] Long querySelector Class
    document.querySelector('.bJMfEMUQuRnNCYDcuBIH');
    // [Single Class] Short querySelector Class
    document.querySelector('.foo');
}

// All Class;
{
    // [Multi Class] getElementsByClassName
    document.getElementsByClassName('multiple');

    // [Multi Class] Multiple querySelector Class
    document.querySelectorAll('.multiple');

    // [Multi Class] Multiple Abstracted
    getDOM('class', 'multiple');
}