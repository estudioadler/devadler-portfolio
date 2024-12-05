import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Send email
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

    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 })
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json({ message: 'Erro ao enviar email' }, { status: 500 })
  }
}