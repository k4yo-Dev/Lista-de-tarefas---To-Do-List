 const localStorageKey = 'to-do-list-kr'

 function validateIfExistNewTask()
 {
    let values     = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists     = values.find(x => x.name == inputValue)
    return !exists ? false : true
 }

function newTask()
{
    let input = document.getElementById('input-new-task')
    input.style.boder = ''
    

    if(!input.value)
    {
        input.style.border = '1px solid re' 
        alert('digite algo para inserir em sua lista')
    }
    else if (validateIfExistNewTask())
    {
         alert('já existe uma task com essa descrição')
    }
    else
    {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    values.push({
        name: input.value
    })
    localStorage.setItem(localStorageKey,JSON.stringify (values))
    showValues()
    }
    input.value = ''
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}<button id='bnt-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
</svg></button></li>`

    }
}

function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey)) || "[]"
    let index = values.find(x=> x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify (values))
    showValues()
}


showValues()


