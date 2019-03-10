<template>
  <div class="week">
    <h1>Weeks</h1>
    <h2>{{ week.name }}</h2>
    <ul>
      <li :key="day" v-for="day in days">
        <h3>{{humanWeekName(day)}}</h3>
        <ul>
          <li :key="mealsKey" v-for="(meals, mealsKey) in getDay(week, day)">
            <router-link :to="{ name: 'Week' }">{{ mealsKey }}</router-link>
            <ul>
              <li :key="meal" v-for="meal in meals"> {{ meal }}</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import WeekService from '@/services/WeekService'
import humanWeekName from '@/helpers/humanWeekName'
export default {
  name: 'weeks',
  data () {
    return {
      weeks: [],
      days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      meals: ['breakfast', 'lunch', 'dinner']
    }
  },
  mounted () {
    this.getWeek()
  },
  methods: {
    async getWeek () {
      const response = await WeekService.fetchSingleDay({weekId: params.id, day: day})
      this.weeks = response.data.data
    },
    getDay(week, day) {
      return week.days[day]
    },
    humanWeekName
  }
}
</script>
