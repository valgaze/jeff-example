const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('POST to localhost:3000/test with well-formed then malformed JSON. See JSONLint to test correctness'))
app.use(express.json())
app.post('/test', (req,res) => {

	console.log(req.body);
	setTimeout(() => {
		res.send(req.body);
	})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));