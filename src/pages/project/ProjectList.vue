<script setup
        lang='ts'>

import { createProjectApi, getProjectListApi } from 'src/api/project/project'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { TableColumn } from 'src/types/types'
import { HejiProject } from 'src/api/project/types/project'
import { useQuasar } from 'quasar'
import { getUserListApi } from 'src/api/user/user'
import { User } from 'src/api/user/types/user'

const $q = useQuasar()
const columns: TableColumn[] = [
  { name: 'icon', align: 'left', label: '图标', field: 'icon' },
  { name: 'projectName', align: 'left', label: '项目名称', field: 'projectName' },
  { name: 'keyword', align: 'left', label: '关键字', field: 'keyword' },
  { name: 'description', align: 'left', label: '描述', field: 'description' },
  { name: 'manager', align: 'left', label: '负责人', field: 'manager' },
]
const pageNum = ref(1)
const pageSize = ref(10)
const tableData = ref<HejiProject[]>()
const total = ref(0)
const router = useRouter()
// const pagination = ref(true)
const pageCount = computed(() => {
  return Math.ceil(total.value / pageSize.value)
})
const tableLoading = ref(false)
const selectedProject = ref([])
const projectDialogOpenFlag = ref(false)
const submitBtnLoading = ref(false)

const userSelect = ref(null)
const projectFrom = ref(null)
const createProject = ref<HejiProject>({
  description: '',
  icon: '',
  keyword: '',
  manager: '',
  projectName: '',
})
const managerOptions = ref<User[]>([])
const getProjectList = async() => {
  if (tableLoading.value) return
  tableLoading.value = true
  const { data } = await getProjectListApi({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  })
  tableLoading.value = false
  tableData.value = data.content
  total.value = data.totalElements
}
const rowClick = (env: Event, row: HejiProject) => {
  console.log(row.projectName)
  router.push(`/project/${row.id}/overview`)
}

// 获取列表
onMounted(async() => {
  await getProjectList()
})

// 取消
const cancelCreate = () => {
  createProject.value = {
    description: '',
    icon: '',
    keyword: '',
    manager: '',
    projectName: '',
  }
  projectDialogOpenFlag.value = false
}

const submitCreate = async() => {
  submitBtnLoading.value = true
  createProjectApi(createProject.value).then(() => {
    $q.notify({
      message: '提交成功',
      color: 'accent',
      type: 'positive',
      position: 'top',
    })
    getProjectList()

    submitBtnLoading.value = false
    projectDialogOpenFlag.value = false
    cancelCreate()
  }).catch(err => {
    $q.notify({
      message: err.response.data.message,
      color: 'orange',
      type: 'negative',
      position: 'top',
    })
    submitBtnLoading.value = false

  })
}

const getUSerList = async(val: string, update: any) => {
  // console.log(val)
  if (val === '') {
    update(() => {
      managerOptions.value = []
    })
  }
  const { data } = await getUserListApi({ username: val })

  update(() => {
    managerOptions.value = data
  })
}

const managerUpdate = (val: string) => {
  console.log(val)
}
</script>

<template>
  <q-card class='q-ma-lg transparent no-shadow'>
    <q-btn color='accent'
           @click='projectDialogOpenFlag=true'>
      新建项目
    </q-btn>
  </q-card>
  <q-card class='q-ma-lg'>
    <q-table title='项目列表'
             row-key='id'
             hide-pagination
             separator='horizontal'
             selection='multiple'
             :loading='tableLoading'
             :rows-per-page-options='[pageSize]'
             :columns='columns'
             :rows='tableData'
             no-data-label=''
             v-model:selected='selectedProject'
             @row-click='rowClick' />
    <div class='row justify-center q-mt-md'>
      <q-pagination v-model='pageNum'
                    color='grey-8'
                    :max='pageCount'
                    input
                    @update:model-value='getProjectList'
                    size='md' />
    </div>
  </q-card>

  <q-dialog v-model='projectDialogOpenFlag'
            position='right'
            transition-show='slide-left'
            :full-height='true'>
    <q-card class='q-pa-lg flex column justify-between'
            style='width: 100vw'>
      <div>
        <div class='text-h6 q-py-md'>新建项目</div>
        <q-form class='q-gutter-lg'
                ref='projectFrom'>
          <q-input standout='bg-accent text-primary'
                   label='名称'
                   v-model='createProject.projectName' />
          <q-input standout='bg-accent text-primary'
                   label='关键字'
                   v-model='createProject.keyword' />
          <q-input standout='bg-accent text-primary'
                   label='图标'
                   v-model='createProject.icon' />
          <q-input standout='bg-accent text-primary'
                   label='描述'
                   v-model='createProject.description' />
          <q-select ref='userSelect'
                    standout='bg-accent text-primary'
                    label='负责人'
                    use-input
                    fill-input
                    hide-selected
                    v-model='createProject.manager'
                    :options='managerOptions'
                    emit-value
                    option-label='username'
                    option-value='username'
                    @filter='getUSerList'
                    @input='managerUpdate' />
        </q-form>
      </div>

      <q-card-actions align='right'>
        <q-btn @click='cancelCreate'>取消</q-btn>
        <q-btn color='accent'
               @click='submitCreate'
               :loading='submitBtnLoading'>
          提交
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
</style>
