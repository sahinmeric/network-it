export interface IFeed {
  memberName: string;
  content: string;
  memberId: number;
  timestamp: string;
  type: string;
  link?: string;
}

export interface IFeeds {
  feeds: IFeed[];
}
