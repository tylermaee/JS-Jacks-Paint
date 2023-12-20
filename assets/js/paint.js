function configureListeners() {
    let images = document.getElementsByTagName('img');// select img elements  


     for (var i = 0; i < images.length; i++) {        
        document.getElementsByTagName(images[i].id).addEventListener('mouseover', mouseOver, addOpacity, false);// iterate over images and add mouseover event listeners      
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if(!this.classList.contains('dim')) {
        this.classList.contains.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     if (this.classList.contains('dim')) {
        this.classList.remove('dim');
     }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':  
            price = '$19.99'
            colorName = 'Lime Green'
            updatedPrice(colorName, price)         
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = '$12.99'
            colorName = 'Medium Brown'
            updatedPrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = '$22.99'
            colorName = 'Royal Blue'
            updatedPrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = '$4.99'
            colorName = 'Solid Black'
            updatedPrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = '$8.22'
            colorName = 'Solid Cyan'
            updatedPrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = '$11.99'
            colorName = 'Solid Purple'
            updatedPrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = '$13.42'
            colorName = 'Solid Red'
            updatedPrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = '$21.98'
            colorName = 'Solid White'
            updatedPrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = '$14.99'
            colorName = 'Solid Yellow'
            updatedPrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;// select element with corresponding id
        // display price
        
        let color = document.getElementById('color-name');
        color.textContent = colorName;// select element with corresponding id
        //display color name
    }
    
}
