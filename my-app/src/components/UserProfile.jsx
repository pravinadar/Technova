"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, PhoneIcon, UserIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
    
const UserProfile = ({ user }) => {
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
              <AvatarImage src={user.photoUrl} alt={user.name} />
              <AvatarFallback className="text-2xl bg-purple-300 text-purple-800">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left space-y-2">
              <h1 className="text-3xl font-bold text-black">{user.name}</h1>
              <p className="text-gray-700 italic">{user.description}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                {user.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="bg-purple-200 text-purple-800 hover:bg-purple-300">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <CardContent className="bg-white p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoItem icon={<MapPinIcon />} label="Address" value={user.address} />
            <InfoItem icon={<CalendarIcon />} label="Date of Birth" value={user.dob} />
            <InfoItem icon={<PhoneIcon />} label="Phone" value={user.phone} />
            <InfoItem icon={<UserIcon />} label="Gender" value={user.gender} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start space-x-3">
    <div className="bg-purple-100 p-2 rounded-full">
      {React.cloneElement(icon, { className: "w-5 h-5 text-purple-600" })}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-black">{value}</p>
    </div>
  </div>
)

export default UserProfile