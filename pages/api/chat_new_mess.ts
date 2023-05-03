// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next' 
import db from '../../utils/db'

type Response = {
  response: string
}

type MessageData = {
  message: string
  message_id: string
  conv_id: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {

  /*post message to database with conversation id passed from the
  random id generator in the chatbot front-end chatbot component.
  promise will return with the response message.*/
  const handlePost = async () => {
    let messageId: string = Math.random().toString(36).substring(2,7)
    const data: MessageData = {
      message: req.body.message,
      conv_id: req.body.conversationId,
      message_id: messageId
    }

    const write = db.collection('conversations').doc(data.conv_id).collection('message').doc(data.message_id)
    await write.set(data)
  }
  handlePost()

  res.status(200).json({ response: "success" })
}