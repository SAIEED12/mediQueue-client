// app/add-tutor/page.jsx
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import AddTutorForm from "@/components/AddTutorForm"

export default async function AddTutorPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  const { token } = await auth.api.getToken({
    headers: await headers()
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AddTutorForm
        token={token}
        userEmail={session?.user?.email}
        userName={session?.user?.name}
      />
    </div>
  )
}