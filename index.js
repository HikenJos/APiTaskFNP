const port = process.env.PORT || 4000
const app = require('./app')
const mongoose = require('mongoose')
const url = 'mongodb+srv://admin:pass@api-udemy.fdiam.mongodb.net/f_p_task'

mongoose.connect(url, (err, res) => {
  try {
    if (err) {
      throw err
    } else {
      // conection success

      app.listen(port, () => {
        console.log('Server running at http://localhost:' + port)
      })
    }
  } catch (err) {
    console.log(err)
  }
})
