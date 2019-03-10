<template>
  <div class="day">
  <router-link :to="{ name: 'Weeks' }">Meal Plan</router-link>

    <h1>{{ dayName }}</h1>
    <ul>
      <li :key="meals" v-for="(meals, mealTime) in day">
      <h2>{{mealTime}}</h2>
        <router-link :to="{ name: 'AddMeal' }">Add a meal</router-link>
      <ul>
        <li :key="meal" v-for="meal in meals">{{ meal }}</li>
      </ul>
      </li>
    </ul>day
  </div>
</template>

<script>
import WeekService from '@/services/WeekService'
import humanWeekName from '@/helpers/humanWeekName'
export default {
  name: 'day',
  data () {
    return {
      day: null,
    }
  },
  computed: {
    dayName: function() {
        return humanWeekName(this.$route.params.day)
      }
    
  },
  mounted () {
    this.getDay()
  },
  methods: {
    async getDay () {
      const response = await WeekService.fetchSingleDay({weekId: this.$route.params.id, day: this.$route.params.day})
      this.day = response.data.data
    },
  }
}
</script>
