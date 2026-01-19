const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ============================================
// ✏️ ADD YOUR SECOND EMAIL HERE
// ============================================
const ADMIN_EMAIL_1 = 'amit@upskillize.com';
const ADMIN_EMAIL_2 = 'ramesh@upskillize.com'; // ← CHANGE THIS TO YOUR SECOND EMAIL
const ALL_ADMIN_EMAILS = `${ADMIN_EMAIL_1}, ${ADMIN_EMAIL_2}`;
// ============================================

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 3 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX allowed'));
    }
  },
});

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: 'amit@upskillize.com',
    pass: 'Raga@BM4',
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1'
  },
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email Configuration Error:');
    console.error('Error Code:', error.code);
    console.error('Error Message:', error.message);
    console.error('\n🔧 Troubleshooting Steps:');
    console.error('1. Generate Zoho App Password: https://accounts.zoho.com/home#security/application_pwd');
    console.error('2. Enable IMAP/SMTP in Zoho Mail settings');
    console.error('3. Check if account is in India (.in) or Europe (.eu) region');
    console.error('4. Try different configuration options (uncomment other options above)');
  } else {
    console.log('✅ Email server is ready to send messages!');
    console.log('📧 Configured for:', 'amit@upskillize.com');
    console.log('📬 Admin recipients:', ALL_ADMIN_EMAILS);
  }
});

