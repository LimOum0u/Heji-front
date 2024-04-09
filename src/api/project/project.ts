import { useGet, usePost } from 'src/utils/request'
import { PageResponse } from 'src/api/common/commonRespose'
import { HejiProject } from 'src/api/project/types/project'

export function getProjectListApi(params: any) {
  return useGet<PageResponse<HejiProject>>('projects', params)
}

export function createProjectApi(params: HejiProject) {
  return usePost<HejiProject>('projects', params)
}
