import { AdminDashboard } from '@/components/AdminDashboard'

// TODO: Add authentication middleware before production
// This route should be protected with NextAuth, Clerk, or similar

export const metadata = {
    title: 'Admin Dashboard - Internal Use Only',
    robots: {
        index: false,
        follow: false,
    }
}

export default function AdminPage() {
    return <AdminDashboard />
}
