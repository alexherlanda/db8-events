import Event from '../models/Event'

export const getEvents = async (req, res) => {
  res.json({ message: 'Events' })
}

export const getEvent =  async(req, res) =>{
  const id = req.params.id
  res.json({message:"Event eith id"})
}


export const newEvent = async(req,res)=>{
  const model = req.body.event

  //TODO add to the mongo db
  res.json({message: `Added ${model}`})
}