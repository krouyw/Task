const getStart = (data, tru = 'true') => {
	const time = `${data[16] + data[17]}:${data[19] + data[20]}`
	const day = data[0] + data[1] + data[2]
	const numberDay = data[8] + data[9]
	const month = data[4] + data[5] + data[6]
	const all = `${time} ${day} ${numberDay} ${month}`

	return tru === 'true' ? all : data
}

function createData(str) {
	const hour = Number(str[0] + str[1])
	const minut = Number(str[3] + str[4])
	const time = hour * 60 + minut
	return time
}

export { createData, getStart }
