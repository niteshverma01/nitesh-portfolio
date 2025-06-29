"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_2Gx1D5Aq_EPVMRoStQWi9EE3ZkERgYYkZ")

export async function submitContactForm(prevState: any, formData: FormData) {
  console.log("🔍 Contact form submission started...")
  console.log("📝 FormData received:", formData)

  try {
    // Check if formData is valid
    if (!formData || typeof formData.get !== "function") {
      console.error("❌ Invalid FormData object received:", formData)
      return {
        success: false,
        message: "Invalid form data received. Please try refreshing the page and submitting again.",
      }
    }

    // Extract form data with null checks
    const name = formData.get("name")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const subject = formData.get("subject")?.toString() || ""
    const message = formData.get("message")?.toString() || ""

    console.log("📝 Form data extracted:", {
      name: name || "empty",
      email: email || "empty",
      subject: subject || "empty",
      messageLength: message?.length || 0,
    })

    // Validate required fields
    if (!email.trim() || !name.trim() || !message.trim()) {
      console.log("❌ Validation failed: Missing required fields")
      return {
        success: false,
        message: "Please fill in all required fields (name, email, and message).",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      console.log("❌ Validation failed: Invalid email format")
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    console.log("✅ Validation passed, attempting to send email...")

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "niteshverma9025@gmail.com",
      subject: `Portfolio Contact: ${subject.trim() || "Message from " + name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact Details:</h3>
            <p><strong>Name:</strong> ${name.trim()}</p>
            <p><strong>Email:</strong> ${email.trim()}</p>
            <p><strong>Subject:</strong> ${subject.trim() || "No subject provided"}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message.trim()}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 8px;">
            <p><strong>Reply to:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${name.trim()} (${email.trim()})
Subject: ${subject.trim() || "No subject"}
Time: ${new Date().toLocaleString()}

Message:
${message.trim()}

Reply to: ${email.trim()}
      `,
    })

    console.log("📧 Email send result:", emailResult)

    if (emailResult.error) {
      console.error("❌ Resend API error:", emailResult.error)
      return {
        success: false,
        message: `Email service error: ${emailResult.error.message || "Unknown error"}`,
      }
    }

    console.log("✅ Email sent successfully!")
    return {
      success: true,
      message: `Thank you ${name.trim()}! Your message has been sent successfully. I'll get back to you at ${email.trim()} within 24 hours.`,
    }
  } catch (error) {
    console.error("❌ Unexpected error in submitContactForm:", error)

    let errorMessage = "Sorry, there was an unexpected error sending your message."

    if (error instanceof Error) {
      console.error("Error details:", error.message, error.stack)
      errorMessage += ` Error: ${error.message}`
    }

    return {
      success: false,
      message: errorMessage + " Please try again or contact me directly at niteshverma9025@gmail.com.",
    }
  }
}
