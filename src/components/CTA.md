# CTA Component

A reusable Call-to-Action component with two buttons:
1. **Get Started** - A link button that navigates to a specified page
2. **Talk to an Expert** - Opens a modal with a contact form

## Features

- ✅ Customizable button text and link
- ✅ Modal with full contact form (name, email, phone, date, time)
- ✅ Form validation using Zod
- ✅ Date picker for meeting scheduling
- ✅ Time slot selection
- ✅ Toast notifications for success/error
- ✅ Responsive design
- ✅ Accessible dialog component

## Usage

### Basic Usage

```tsx
import { CTA } from "@/components/CTA";

export default function MyPage() {
  return (
    <div>
      <CTA />
    </div>
  );
}
```

### Custom Configuration

```tsx
import { CTA } from "@/components/CTA";

export default function MyPage() {
  return (
    <div>
      <CTA
        getStartedHref="/signup"
        getStartedText="Start Free Trial"
        talkToExpertText="Book a Demo"
        className="my-8"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `getStartedHref` | `string` | `"/try"` | URL for the Get Started button |
| `getStartedText` | `string` | `"Get Started"` | Text for the Get Started button |
| `talkToExpertText` | `string` | `"Talk to an Expert"` | Text for the modal trigger button |
| `className` | `string` | `""` | Additional CSS classes for the container |

## Form Fields

The "Talk to an Expert" modal collects:
- **Full Name** (min 2 characters)
- **Email** (valid email format)
- **Phone Number** (min 10 digits)
- **Meeting Date** (future dates only)
- **Meeting Time** (9 AM - 5 PM slots)

## Data Storage

Form submissions are stored in the `contact_us` collection using the SDK's collection API.

## Example in Government Solutions Page

```tsx
import { CTA } from "@/components/CTA";

export default function GovernmentPage() {
  return (
    <div>
      {/* Your page content */}
      
      <section className="py-20">
        <CTA />
      </section>
    </div>
  );
}
```
