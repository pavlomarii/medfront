export interface PatientModel {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  email: string;
  phone: string;
  blood_type: number;
  rhesus: boolean;
  user: Object;
}
