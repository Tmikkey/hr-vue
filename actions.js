export default {
  async getCategories({ commit }) {
    try {
      const res = await this.$axios.$get('/categories')
      commit('SET_CATEGORIES', res.data)
    } catch (e) {
      throw new Error(`Ошибка получения категорий: ${JSON.stringify(e)}`)
    }
  },
}
