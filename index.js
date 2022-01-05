// throw new Error('nonexistence does not exist')

class NonExistenceError extends Error {
	constructor(message) {
		super(message)
		this.name = "Non existence error"
	}
}

// throw new NonExistenceError()

const test = () => {
	throw new NonExistenceError("uh oh")
}

try {
	test()
} catch (err) {
	console.log(err.message)
}