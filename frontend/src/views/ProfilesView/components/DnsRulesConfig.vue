<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useBool } from '@/hooks'
import { deepClone } from '@/utils'
import { DraggableOptions } from '@/constant/app'
import { DefaultDnsRule, DefaultDnsRules } from '@/constant/profile'
import { DnsRuleTypeOptions, DnsRuleActionOptions } from '@/constant/kernel'
import { RuleType, ClashMode, RulesetType, RulesetFormat } from '@/enums/kernel'

interface Props {
  serversOptions: { label: string; value: string }[]
  ruleSet: IRuleSet[]
}

const props = defineProps<Props>()

const model = defineModel<IDNSRule[]>({ default: DefaultDnsRules() })

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

const handleUse = (ruleset: any) => {
  fields.value.payload = ruleset.id
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
      {{ t('kernel.dns.rules.action') }}
      <Select v-model="fields.action" :options="DnsRuleActionOptions" />
    </div>
    <div class="form-item">
      {{ t('kernel.dns.rules.type') }}
      <Select v-model="fields.type" :options="DnsRuleTypeOptions" />
    </div>
    <div v-if="fields.type !== RuleType.RuleSet" class="form-item">
      {{ t('kernel.dns.rules.payload') }}
      <CodeViewer
        v-if="fields.type === RuleType.Inline"
        v-model="fields.payload"
        editable
        lang="json"
        style="min-width: 220px"
      />
      <Radio
        v-else-if="fields.type === RuleType.ClashMode"
        v-model="fields.payload"
        :options="[
          {
            label: 'kernel.global',
            value: ClashMode.Global
          },
          {
            label: 'kernel.direct',
            value: ClashMode.Direct
          }
        ]"
      />
      <Input v-else v-model="fields.payload" autofocus />
    </div>
    <div class="form-item">
      {{ t('kernel.dns.rules.server') }}
      <Select v-model="fields.server" :options="serversOptions" />
    </div>
    <template v-if="fields.type === RuleType.RuleSet">
      <Divider>{{ t('kernel.route.tab.rule_set') }}</Divider>
      <div class="rulesets">
        <Empty v-if="ruleSet.length === 0" :description="t('kernel.route.rule_set.empty')" />
        <template v-else>
          <Card
            v-for="ruleset in ruleSet"
            :key="ruleset.tag"
            :title="ruleset.tag"
            @click="handleUse(ruleset)"
            :selected="fields.payload === ruleset.id"
            v-tips="ruleset.type"
            class="ruleset"
          >
            {{ ruleset.type }}
            {{ ruleset.type === RulesetType.Inline ? RulesetFormat.Source : ruleset.format }}
          </Card>
        </template>
      </div>
    </template>
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

.rulesets {
  display: flex;
  flex-wrap: wrap;
  .ruleset {
    width: calc(33.3333% - 16px);
    margin: 8px;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
