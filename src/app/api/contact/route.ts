import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

// Initialize Supabase (using fixsepticnow project - shared database)
function getSupabase() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url || !key) {
        console.warn('Supabase not configured - lead will only be emailed')
        return null
    }
    return createClient(url, key)
}

const smtpTransporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'info@mesotheliomalawyernearby.com',
        pass: 'M)tZp7DsQ*%_XSZ',
    },
})

async function sendLeadNotification(lead: {
    firstName: string
    lastName: string
    phone: string
    email?: string
    state: string
    diagnosisStatus?: string
    veteranStatus?: string
    message?: string
}) {
    const isVeteran = lead.veteranStatus === 'yes'
    const hasDiagnosis = lead.diagnosisStatus === 'diagnosed'
    const estimatedValue = hasDiagnosis ? '$2,000-5,000+' : '$200-500'

    try {
        await smtpTransporter.sendMail({
            from: '"Meso Leads" <info@mesotheliomalawyernearby.com>',
            to: 'morelyndon@pm.me',
            subject: `🚨 HIGH-VALUE MESO LEAD: ${lead.firstName} ${lead.lastName} - ${lead.state}`,
            html: `
                <h2>🚨 New Mesothelioma Lead!</h2>
                <p style="background: #fff3cd; padding: 10px; border-radius: 5px; color: #856404;">
                    <strong>Estimated Value: ${estimatedValue}</strong>
                    ${isVeteran ? ' | <span style="color: #155724;">✓ VETERAN</span>' : ''}
                    ${hasDiagnosis ? ' | <span style="color: #721c24;">✓ DIAGNOSED</span>' : ''}
                </p>
                <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${lead.firstName} ${lead.lastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${lead.phone}">${lead.phone}</a></td>
                    </tr>
                    ${lead.email ? `
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${lead.email}">${lead.email}</a></td>
                    </tr>
                    ` : ''}
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">State</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${lead.state}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Diagnosis Status</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${lead.diagnosisStatus || 'Not specified'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Veteran Status</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${lead.veteranStatus || 'Not specified'}</td>
                    </tr>
                    ${lead.message ? `
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${lead.message}</td>
                    </tr>
                    ` : ''}
                </table>
                <p style="margin-top: 20px; color: #dc3545; font-weight: bold;">
                    ⚡ CALL IMMEDIATELY - Mesothelioma leads have extremely high value!
                </p>
            `,
        })
        console.log('Meso lead notification email sent successfully')
    } catch (emailError) {
        console.error('Failed to send meso lead notification email:', emailError)
    }
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        // Validate required fields
        if (!data.firstName || !data.lastName || !data.phone || !data.state || !data.consent) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Save to Supabase
        const supabase = getSupabase()
        if (supabase) {
            const { error: dbError } = await supabase.from('meso_leads').insert({
                first_name: data.firstName,
                last_name: data.lastName,
                phone: data.phone,
                email: data.email || null,
                state: data.state,
                diagnosis_status: data.diagnosisStatus || null,
                veteran_status: data.veteranStatus || null,
                message: data.message || null,
                consent: data.consent,
                consent_timestamp: new Date().toISOString(),
                source_url: request.headers.get('referer') || '/',
            })

            if (dbError) {
                console.error('Supabase insert error:', dbError)
                // Continue to send email even if DB fails
            } else {
                console.log('Meso lead saved to database')
            }
        }

        // Send email notification (non-blocking)
        sendLeadNotification({
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            state: data.state,
            diagnosisStatus: data.diagnosisStatus,
            veteranStatus: data.veteranStatus,
            message: data.message,
        })

        return NextResponse.json({
            success: true,
            message: 'Lead received successfully'
        })

    } catch (error) {
        console.error('Error processing lead:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
