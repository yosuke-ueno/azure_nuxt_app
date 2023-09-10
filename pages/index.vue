<template>
  <div>
    <h2>
      ChatGPT APITEST ~AXOIS~
    </h2>
    <div>
      <v-btn @click="fetchData()">
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

export default defineComponent({
  setup () {
    const data = ref('')

    const fetchData = async () => {
      console.log('2')
      // const { text } = await (await fetch("/api/openai")).json()
      // data.value = await text
      const fetchData = await fetch('/api/openai')
      data.value = await fetchData.json()
      console.log('fetchData', data.value)
    }

    return {
      data,
      fetchData
    }
  }
})
</script>
