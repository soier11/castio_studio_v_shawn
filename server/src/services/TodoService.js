import session from './internal/session';
import Todo from '../models/Todo';

export const test = (req, res) =>
  session(req, res)
    .then(sess => Todo.findOne({
      owner: sess,
      _id: req.params.id
    }))
    .then(todo => {
      todo.content = req.body.content;
      todo.updatedDate = Date.now();
      return todo.save()
    })
    .then(todo => res.send({todo}))
    .catch(e => res.status(500).send({
      message: 'no data'
    }));
