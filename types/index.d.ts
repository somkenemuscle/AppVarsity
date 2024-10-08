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

// ====== INTERACT PARAMS
declare type InteractParams = {
  id: string;
  username: string;
  interaction: string;
  profilePic: string;
  clerkId: string;
};

// types/gtag.d.ts
interface Window {
  gtag: (command: string, config: string | object) => void;
}


interface InteractionMapParams {
  _id: string;
  author: {
    clerkId: string;
    username: string;
    profilePic: string;
  };
  interaction: string;
  // Add any other fields that exist in your interaction objects
}

interface InteractionsIdPageProps {
  params: {
    id: string;
  };
}

declare type createInteractionParams = {
  interaction: {
    interaction: string
  };
  userId: string;
}