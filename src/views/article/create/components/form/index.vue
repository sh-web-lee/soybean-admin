<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInst } from 'naive-ui';
import Vditor from './v-ditor.vue';

const formRef = ref<FormInst | null>(null);

const ruleForm = reactive({
  title: '',
  author: '',
  description: ''
});

const rules = ref({
  title: {
    required: true,
    message: 'Enter a title',
    trigger: 'blur'
  },
  author: {
    required: true,
    message: 'Enter author',
    trigger: 'blur'
  },
  description: {
    required: true,
    message: 'Enter a description',
    trigger: 'blur'
  }
});

const submitForm = () => {
  window.console.log(ruleForm);
};
</script>
<template>
  <n-form>
    <!-- 文章标题 -->
    <n-form-item ref="formRef" :model="ruleForm" :rules="rules">
      <n-input-group>
        <n-input-group-label>title</n-input-group-label>
        <n-input v-model:value="ruleForm.title" placeholder="Enter an article title" maxlength="30" autofocus />
      </n-input-group>
    </n-form-item>
    <!-- 文章作者 -->
    <n-form-item>
      <n-input-group>
        <n-input-group-label>author</n-input-group-label>
        <n-input v-model:value="ruleForm.author" placeholder="Author name" maxlength="30" />
      </n-input-group>
    </n-form-item>
    <!-- 文章描述 -->
    <n-form-item>
      <n-input-group>
        <n-input-group-label>Describe</n-input-group-label>
        <n-input v-model:value="ruleForm.description" placeholder="Article description" maxlength="100" />
      </n-input-group>
    </n-form-item>
    <!-- 文章内容 -->
    <n-form-item>
      <Vditor></Vditor>
    </n-form-item>
    <!-- 提交按钮 -->
    <n-form-item>
      <div class="n-btn">
        <n-button type="primary" @click="submitForm"> Save </n-button>
      </div>
    </n-form-item>
  </n-form>
</template>
<style scoped>
:deep(.n-form-item-feedback-wrapper) {
  min-height: 0 !important;
}
</style>
