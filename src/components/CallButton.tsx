'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { trackPhoneClick } from '@/components/Analytics'
import { cn } from '@/lib/utils'

interface CallButtonProps extends ButtonProps {
    phoneNumber: string
    label?: string
    location?: string
    showBadge?: boolean
}

export function CallButton({
    phoneNumber,
    label,
    location = 'General',
    showBadge = false,
    className,
    variant = 'default',
    size = 'lg',
    ...props
}: CallButtonProps) {
    const formattedPhone = phoneNumber.replace(/[^\d]/g, '')
    const displayLabel = label || phoneNumber

    return (
        <Button
            variant={variant}
            size={size}
            className={cn("text-lg px-8 py-6 h-auto transition-all duration-200", className)}
            asChild
            {...props}
        >
            <a
                href={`tel:${formattedPhone}`}
                onClick={() => trackPhoneClick(phoneNumber, location)}
            >
                <Phone className="h-5 w-5 mr-2" />
                {displayLabel}
                {showBadge && (
                    <span className="ml-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        Free Call
                    </span>
                )}
            </a>
        </Button>
    )
}
