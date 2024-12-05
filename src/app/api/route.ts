// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // Configurar o transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou outro serviço de email
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
    try {
      // Enviar email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'devadler30@gmail.com',
        subject: `Nova mensagem de contato - ${name}`,
        html: `
          <h3>Nova mensagem de contato</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `
      })

      res.status(200).json({ message: 'Email enviado com sucesso!' })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      res.status(500).json({ message: 'Erro ao enviar email' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}