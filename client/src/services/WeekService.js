import Api from '@/services/Api'

export default {
  fetchWeeks() {
    return Api().get('week')
  },
  fetchSingleDay(params) {
    return Api().get(`week/${params.weekId}/${params.day}`)
  }
}
