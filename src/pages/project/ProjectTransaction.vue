<script setup
        lang='ts'>

import { PageResponse } from 'src/api/common/commonRespose'
import { GetTranslationListResponse } from 'src/api/transaction/types/transcation'
import { TableColumn } from 'src/types/types'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getTransactionListApi } from 'src/api/transaction/transcation'

const pageNum = ref(1)
const pageSize = ref(15)
const tableData = ref<PageResponse<GetTranslationListResponse>>()
const total = ref(0)
const router = useRouter()

const columns: TableColumn[] = [
  { name: 'name', align: 'left', label: '编号', field: 'name' },
  { name: 'gist', align: 'left', label: '摘要', field: 'gist' },
  { name: 'transactionPriority', align: 'left', label: '优先级', field: 'transactionPriority' },
  { name: 'transactionStatus', align: 'left', label: '状态', field: 'transactionStatus' },
  { name: 'epicLinkName', align: 'left', label: '父事务', field: 'epicLinkName' },
  { name: 'handledBy', align: 'left', label: '经办人', field: 'handledBy' },
  { name: 'typeId', align: 'left', label: '类型', field: 'typeId' },
  { name: 'createdAt', align: 'left', label: '创建时间', field: 'createdAt' },
]

const getTransactionList = async() => {
  const { data } = await getTransactionListApi({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    projectId: router.currentRoute.value.params.projectId as string,
  })
  console.log(data)
  tableData.value = data
  total.value = data.totalElements
}

onMounted(async() => {
  await getTransactionList()
})

</script>

<template>
  <q-card>
    <q-table title='事务列表'
             :columns='columns'
             row-key='id'
             :rows='tableData?.content'
             separator='cell'
             :rows-per-page-options='[pageSize]'
             hide-pagination>
      <template #body-cell-gist='props'>
        <q-td :props='props'
              class='gist-column'>
          {{ props.row.gist }}
        </q-td>
      </template>
    </q-table>
    <div class='row justify-center'>
      <q-pagination v-model='pageNum'
                    color='grey-8'
                    :max='tableData?.totalPages || 0'
                    input
                    @update:model-value='getTransactionList' />
    </div>
  </q-card>
</template>

<style scoped>
.gist-column{
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
