export interface AcademicsInterface {
  id: number;
  row: {
    dates: string;
    title: string;
    cgpa?: number;
    percentage?: number;
    organization: string;
  };
}
