<template>
  <div class="weeks">
    <h1>Weeks</h1>
    <div :key="week" v-for="week in weeks" class="week">
    <h2>{{ week.name }}</h2>
    <ul class="days">
      <li :key="day" v-for="day in days" class="day">
        <router-link v-bind:to="{ name: 'Day', params: { id: week._id, day: day } }">
          <h3>{{humanWeekName(day)}}</h3>
        </router-link>
        <ul>
          <li :key="mealsKey" v-for="(meals, mealsKey) in getDay(week, day)">
            <h4>{{ mealsKey }}</h4> 
            <ul>
              <li :key="meal" v-for="meal in meals"> {{ meal }}</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    </div>
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
    this.getWeeks()
  },
  methods: {
    async getWeeks () {
      const response = await WeekService.fetchWeeks()
      this.weeks = response.data.data
    },
    getDay(week, day) {
      return week.days[day]
    },
    humanWeekName
  }
}
</script>
<style style="css" scoped>
  .week{
    width:100%;
  }
  .days {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .day {
    
    list-style: none;
    flex-grow: 0;
    flex-shrink: 0;
    width: calc(100%/7);
    padding: 10px;
    box-sizing: border-box;
  }
  .weeks ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
