export interface IFeed {
  memberName: string;
  content: string;
  memberId: number;
  timestamp: string;
  type: string;
  link?: string;
}

export interface IMember {
  memberId: string;
  memberName: string;
  jobTitle: string;
}
export interface IGroup {
  id: string;
  name: string;
  private: boolean;
  location: string;
  members: IMember[];
}
