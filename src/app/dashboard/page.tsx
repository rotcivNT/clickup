import { CreateOrganization, OrganizationList } from "@clerk/nextjs";

function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <OrganizationList
        afterCreateOrganizationUrl="/workspace/:id/home"
        afterSelectOrganizationUrl="/workspace/:id/home"
      />
    </div>
  );
}

export default Dashboard;
