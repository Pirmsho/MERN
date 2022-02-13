const getGoals = (req, res) => {
  res.json({ message: 'get goal' })
}
const setGoal = (req, res) => {
  res.json({ message: 'create goal' })
}
const updateGoal = (req, res) => {
  res.json({ message: `update goal ${req.params.id}` })
}
const deleteGoal = (req, res) => {
  res.json({ message: `delete goal ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
