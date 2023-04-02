import { CONSTANT } from './CONSTANT.js'
import { render } from './render.js'
import { STATUS, PRIORITY } from './STATUS.js'
// import { getData } from './add_delete.js'
import { getStart, createData } from './time.js'

CONSTANT.buttonAddHigh.addEventListener('click', addHighTask)
CONSTANT.buttonAddLow.addEventListener('click', addLowTaskes)

const LIST = []

render(LIST, changeStatusUI, deleteTaskUI)

function addHighTask(
  event,
  name = CONSTANT.highTaskValue.value,
  priority = PRIORITY.HIGH,
  status = STATUS.TO_DO,
  start,
  finish = 'is Progress',
  time = 'is Progress'
) {
  event.preventDefault()
  const found = LIST.find((item) => item.name == name)
  start = getStart(String(new Date()))

  if (!found) {
    let obgect = { name, status, priority, start, finish, time }

    if (name !== '') {
      LIST.unshift(obgect)
    } else {
      alert('Write a task')
    }
  }

  if (found) {
    console.log('Task already exists')
  }

  render(LIST, changeStatusUI, deleteTaskUI)
}

function addLowTaskes(
  event,
  name = CONSTANT.lowTaskValue.value,
  priority = PRIORITY.LOW,
  status = STATUS.TO_DO,
  start = new Date(),
  finish = 'is Progress',
  time = 'is Progress'
) {
  event.preventDefault()
  const found = LIST.find((item) => item.name == name)
  start = getStart(String(start))

  if (!found) {
    let obgect = { name, status, priority, start, finish, time }

    if (name !== '') {
      LIST.unshift(obgect)
    } else {
      alert('Write a task')
    }
  }

  if (found) {
    console.log('Task already exists')
  }

  render(LIST, changeStatusUI, deleteTaskUI)
}

function changeStatusUI(event, name) {
  name = event.target.parentNode.querySelector('.text').textContent
  let position = LIST.findIndex((item) => item.name == name)

  if (LIST[position].status == 'Done') {
    LIST[position].status = STATUS.TO_DO
    LIST[position].finish = 'is Progress'
    LIST[position].time = 'is Progress'
  } else {
    LIST[position].status = STATUS.DONE

    const timeOut = getStart(String(new Date()))
    LIST[position].finish = timeOut

    const start = createData(LIST[position].start)
    const finish = createData(LIST[position].finish)
    const resultTime = `${Math.round(finish - start)} minutes`
    LIST[position].time = resultTime
  }

  render(LIST, changeStatusUI, deleteTaskUI)
}

function deleteTaskUI(event, name) {
  name = event.target.parentNode
    .querySelector('.doubleBlock')
    .querySelector('.text').textContent
  let position = LIST.findIndex((item) => item.name == name)

  if (position >= 0) {
    LIST.splice(position, 1)
  } else {
    console.log(`This task - "${name}" doesn't exist`)
  }
  render(LIST, changeStatusUI, deleteTaskUI)
}
