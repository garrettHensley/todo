const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/users.json';
  
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
    
      app.get('/users', (req, res) => {
        readFile(data => {
          res.send(data);
        }, true);
      });

      app.post('/users', (req, res) => {
        readFile(data => {
            const newUserId = Date.now().toString()
            const todo = req.body.todo
            todo.id = newUserId

            data[newUserId] = todo

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('New todo added')
            })
        }, true)
      })

      app.delete('/users/:id', (req, res) => {
        readFile(data => {
          const userId = req.params.id
          delete data[userId];
      
          writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(`users id:${userId} removed`);
          });
        }, true);
      });
  };

module.exports = userRoutes
