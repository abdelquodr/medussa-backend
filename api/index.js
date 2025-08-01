const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const userRoles = [
  {
    _id: 1,
    name: 'Superadmin',
    type: 'DEFAULT',
    dateCreated: 'Jan 1, 2023',
    status: 'Active',
    users: 8,
  },
  {
    _id: 2,
    name: 'Merchantadmin',
    type: 'DEFAULT',
    dateCreated: 'Feb 1, 2023',
    status: 'Active',
    users: 6,
  },
  {
    _id: 3,
    name: 'supportadmin',
    type: 'DEFAULT',
    dateCreated: 'Feb 1, 2023',
    status: 'Active',
    users: 3,
  },
  {
    _id: 4,
    name: 'sales personnel',
    type: 'CUSTOM',
    dateCreated: 'Mar 1, 2023',
    status: 'Active',
    users: 5,
  },
  {
    _id: 5,
    name: 'Deputy sales personnel',
    type: 'CUSTOM',
    dateCreated: 'Mar 1, 2023',
    status: 'In Active',
    users: 4,
  },
];

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/api/roles', (req, res) => {
  res.json(userRoles);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports.handler = serverless(app);