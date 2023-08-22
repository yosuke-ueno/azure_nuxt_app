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
      const { text } = await (await fetch("/api/openai")).json()
      data.value = await text
    }

    return {
      data,
      fetchData
    }
  }
})
</script>
