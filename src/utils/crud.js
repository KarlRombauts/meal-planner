export const getOne = model => async (req, res) => {
  res.send({ message: 'getOne' })
}
export const getMany = model => async (req, res) => {
  res.send({ message: 'getMany' })
}
export const createOne = model => async (req, res) => {
  res.send({ message: 'createOne' })
}
export const updateOne = model => async (req, res) => {
  res.send({ message: 'updateOne' })
}
export const removeOne = model => async (req, res) => {
  res.send({ message: 'removeOne' })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
