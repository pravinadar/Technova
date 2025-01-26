import UserProfile from "@/components/UserProfile"

const user = {
  name: "Sophia Anderson",
  photoUrl: "/placeholder.svg?height=128&width=128",
  description: "Passionate about the well being of the surrounding and the people ",
  address: "456 Design Avenue, Creative City, NY",
  dob: "May 15, 1992",
  phone: "+1 (555) 987-6543",
  gender: "Female",
  badges: ["Community Builder", "Philantropist", "Youth engagement", "Creative Contributor", "Team Lead"],
}

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-12">
      <UserProfile user={user} />
    </main>
  )
}