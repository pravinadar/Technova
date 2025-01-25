import { FundTrackingGraph } from "./FundTrackingGraph"
import { ContributorList } from "./ContributorList"
import { FundAllocationChart } from "./FundAllocationChart"

const projectData = {
  currentFunds: 75000,
  goal: 100000,
  contributors: [
    { id: "1", name: "Alice Johnson", amount: 5000, avatar: "/placeholder.svg?height=32&width=32" },
    { id: "2", name: "Bob Smith", amount: 3500, avatar: "/placeholder.svg?height=32&width=32" },
    { id: "3", name: "Carol Williams", amount: 2000, avatar: "/placeholder.svg?height=32&width=32" },
    { id: "4", name: "David Brown", amount: 1500, avatar: "/placeholder.svg?height=32&width=32" },
    { id: "5", name: "Eva Davis", amount: 1000, avatar: "/placeholder.svg?height=32&width=32" },
  ],
  fundAllocations: [
    { name: "Supplies", value: 30000, color: "#FF6384" },
    { name: "Labor", value: 25000, color: "#36A2EB" },
    { name: "Logistics", value: 15000, color: "#FFCE56" },
    { name: "Marketing", value: 5000, color: "#4BC0C0" },
  ],
}

export function ProjectDashboard() {
  return (
    (<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="col-span-4">
        <FundTrackingGraph currentFunds={projectData.currentFunds} goal={projectData.goal} />
      </div>
      <div className="col-span-3">
        <ContributorList contributors={projectData.contributors} />
      </div>
      <div className="col-span-full">
        <FundAllocationChart allocations={projectData.fundAllocations} />
      </div>
    </div>)
  );
}

