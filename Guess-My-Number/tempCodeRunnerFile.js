function external() {

	const externalVar = 'Я внешняя функция'
	function internal() {
		const internalVar = 'Я внутренняя функция'
		console.log(internalVar)
		console.log(externalVar)
	}
	internal()
}
externalVar()