'use client'

import { useState, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
]

type Step = 'intro' | 'diagnosis' | 'veteran' | 'state' | 'contact' | 'submitted' | 'browsing'

interface Message {
  type: 'bot' | 'user'
  text: string
}

interface LeadData {
  diagnosisStatus: 'diagnosed' | 'suspected' | 'not-sure' | null
  veteranStatus: 'yes' | 'no' | 'not-sure' | null
  state: string
  firstName: string
  lastName: string
  phone: string
  email: string
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const [step, setStep] = useState<Step>('intro')
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [leadData, setLeadData] = useState<LeadData>({
    diagnosisStatus: null,
    veteranStatus: null,
    state: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })

  // Add bot message with typing delay
  const addBotMessage = useCallback((text: string, delay = 400) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { type: 'bot', text }])
    }, delay)
  }, [])

  // Add user message
  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { type: 'user', text }])
  }

  // Initialize conversation
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        "Hi there. If you or someone you love has been affected by mesothelioma, you're not alone. I can help connect you with an experienced attorney — no cost to you. Can I ask a few quick questions?",
        300
      )
    }
  }, [isOpen, messages.length, addBotMessage])

  // Auto-open after 5 seconds (once per session)
  useEffect(() => {
    const hasOpenedBefore = sessionStorage.getItem('chatbot-opened')
    if (hasOpenedBefore) {
      setHasAutoOpened(true)
      return
    }

    const timer = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsOpen(true)
        setHasAutoOpened(true)
        sessionStorage.setItem('chatbot-opened', 'true')
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [hasAutoOpened])

  // Handle button selections
  const handleSelection = (selection: string) => {
    switch (step) {
      case 'intro':
        if (selection === 'yes') {
          addUserMessage('Yes, I need help')
          setTimeout(() => {
            addBotMessage("Thank you. First — has the person affected been diagnosed with mesothelioma?")
            setStep('diagnosis')
          }, 500)
        } else {
          addUserMessage('Just browsing')
          setTimeout(() => {
            addBotMessage("No problem at all. We're here whenever you're ready. You can reach us anytime at (214) 699-4543.")
            setStep('browsing')
          }, 500)
        }
        break

      case 'diagnosis':
        const diagnosisMap: Record<string, { text: string; value: 'diagnosed' | 'suspected' | 'not-sure' }> = {
          'diagnosed': { text: 'Yes, diagnosed', value: 'diagnosed' },
          'suspected': { text: 'Suspected, not confirmed', value: 'suspected' },
          'not-sure': { text: 'Not sure', value: 'not-sure' },
        }
        const diagnosis = diagnosisMap[selection]
        if (diagnosis) {
          addUserMessage(diagnosis.text)
          setLeadData(prev => ({ ...prev, diagnosisStatus: diagnosis.value }))
          setTimeout(() => {
            addBotMessage("Got it. Is the affected person a military veteran?")
            setStep('veteran')
          }, 500)
        }
        break

      case 'veteran':
        const veteranMap: Record<string, { text: string; value: 'yes' | 'no' | 'not-sure' }> = {
          'yes': { text: 'Yes, veteran', value: 'yes' },
          'no': { text: 'No', value: 'no' },
          'not-sure': { text: 'Not sure', value: 'not-sure' },
        }
        const veteran = veteranMap[selection]
        if (veteran) {
          addUserMessage(veteran.text)
          setLeadData(prev => ({ ...prev, veteranStatus: veteran.value }))
          setTimeout(() => {
            addBotMessage("What state are you located in?")
            setStep('state')
          }, 500)
        }
        break
    }
  }

  // Handle state selection
  const handleStateSelect = (state: string) => {
    if (!state) return
    addUserMessage(state)
    setLeadData(prev => ({ ...prev, state }))
    setTimeout(() => {
      addBotMessage("Almost done. What's the best name and phone number to reach you? An attorney will call you directly — usually within 24 hours.")
      setStep('contact')
    }, 500)
  }

  // Handle contact form submission
  const handleContactSubmit = async () => {
    if (!leadData.firstName || !leadData.lastName || !leadData.phone) return

    setIsSubmitting(true)
    addUserMessage(`${leadData.firstName} ${leadData.lastName} - ${leadData.phone}`)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: leadData.firstName,
          lastName: leadData.lastName,
          phone: leadData.phone,
          email: leadData.email || undefined,
          state: leadData.state,
          diagnosisStatus: leadData.diagnosisStatus,
          veteranStatus: leadData.veteranStatus,
          consent: true,
          message: 'Chatbot lead',
        }),
      })

      if (response.ok) {
        setTimeout(() => {
          addBotMessage(
            `Thank you, ${leadData.firstName}. Your information has been submitted. An attorney experienced with mesothelioma cases will be reaching out to you soon. If you need immediate assistance, please call us at (214) 699-4543.`
          )
          setStep('submitted')
        }, 500)
      } else {
        addBotMessage("Sorry, there was an issue submitting your information. Please try again or call us directly at (214) 699-4543.")
      }
    } catch {
      addBotMessage("Sorry, there was an issue submitting your information. Please try again or call us directly at (214) 699-4543.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle click on chat button
  const handleOpen = () => {
    setIsOpen(true)
    setHasAutoOpened(true)
    sessionStorage.setItem('chatbot-opened', 'true')
  }

  // Render typing indicator
  const TypingIndicator = () => (
    <div className="flex items-center gap-1 px-4 py-3">
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )

  // Render phone link
  const PhoneLink = ({ number }: { number: string }) => (
    <a
      href={`tel:${number.replace(/[^0-9]/g, '')}`}
      className="text-amber-400 hover:text-amber-300 underline font-semibold"
    >
      {number}
    </a>
  )

  // Replace phone numbers in text with clickable links
  const renderMessageText = (text: string) => {
    const phoneRegex = /\(214\) 699-4543/g
    const parts = text.split(phoneRegex)
    const matches = text.match(phoneRegex) || []

    return parts.reduce((acc: React.ReactNode[], part, i) => {
      acc.push(part)
      if (matches[i]) {
        acc.push(<PhoneLink key={i} number={matches[i]} />)
      }
      return acc
    }, [])
  }

  return (
    <>
      {/* Floating chat button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 w-14 h-14 lg:w-16 lg:h-16 bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{
            animation: 'pulse-glow 2s infinite',
          }}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 lg:bottom-6 lg:right-6 z-50 w-full lg:w-[380px] h-[100dvh] lg:h-auto lg:max-h-[600px] bg-[#0f172a] lg:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#1e3a5f] px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#0f172a]" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Mesothelioma Support</h3>
                <p className="text-xs text-gray-300">Free Legal Consultation</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.type === 'user'
                      ? 'bg-amber-600 text-white rounded-br-md'
                      : 'bg-[#1e293b] text-gray-100 rounded-bl-md'
                  }`}
                >
                  {msg.type === 'bot' ? renderMessageText(msg.text) : msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#1e293b] rounded-2xl rounded-bl-md">
                  <TypingIndicator />
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="border-t border-[#1e293b] p-4 flex-shrink-0 bg-[#0f172a]">
            {/* Step: Intro buttons */}
            {step === 'intro' && !isTyping && messages.length > 0 && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleSelection('yes')}
                  className="w-full py-3 px-4 border-2 border-amber-500 text-amber-400 rounded-xl font-medium hover:bg-amber-500 hover:text-[#0f172a] transition-colors text-sm"
                >
                  Yes, I need help
                </button>
                <button
                  onClick={() => handleSelection('no')}
                  className="w-full py-3 px-4 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-700 transition-colors text-sm"
                >
                  Just browsing
                </button>
              </div>
            )}

            {/* Step: Diagnosis buttons */}
            {step === 'diagnosis' && !isTyping && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleSelection('diagnosed')}
                  className="w-full py-3 px-4 border-2 border-amber-500 text-amber-400 rounded-xl font-medium hover:bg-amber-500 hover:text-[#0f172a] transition-colors text-sm"
                >
                  Yes, diagnosed
                </button>
                <button
                  onClick={() => handleSelection('suspected')}
                  className="w-full py-3 px-4 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-700 transition-colors text-sm"
                >
                  Suspected, not confirmed
                </button>
                <button
                  onClick={() => handleSelection('not-sure')}
                  className="w-full py-3 px-4 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-700 transition-colors text-sm"
                >
                  Not sure
                </button>
              </div>
            )}

            {/* Step: Veteran buttons */}
            {step === 'veteran' && !isTyping && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleSelection('yes')}
                  className="w-full py-3 px-4 border-2 border-amber-500 text-amber-400 rounded-xl font-medium hover:bg-amber-500 hover:text-[#0f172a] transition-colors text-sm"
                >
                  Yes, veteran
                </button>
                <button
                  onClick={() => handleSelection('no')}
                  className="w-full py-3 px-4 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-700 transition-colors text-sm"
                >
                  No
                </button>
                <button
                  onClick={() => handleSelection('not-sure')}
                  className="w-full py-3 px-4 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-700 transition-colors text-sm"
                >
                  Not sure
                </button>
              </div>
            )}

            {/* Step: State dropdown */}
            {step === 'state' && !isTyping && (
              <div>
                <select
                  onChange={(e) => handleStateSelect(e.target.value)}
                  defaultValue=""
                  className="w-full py-3 px-4 bg-[#1e293b] border border-gray-600 text-gray-100 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm"
                >
                  <option value="" disabled>Select your state</option>
                  {US_STATES.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Step: Contact form */}
            {step === 'contact' && !isTyping && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={leadData.firstName}
                    onChange={(e) => setLeadData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="w-full py-3 px-4 bg-[#1e293b] border border-gray-600 text-gray-100 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    value={leadData.lastName}
                    onChange={(e) => setLeadData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="w-full py-3 px-4 bg-[#1e293b] border border-gray-600 text-gray-100 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm placeholder-gray-500"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={leadData.phone}
                  onChange={(e) => setLeadData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full py-3 px-4 bg-[#1e293b] border border-gray-600 text-gray-100 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={leadData.email}
                  onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full py-3 px-4 bg-[#1e293b] border border-gray-600 text-gray-100 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm placeholder-gray-500"
                />
                <button
                  onClick={handleContactSubmit}
                  disabled={isSubmitting || !leadData.firstName || !leadData.lastName || !leadData.phone}
                  className="w-full py-3 px-4 bg-amber-500 text-[#0f172a] rounded-xl font-semibold hover:bg-amber-400 transition-colors text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to be contacted about your case.
                </p>
              </div>
            )}

            {/* Step: Submitted - show restart option */}
            {step === 'submitted' && !isTyping && (
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-3">
                  Need to reach us now?
                </p>
                <a
                  href="tel:2146994543"
                  className="inline-flex items-center gap-2 py-3 px-6 bg-amber-500 text-[#0f172a] rounded-xl font-semibold hover:bg-amber-400 transition-colors text-sm"
                >
                  Call (214) 699-4543
                </a>
              </div>
            )}

            {/* Step: Browsing - show minimize option */}
            {step === 'browsing' && !isTyping && (
              <div className="text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-6 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-700 transition-colors text-sm"
                >
                  Close chat
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pulse animation keyframes */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.4);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(217, 119, 6, 0);
          }
        }
      `}</style>
    </>
  )
}