// ===== ROUTE 1: Contact Form =====
app.post('/send-mail', async (req, res) => {
  const { name, email, phone, company, inquiry, message } = req.body;

  console.log('📨 Attempting to send contact form email...');

  try {
    // Email to admin (BOTH EMAILS WILL RECEIVE THIS)
    const adminEmail = await transporter.sendMail({
      from: 'amit@upskillize.com',
      to: ALL_ADMIN_EMAILS, // ← Sends to BOTH email addresses
      replyTo: email,
      subject: `New Contact Form - ${inquiry}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Inquiry: ${inquiry}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4f46e5; margin-top: 0;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Company:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Inquiry:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${inquiry}</td>
              </tr>
            </table>
            <h3 style="color: #4f46e5; margin-top: 20px;">Message:</h3>
            <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4f46e5;">${message}</p>
          </div>
        </div>
      `,
    });

    console.log('✅ Admin email sent:', adminEmail.messageId);

    // Confirmation to user
    const userEmail = await transporter.sendMail({
      from: 'amit@upskillize.com',
      to: email,
      subject: 'We received your message - Upskillize',
      text: `Hi ${name},\n\nThank you for contacting Upskillize! We've received your message about ${inquiry} and will respond within 24-48 hours.\n\nBest regards,\nUpskillize Team`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4f46e5;">Thank You for Contacting Us!</h2>
            <p>Hi ${name},</p>
            <p>We've received your message about <strong>${inquiry}</strong> and will respond within 24-48 hours.</p>
            <p>Best regards,<br><strong>Upskillize Team</strong></p>
          </div>
        </div>
      `,
    });

    console.log('✅ User confirmation sent:', userEmail.messageId);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email sending failed:');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    console.error('Response:', error.response);
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message,
      code: error.code
    });
  }
});

// ===== ROUTE 2: Career Application =====
app.post('/send-career-application', upload.single('resume'), async (req, res) => {
  const { name, email, phone, linkedin, opportunity, message } = req.body;
  const resume = req.file;

  if (!resume) {
    return res.status(400).json({ success: false, message: 'Resume is required' });
  }

  console.log('📨 Attempting to send career application...');

  try {
    // Email to admin with attachment (BOTH EMAILS WILL RECEIVE THIS)
    const adminEmail = await transporter.sendMail({
      from: 'amit@upskillize.com',
      to: ALL_ADMIN_EMAILS, // ← Sends to BOTH email addresses
      subject: `Career Application - ${opportunity}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
LinkedIn: ${linkedin || 'Not provided'}
Opportunity: ${opportunity}

About Applicant:
${message}

Resume attached: ${resume.originalname}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4f46e5; margin-top: 0;">New Career Application</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">LinkedIn:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${linkedin || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Opportunity:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${opportunity}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Resume:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${resume.originalname}</td>
              </tr>
            </table>
            <h3 style="color: #4f46e5; margin-top: 20px;">About Applicant:</h3>
            <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4f46e5;">${message}</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer,
        },
      ],
    });

    console.log('✅ Admin email sent:', adminEmail.messageId);

    // Confirmation to applicant
    const userEmail = await transporter.sendMail({
      from: 'amit@upskillize.com',
      to: email,
      subject: 'Application Received - Upskillize Career Services',
      text: `Hi ${name},\n\nThank you for your application for ${opportunity}! We'll review it within 3-5 business days.\n\nBest regards,\nUpskillize Career Team`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4f46e5;">Application Received!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for your application for <strong>${opportunity}</strong>!</p>
            <p>We'll review your application within 3-5 business days and get back to you.</p>
            <p>Best regards,<br><strong>Upskillize Career Team</strong></p>
          </div>
        </div>
      `,
    });

    console.log('✅ User confirmation sent:', userEmail.messageId);

    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    console.error('❌ Email sending failed:');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit application',
      error: error.message 
    });
  }
});

// ===== ROUTE 3: Course Launch Notification =====
app.post('/send-notification', async (req, res) => {
  const { email, courseName, date } = req.body;

  console.log('📨 Attempting to send course notification request...');

  try {
    // Email to admin (BOTH EMAILS WILL RECEIVE THIS)
    const adminEmail = await transporter.sendMail({
      from: 'amit@upskillize.com',
      to: ALL_ADMIN_EMAILS, // ← Sends to BOTH email addresses
      replyTo: email,
      subject: `Course Launch Notification Request - ${courseName}`,
      text: `
Course Notification Request

Email: ${email}
Course: ${courseName}
Requested on: ${date}

Action Required: Add this user to the notification list for ${courseName}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4f46e5; margin-top: 0;">🔔 Course Launch Notification Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">User Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Course:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${courseName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Requested on:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${date}</td>
              </tr>
            </table>
            <div style="background-color: #fff3cd; padding: 15px; margin-top: 20px; border-left: 4px solid #ffc107; border-radius: 5px;">
              <p style="margin: 0; color: #856404;"><strong>Action Required:</strong> Add this user to the notification list for <strong>${courseName}</strong></p>
            </div>
          </div>
        </div>
      `,
    });

    console.log('✅ Admin notification sent:', adminEmail.messageId);

    // Confirmation to user
    const userEmail = await transporter.sendMail({
      from: 'amit@upskillize.com',
      to: email,
      subject: `You're on the list! - ${courseName}`,
      text: `Thank you for your interest in ${courseName}!\n\nWe'll notify you as soon as this course launches. You'll be among the first to know and will receive exclusive early-bird discounts.\n\nBest regards,\nUpskillize Team`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4f46e5;">🎉 You're on the List!</h2>
            <p>Thank you for your interest in <strong>${courseName}</strong>!</p>
            <div style="background-color: #e8f4fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #0066cc; margin-top: 0;">What happens next?</h3>
              <ul style="color: #333; line-height: 1.8;">
                <li>We'll notify you immediately when the course launches</li>
                <li>You'll receive exclusive early-bird discounts</li>
                <li>Get priority access to limited seats</li>
              </ul>
            </div>
            <p>Stay tuned!</p>
            <p>Best regards,<br><strong>Upskillize Team</strong></p>
          </div>
        </div>
      `,
    });

    console.log('✅ User confirmation sent:', userEmail.messageId);

    res.json({ success: true, message: 'Notification request sent successfully' });
  } catch (error) {
    console.error('❌ Email sending failed:');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send notification request',
      error: error.message 
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Email: amit@upskillize.com`);
  console.log(`📬 Admin recipients: ${ALL_ADMIN_EMAILS}`);
  console.log(`🔧 If email fails, check the troubleshooting steps above\n`);
});