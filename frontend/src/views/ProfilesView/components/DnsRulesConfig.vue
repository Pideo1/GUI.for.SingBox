<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useBool } from '@/hooks'
import { deepClone } from '@/utils'
import { RuleType } from '@/enums/kernel'
import { DraggableOptions } from '@/constant/app'
import { DefaultDnsRule, DefaultDnsRules } from '@/constant/profile'
import { DnsRuleTypeOptions, DnsRuleActionOptions } from '@/constant/kernel'

interface Props {
  serversOptions: { label: string; value: string }[]
  ruleSet: IRuleSet[]
}

const props = defineProps<Props>()

const model = defineModel<IDNSRule[]>({ default: DefaultDnsRules })

let ruleId = 0
const fields = ref<IDNSRule>(DefaultDnsRule())

const { t } = useI18n()
const [showEditModal] = useBool(false)

const handleAdd = () => {
  ruleId = -1
  fields.value = DefaultDnsRule()
  showEditModal.value = true
}

defineExpose({ handleAdd })

const handleAddEnd = () => {
  if (ruleId !== -1) {
    model.value[ruleId] = fields.value
  } else {
    model.value.unshift(fields.value)
  }
}

const handleEdit = (index: number) => {
  ruleId = index
  fields.value = deepClone(model.value[index])
  showEditModal.value = true
}

const handleDeleteRule = (index: number) => {
  model.value.splice(index, 1)
}

const renderRule = (rule: IDNSRule) => {
  const { type, payload, server, action } = rule
  const children: string[] = [type]
  if (type === RuleType.RuleSet) {
    const tag = props.ruleSet.find((v) => v.id === rule.payload)?.tag || rule.payload
    children.push(tag)
  } else {
    children.push(payload)
  }
  children.push(action)
  if (server) {
    const proxy = props.serversOptions.find((v) => v.value === server)?.label || server
    children.push(proxy)
  }
  return children.join(',')
}
</script>
<template>
  <Empty v-if="model.length === 0">
    <template #description>
      <Button @click="handleAdd" icon="add" type="primary" size="small">
        {{ t('common.add') }}
      </Button>
    </template>
  </Empty>

  <div v-draggable="[model, DraggableOptions]">
    <Card v-for="(rule, index) in model" :key="rule.id" class="rule-item">
      <div class="font-bold">
        {{ renderRule(rule) }}
      </div>
      <div class="ml-auto">
        <Button @click="handleEdit(index)" icon="edit" type="text" size="small" />
        <Button @click="handleDeleteRule(index)" icon="delete" type="text" size="small" />
      </div>
    </Card>
  </div>

  <Modal
    v-model:open="showEditModal"
    @ok="handleAddEnd"
    title="kernel.dns.tab.rules"
    max-width="80"
    max-height="80"
  >
    <div class="form-item">
      {{ t('kernel.dns.rules.type') }}
      <Select v-model="fields.type" :options="DnsRuleTypeOptions" />
    </div>
    <div class="form-item">
      {{ t('kernel.dns.rules.payload') }}
      <Input v-model="fields.payload" />
    </div>
    <div class="form-item">
      {{ t('kernel.dns.rules.action') }}
      <Select v-model="fields.action" :options="DnsRuleActionOptions" />
    </div>
    <div class="form-item">
      {{ t('kernel.dns.rules.server') }}
      <Select v-model="fields.server" :options="serversOptions" />
    </div>
  </Modal>
</template>

<style lang="less" scoped>
.rule-item {
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 2px;
  .warn {
    color: rgb(200, 193, 11);
    cursor: pointer;
  }
}
</style>
