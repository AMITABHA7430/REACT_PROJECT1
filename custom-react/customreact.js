function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    
    domElement.innerHTML = reactElement.children;

    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'click me to visit google'  // ❗ Fixed typo here
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
