const words = [
	'ILOVESNEHIL',
	'SNEHILRULES',
	'HELLOWORLD',
	'IAMSODUMB',
	'SNEHILISLEGEND',
	'LMAOHEHE',
	'IWILLMARRYSNEHIL',
	'SNEHILISGREAT',
	'WRONGPASSWORD'
]

export default function getRandomWord() {
	return words[Math.floor(Math.random() * (words.length + 1))]
}
