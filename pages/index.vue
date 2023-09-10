<template>
  <div>
    <h2>
      ChatGPT APITEST ~AXOIS~
    </h2>
    <div>
      <v-btn @click="fetchOpenaiData()">
        API送信(更新)
      </v-btn>
    </div>
    <div>
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api' 
import useOpenaiApi from '~/api/openai/index.mjs'

export default defineComponent({
  setup () {
    // const fetchData = ref('')

    const { data, fetchOpenaiResult } = useOpenaiApi()

    const fetchOpenaiData = async () => {
      console.log('2')
      // const { text } = await (await fetch("/api/openai")).json()
      // data.value = await text
      await fetchOpenaiResult()
    }

    return {
      data,
      fetchOpenaiData
    }
  }
})
</script>
