

const arrayOfColumns = [];

const columnsContainer =document.getElementById('columns-container');

const column = document.querySelectorAll('column');

let addColumnBtn = document.getElementById('add-column');

let columnCounter = 0;



const drawNumbers = () => {
        
    //numbersInColumn.splice(0, numbersInColumn.length) //clear array

    let numbersInColumn = [];

    while(numbersInColumn.length < 7){

        let newNumber = Math.floor(Math.random()*49);

        if(!numbersInColumn.includes(newNumber)){
            numbersInColumn.push(newNumber)
        }
    }

    numbersInColumn.sort((a,b) => { return a - b }); //sort array
    console.log(numbersInColumn);

    arrayOfColumns.push(numbersInColumn)
    //arrayOfColumns.push([Math.floor(Math.random()*7)])
    
    console.log(arrayOfColumns)
    
}

const displayNumbers = (column) => {
    const drawnNumbers = arrayOfColumns[arrayOfColumns.length -1];
    let counter = 0;
    
    let columnGrid = `<div id="grid-numbers">`
    while(counter < 49){
        columnGrid += `
            <div class="grid-item-number"><span class="num-input ${drawnNumbers.includes(counter + 1) ? 'highlighted' : '' }" >${counter+1}</span></div>
        `;
        counter++;
    }
    columnGrid += `</div><div class="column-counter"><span >Sloupec ${columnCounter}</span></div>`
    
    column.innerHTML= columnGrid;
    column.classList.add('shaddow');
}

const addColumn = (e) => {

    //remove the clicked button that adds new column
    const btnWrapper = e.target.parentNode;
    const addButton = e.target.parentNode.children[0]
    btnWrapper.removeChild(addButton);

    //console.log(arrayOfColumns.length, " length")
    if(arrayOfColumns.length > 7) {
        drawNumbers();
        displayNumbers(btnWrapper)
        columnCounter = 0;
        return false;
     } //here comes display numbers;

    //console.log(e.target.parentNode.removeChild(this))


    const newAddButton = document.createElement('div');
    newAddButton.classList.add('columns');
    columnsContainer.appendChild(newAddButton);
    const newButtonContent = 
    `<div id="add-column">
        <span id="pridej-sloupec">pridej sloupec</span>
    </div>`;
    newAddButton.innerHTML = newButtonContent;
     columnCounter++;
    drawNumbers();
    displayNumbers(btnWrapper)

    
    //set event listener again
    let addColumnBtn = document.getElementById('add-column');

    

    

   addColumnBtn.addEventListener('click', (e) => {
        
        addColumn(e);
    
    })
    
}

    




addColumnBtn.addEventListener('click', (e) => {
    addColumn(e)

})