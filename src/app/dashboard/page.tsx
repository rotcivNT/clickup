import { CreateOrganization, OrganizationList } from "@clerk/nextjs";

function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <OrganizationList
        afterCreateOrganizationUrl="/workspace/:id"
        afterSelectOrganizationUrl="/workspace/:id"
      />
    </div>
  );
}

export default Dashboard;
