export interface CompanyModel {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  amount_users: number;
  amount_patients: number;
}

export interface CompanyBody {
  name: string;
}