import { CONSTANT } from './CONSTANT.js'

function clearHigh() {
  while (CONSTANT.allHighTasks.firstChild) {
    CONSTANT.allHighTasks.removeChild(CONSTANT.allHighTasks.firstChild)
  }
}

function clearLow() {
  while (CONSTANT.allLowTasks.firstChild) {
    CONSTANT.allLowTasks.removeChild(CONSTANT.allLowTasks.firstChild)
  }
}

function render(list, changeF, deleteF) {
  CONSTANT.highTaskValue.value = ''
  CONSTANT.lowTaskValue.value = ''
  clearHigh()
  clearLow()

  for (let i = 0; i < list.length; i++) {
    const priorityDiv = document.querySelector(`.${list[i].priority}`)

    const newDiv = document.createElement('div')
    newDiv.classList.add('task-1')

    const radio = `<input type="radio" class="radio" ${
      list[i].status == 'Done' ? 'checked' : ''
    }>`

    const doubleDiv = document.createElement('div')
    doubleDiv.classList.add('doubleBlock')

    const text = document.createElement('p')
    text.classList.add('text')
    text.textContent = list[i].name

    const timeDiv = document.createElement('div')
    timeDiv.classList.add('time')

    const start = document.createElement('p')
    start.classList.add('underText')
    start.classList.add('start')
    start.textContent = `Start: ${list[i].start}`

    const finish = document.createElement('p')
    finish.classList.add('underText')
    finish.classList.add('finish')
    finish.textContent = `Finish: ${list[i].finish}`

    const lead_time = document.createElement('p')
    lead_time.classList.add('underText')
    lead_time.classList.add('lead_time')
    lead_time.textContent = `Lead Time: ${list[i].time}`

    const button = document.createElement('button')
    button.classList.add('delete')
    button.type = 'submit'
    button.textContent = '×'

    timeDiv.prepend(start)
    timeDiv.append(finish)
    timeDiv.append(lead_time)

    doubleDiv.prepend(text)
    doubleDiv.append(timeDiv)

    newDiv.insertAdjacentHTML('afterbegin', radio)
    newDiv.append(doubleDiv)
    newDiv.append(button)

    list[i].status == 'Done' ? (newDiv.style.backgroundColor = '#c4c4c4') : ''

    newDiv.querySelector('input').addEventListener('click', changeF)
    newDiv.querySelector('.delete').addEventListener('click', deleteF)
    priorityDiv.querySelector('.list').append(newDiv)
  }
}

export { render }
