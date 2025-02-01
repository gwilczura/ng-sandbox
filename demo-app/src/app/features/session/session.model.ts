export interface Session {
  id: number;
  name: string;
  date: Date;
}

export interface Item {
  vote: string;
  person: string;
  category: string;
  name: string;
  groupName: string;
  description: string;
  date: string;
  hour: string;
}
