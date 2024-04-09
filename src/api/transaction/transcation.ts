import { useGet } from 'src/utils/request'
import { PageResponse } from '../common/commonRespose'
import { GetIssueListReq, GetTranslationListResponse } from './types/transcation'

export function getTransactionListApi(params: GetIssueListReq) {
  return useGet<PageResponse<GetTranslationListResponse>>('/transactions', params)
}
