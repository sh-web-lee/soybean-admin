<template>
  <n-card title="Manage user" :bordered="false" class="rounded-16px shadow-sm">
    <n-space class="pb-12px" justify="space-between">
      <n-space>
        <n-button type="primary" @click="handleAddTable">
          <icon-ic-round-plus class="mr-4px text-20px" />
          Add
        </n-button>
        <n-button type="error">
          <icon-ic-round-delete class="mr-4px text-20px" />
          Delete
        </n-button>
        <n-button type="success">
          <icon-uil:export class="mr-4px text-20px" />
          Export excel
        </n-button>
      </n-space>
      <n-space align="center" :size="18">
        <n-button size="small" type="primary" @click="getTableData">
          <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
          Refresh
        </n-button>
        <column-setting v-model:columns="columns" />
      </n-space>
    </n-space>
    <n-data-table :columns="columns" :data="tableData" :loading="loading" :pagination="pagination" />
    <table-action-modal v-model:visible="visible" :type="modalType" :edit-data="editData" />
  </n-card>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { fetchUserList } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
import { genderLabels, userStatusLabels } from '@/constants';
import TableActionModal from './components/TableActionModal.vue';
import type { ModalType } from './components/TableActionModal.vue';
import ColumnSetting from './components/ColumnSetting.vue';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();

const tableData = ref<UserManagement.User[]>([]);
function setTableData(data: UserManagement.User[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchUserList();
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

const columns: Ref<DataTableColumns<UserManagement.User>> = ref([
  {
    type: 'selection',
    align: 'center'
  },
  {
    key: 'index',
    title: 'Serial number',
    align: 'center'
  },
  {
    key: 'userName',
    title: 'User name',
    align: 'center'
  },
  {
    key: 'age',
    title: 'Age',
    align: 'center'
  },
  {
    key: 'gender',
    title: 'Gender',
    align: 'center',
    render: row => {
      if (row.gender) {
        const tagTypes: Record<UserManagement.GenderKey, NaiveUI.ThemeColor> = {
          '0': 'success',
          '1': 'warning'
        };

        return <NTag type={tagTypes[row.gender]}>{genderLabels[row.gender]}</NTag>;
      }

      return <span></span>;
    }
  },
  {
    key: 'phone',
    title: 'Phone',
    align: 'center'
  },
  {
    key: 'email',
    title: 'Email',
    align: 'center'
  },
  {
    key: 'userStatus',
    title: 'Status',
    align: 'center',
    render: row => {
      if (row.userStatus) {
        const tagTypes: Record<UserManagement.UserStatusKey, NaiveUI.ThemeColor> = {
          '1': 'success',
          '2': 'error',
          '3': 'warning',
          '4': 'default'
        };

        return <NTag type={tagTypes[row.userStatus]}>{userStatusLabels[row.userStatus]}</NTag>;
      }
      return <span></span>;
    }
  },
  {
    key: 'actions',
    title: 'Handler',
    align: 'center',
    render: row => {
      return (
        <NSpace justify={'center'}>
          <NButton size={'small'} onClick={() => handleEditTable(row.id)}>
            编辑
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDeleteTable(row.id)}>
            {{
              default: () => '确认删除',
              trigger: () => <NButton size={'small'}>删除</NButton>
            }}
          </NPopconfirm>
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<UserManagement.User>>;

const modalType = ref<ModalType>('add');

function setModalType(type: ModalType) {
  modalType.value = type;
}

const editData = ref<UserManagement.User | null>(null);

function setEditData(data: UserManagement.User | null) {
  editData.value = data;
}

function handleAddTable() {
  openModal();
  setModalType('add');
}

function handleEditTable(rowId: string) {
  const findItem = tableData.value.find(item => item.id === rowId);
  if (findItem) {
    setEditData(findItem);
  }
  setModalType('edit');
  openModal();
}

function handleDeleteTable(rowId: string) {
  window.$message?.info(`点击了删除，rowId为${rowId}`);
}

const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 15, 20, 25, 30],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
