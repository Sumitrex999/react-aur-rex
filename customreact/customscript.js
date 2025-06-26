
// function customRender(reactElement,  container) {
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML= reactElement.Children
//     domElement.setAttribute('href', reactElement.props.href);
//     domElement.setAttribute('target', reactElement.props.target);
//     container.appendChild(domElement);

// }

function customRender(reactElement,  container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.Children;
    for (const prop in reactElement.props) {
        if (prop === 'Children') continue; // Skip Children prop
        domElement.setAttribute(prop, reactElement.props[prop]);
    } 
   
    container.appendChild(domElement);

}


const reactElement = {
    type:'a',
    props:{
        href:'https://googgle.com',
        target:'_blank'
    },
    Children: 'Click me to visit google',
}


const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);