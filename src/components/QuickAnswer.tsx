interface QuickAnswerProps {
  question: string
  answer: string
}

export function QuickAnswer({ question, answer }: QuickAnswerProps) {
  return (
    <div className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg my-6">
      <h3 className="font-bold text-lg text-foreground mb-2">{question}</h3>
      <p className="text-muted-foreground leading-relaxed">{answer}</p>
    </div>
  )
}
