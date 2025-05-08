
document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.getElementById('main-title');
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const elementContainer = document.getElementById('element-container');
    const contentSection = document.getElementById('content-section');
    
    let elementAdded = false;
    
    const textOptions = [
        "This text will change when you click the button below!",
        
    ];
    let currentTextIndex = 0;
    
    function changeText() {
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        dynamicText.textContent = textOptions[currentTextIndex];
        
        mainTitle.textContent = "Interactive Page - Text Changed " + (currentTextIndex + 1) + " times";
    }
    
    function changeStyle() {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                               ${Math.floor(Math.random() * 256)}, 
                               ${Math.floor(Math.random() * 256)})`;
        
        contentSection.style.backgroundColor = randomColor;
        
        contentSection.style.color = getBrightness(randomColor) > 128 ? 'black' : 'white';
        
        contentSection.style.border = '2px solid #333';
        
        dynamicText.style.fontSize = (16 + (currentTextIndex * 2)) + 'px';
    }
    
    function getBrightness(color) {
        const rgb = color.match(/\d+/g);
        return (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    }
    
    function toggleElement() {
        if (!elementAdded) {
            const newElement = document.createElement('div');
            newElement.className = 'new-element';
            newElement.id = 'new-element';
            
            newElement.innerHTML = `
                <h3>Dynamically Added Element</h3>
                <p>This element was created using JavaScript's DOM manipulation methods.</p>
                <p>Click the button again to remove this element.</p>
            `;
            
            elementContainer.appendChild(newElement);
            
            toggleElementBtn.textContent = 'Remove Element';
            
            elementAdded = true;
        } else {
            const elementToRemove = document.getElementById('new-element');
            elementContainer.removeChild(elementToRemove);
            
            toggleElementBtn.textContent = 'Add New Element';
            
            elementAdded = false;
        }
    }
    
    changeTextBtn.addEventListener('click', changeText);
    changeStyleBtn.addEventListener('click', changeStyle);
    toggleElementBtn.addEventListener('click', toggleElement);
    
    console.log('Interactive page loaded successfully!');
});