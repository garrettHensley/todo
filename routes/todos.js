const todoRoutes = (app, fs) => {
    // variables
    const dataPath = './data/todos.json';
  
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
      ) => {
        fs.readFile(filePath, encoding, (err, data) => {
          if (err) {
            throw err;
          }
    
          callback(returnJson ? JSON.parse(data) : data);
        });
      };
    
      const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
      ) => {
        fs.writeFile(filePath, fileData, encoding, err => {
          if (err) {
            throw err;
          }
    
          callback();
        });
      };
    
      app.get('/todo', (req, res) => {
        readFile(data => {
          res.send(data);
        }, true);
      });

      app.post('/todo', (req, res) => {
        readFile(data => {
            const newTodoId = Date.now().toString()
            const todo = req.body.todo
            todo.id = newTodoId

            data[newTodoId] = todo

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('New todo added')
            })
        }, true)
      })

      app.delete('/todo/:id', (req, res) => {
        readFile(data => {
          const todoId = req.params.id
          delete data[todoId];
      
          writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(`todo id:${todoId} removed`);
          });
        }, true);
      });
  };

module.exports = todoRoutes
