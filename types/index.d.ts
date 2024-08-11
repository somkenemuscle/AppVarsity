interface Window {
    dataLayer: any[];
}


interface SidebarProps {
  children: React.ReactNode;
}

// Define the props for the Breadcrumb component
interface BreadcrumbProps {
  children: React.ReactNode;
}

// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  profilePic: string;
};

// =====UPDATE USER PARAMS
declare type UpdateUserParams = {
  username: string;
  profilePic: string;
};