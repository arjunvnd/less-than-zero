type Vendor = {
  id: number;
  name: string;
};

export type UserInformation = {
  name: string;
  phoneNumber: string;
  email: string;
  budgetRange: string;
  pincode: string;
};

type TableData = UserInformation & {
  submissionDate: Date;
  assignedVendors: Vendor[];
};

export function mockAssignVendorData(
  name: string,
  phoneNumber: string,
  email: string,
  budgetRange: string,
  pincode: string,
  submissionDate: Date,
  assignedVendors: Vendor[]
): TableData {
  return {
    name,
    phoneNumber,
    email,
    budgetRange,
    pincode,
    submissionDate,
    assignedVendors,
  };
}

export type VendorStatus = "active" | "inactive";

type VendorData = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  serviceArea: string[];
  status: "active" | "inactive";
};

function generateMockVendorData(
  name: string,
  email: string,
  phoneNumber: string,
  serviceArea: string[],
  status: "active" | "inactive"
): VendorData {
  // Function to generate a random string for a unique ID
  const generateId = (): string => {
    return Math.random().toString(36).substring(2, 10); // Generates a random 8-character string
  };

  return {
    id: generateId(),
    name,
    email,
    phoneNumber,
    serviceArea,
    status,
  };
}

export const mockVendorData = [
  generateMockVendorData(
    "Vendor 1",
    "vendor@example.com",
    "9876543210",
    ["695001", "695002", "695003"],
    "active"
  ),
  generateMockVendorData(
    "Solar Saritha",
    "saritha@example.com",
    "9876543211",
    ["695001", "695002", "695003"],
    "active"
  ),
  generateMockVendorData(
    "Sunlight",
    "sunlight@example.com",
    "9876543211",
    ["695001", "695002", "695003"],
    "inactive"
  ),
];
