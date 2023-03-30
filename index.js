// functions for get value;

function getInputValueById(id){
    const input = document.getElementById(id);
    const inputValueString = input.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function getTextValueById(id){
    const element = document.getElementById(id);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setInnerText (id, value){
    const element = document.getElementById(id);
    element.innerText = value;
}



// player selection
const players = document.getElementsByClassName('player');
for(const player of players){
    player.addEventListener('click',function(){
        const elementPerent = player.parentNode.parentNode;
        const target = elementPerent.children[1];
        const findLocation = document.getElementById('selected-player');
        const totalPlayer = document.querySelectorAll('#selected-player li').length
        if(totalPlayer >= 5){
            alert("you have allow to select only 5 Player's");
            return;
        }
        const findData = target.innerText;
        const li = document.createElement('li')
        li.innerText = findData;
        findLocation.appendChild(li);
        player.setAttribute('disabled', true);
        player.style.backgroundColor = 'gray';
    })
}

// calculate Expenses

document.getElementById('calculate').addEventListener('click',function(){
    const perPlayer = getInputValueById('per-player');
    const totalPlayer = document.querySelectorAll('#selected-player li').length
    const playerExpenses = perPlayer * totalPlayer;
    if(isNaN(perPlayer)){
        alert('input Valid Number');
        return;
    }
    setInnerText('player-expenses', playerExpenses);
})

document.getElementById('calculate-total').addEventListener('click', function(){
   const playerExpenses = getTextValueById('player-expenses');
   const manager = getInputValueById('manager');
   const coach = getInputValueById('coach');
   const totalExpenses = playerExpenses + manager + coach;
   if(isNaN(coach, manager)){
    alert('input Valid Number');
    return;
}
   setInnerText('total-expenses', totalExpenses);

})