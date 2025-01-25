"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Neighborhood Cleanup",
    description: "Join us in cleaning up local parks and streets to create a cleaner, safer environment for all.",
    raised: 7500,
    goal: 10000,
  },
  {
    title: "Youth Mentorship Program",
    description:
      "Support our initiative to pair experienced mentors with at-risk youth, fostering personal growth and community engagement.",
    raised: 15000,
    goal: 25000,
  },
  {
    title: "Community Garden",
    description:
      "Help us transform vacant lots into thriving community gardens, promoting sustainable living and food security.",
    raised: 5000,
    goal: 12000,
  },
]

export default function FeaturedProjects() {
  return (
    (<section className="py-12 px-6 bg-white bg-opacity-80 backdrop-blur-md">
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <Progress value={(project.raised / project.goal) * 100} />
                  <p className="text-sm text-gray-600">
                    ${project.raised.toLocaleString()} raised of ${project.goal.toLocaleString()} goal
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Project</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>)
  );
}

