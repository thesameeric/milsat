export interface Availability {
    id: string
    user_id: string
    organization_id: string
    title: string
    description?: string
    duration: number
    time_slots: {
        day_of_week: number
        start_time: string
        end_time: string
    }[]
    timezone: string
    is_active: boolean
}

export interface Booking {
    id: string
    availability_id: string
    attendee_name: string
    attendee_email: string
    start_time: string
    end_time: string
    meeting_link?: string
    status: string
}

export interface CreateBookingOptions {
    availability_id: string
    attendee_name: string
    attendee_email: string
    attendee_phone?: string
    start_time: string
    timezone: string
    notes?: string
}

/**
 * Scheduling API
 */
export class SchedulingAPI {
    constructor(
        private request: <T>(endpoint: string, options?: RequestInit) => Promise<T>,
        private useApiRoute: boolean = false
    ) { }

    private getBase(): string {
        return this.useApiRoute ? "/api/v1/api" : "/api/v1"
    }

    /**
     * Get availability details (public)
     */
    async getAvailability(id: string): Promise<Availability> {
        return this.request<Availability>(
            `${this.getBase()}/scheduling/availability/${id}`
        )
    }

    /**
     * List availabilities for an organization (public)
     */
    async list(orgId: string): Promise<{ data: Availability[], total: number }> {
        return this.request<{ data: Availability[], total: number }>(
            `${this.getBase()}/scheduling/organizations/${orgId}/availabilities`
        )
    }

    /**
     * Book a meeting (public)
     */
    async book(options: CreateBookingOptions): Promise<Booking> {
        return this.request<Booking>(`${this.getBase()}/scheduling/bookings`, {
            method: "POST",
            body: JSON.stringify(options),
        })
    }
}
