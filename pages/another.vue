<template>
  <div>
    <h2>
      ChatGPT APITEST ~AXOIS~
    </h2>
    <div>
      <v-btn @click="fetchData()">
        API送信
      </v-btn>
    </div>
    <div>
      <p>{{ openaiResult }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, unref } from '@nuxtjs/composition-api'
import useApi from '~/composables/another'

export default defineComponent({
  setup () {
    const { openaiResult, fetchOpenaiResult } = useApi()

    const fetchData = async () => {
      console.log('vue1')
      await fetchOpenaiResult()
    }

    return {
      openaiResult,
      fetchData
    }
  }
})
</script>