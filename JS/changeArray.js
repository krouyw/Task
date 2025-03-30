const addTaskes = (
	list,
	changeF,
	deleteF,
	name,
	priority = 'low',
	status = 'ToDo'
) => {
	let obgect = { name, status, priority }
	list.unshift(obgect)
	render(list, changeF, deleteF)
}

const changeAll = (
	list,
	changeF,
	deleteF,
	lastName,
	newName = lastName,
	status = 'ToDo',
	priority = 'low'
) => {
	let flag = true
	list.forEach(names => {
		if (names.name === lastName) {
			names.name = newName
			names.status = status
			names.priority = priority
			flag = false
		}
	})
	if (flag) {
		console.log(`This name - '${lastName}' not found`)
	}
	render(list, changeF, deleteF)
}

const changeStatus = (list, changeF, deleteF, name, status) => {
	let flag = true
	list.forEach(names => {
		if (names.name === name) {
			names.status = status
			flag = false
		}
	})
	if (flag) {
		console.log(`This name - '${name}' not found`)
	}
	render(list, changeF, deleteF)
}

const changePriority = (list, changeF, deleteF, name, priority) => {
	let flag = true
	list.forEach(names => {
		if (names.name === name) {
			names.priority = priority
			flag = false
		}
	})
	if (flag) {
		console.log(`This name - '${name}' not found`)
	}
	render(list, changeF, deleteF)
}

const changeName = (list, changeF, deleteF, lastName, newName) => {
	let flag = true
	list.forEach(names => {
		if (names.name === lastName) {
			names.name = newName
			flag = false
		}
	})
	if (flag) {
		console.log(`This name - '${lastName}' not found`)
	}
	render(list, changeF, deleteF)
}

const deleteTask = (list, changeF, deleteF, name) => {
	const index = list.findIndex(names => names.name === name)
	list.splice(index, 1)
	render(list, changeF, deleteF)
}

export {
	addTaskes,
	changeAll,
	changeName,
	changePriority,
	changeStatus,
	deleteTask,
}
