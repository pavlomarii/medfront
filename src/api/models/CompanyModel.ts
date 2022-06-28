export interface CompanyModel {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  latitude: number | null;
  longitude: number | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  working_hours: string[] | null;
  amount_users: number;
  amount_patients: number;
}

export interface CompanyBody {
  name: string;
}
