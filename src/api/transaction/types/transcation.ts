
export interface GetTranslationListResponse {
  description: string;
  developedBy: string;
  epicLinkId: number | null;
  epicLinkName: null | string;
  gist: string;
  handledBy: string;
  id: number;
  name: string;
  reportedBy: null | string;
  solutionResult: null | string;
  testedBy: string;
  transactionPriority: string;
  transactionStatus: null | string;
  typeId: number;
  createdAt: Date;
}

export interface GetIssueListReq{
  pageNum?: number;
  pageSize?: number;
  projectId: string;
}
