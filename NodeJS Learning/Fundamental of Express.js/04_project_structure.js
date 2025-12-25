/******************************************************************
 PROJECT STRUCTURE
******************************************************************/

/*
WHY structure matters:
✔ Scalability
✔ Maintainability
✔ Separation of concerns

Request Flow:
Route → Controller → Service → Model → DB
*/

// Controller (handles HTTP logic)
function getUsers(req, res) {
  res.json({ users: [] });
}

// Route (maps URL to controller)
const express = require('express');
const router = express.Router();

router.get('/users', getUsers);

module.exports = router;

/*
app.js will import router:
app.use('/api', router)
*/
