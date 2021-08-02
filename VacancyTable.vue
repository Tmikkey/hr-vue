<template>
  <div class="vacancies">
    <div class="inner-container">
      <ModalVacancy v-if="isModalVisible" @closePop="closePopUp" />
      <h2>
        <NuxtLink :to="localePath('vacancies')" class="vacancies__link">
          {{ content.m_vacancies__link }}
          <svg
            width="33"
            height="24"
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8244 1L31 12M31 12L20.8244 23M31 12H0"
              stroke="#E94D37"
              stroke-width="2"
            />
          </svg>
        </NuxtLink>
      </h2>

      <div class="filters no-scrollbar">
        <label for="all_category">
          <input
            id="all_category"
            v-model="category"
            type="radio"
            name="all_category"
            value="all_category"
            class="active"
            checked
          />
          <span class="custom__label">
            Все
            <span class="label-count">{{
              getCategoryCount('all_category')
            }}</span>
          </span>
        </label>
        <label
          v-for="input in Categories"
          :key="'category' + input.id"
          :for="'category' + input.id"
        >
          <input
            :id="'category' + input.id"
            v-model="category"
            type="radio"
            :name="'category' + input.id"
            :value="input.id"
          />
          <span class="custom__label">
            {{ input.name }}
            <span class="label-count">{{ getCategoryCount(input.name) }}</span>
          </span>
        </label>
      </div>

      <ul id="example-1" class="vacancy_list">
        <li v-for="(item, index) in filterProductsByCategory" :key="index">
          <nuxt-link :to="localePath(`/vacancies/${item.id}`)">
            <div class="vacancy two">
              <p>{{ item.name }}</p>
              <p class="info">
                {{ item.city_title }} · {{ item.type_of_employment_title }}
              </p>
            </div>
          </nuxt-link>
        </li>
      </ul>

      <div class="form_link">
        <p>
          {{ content.m_fillform_text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ModalVacancy from '@/components/molecules/ModalVacancy'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'VacancyTable',
  components: {
    ModalVacancy,
  },
  data() {
    return {
      isModalVisible: false,
      category: 'all_category',
      categoryFilters: [],
    }
  },

  computed: {
    ...mapGetters('vacancies', ['Vacancies', 'VacancyCategory']),
    ...mapGetters('categories', ['Categories']),
    ...mapGetters('cities', ['Cities']),
    ...mapGetters({ content: 'pages/Content' }),
  },
  asyncComputed: {
    async filterProductsByCategory() {
      if (this.category === 'all_category') {
        return this.Vacancies
      }
      await this.getVacancyByCategory(this.category)
      return this.VacancyCategory
    },
  },
  async mounted() {
    await this.getContent('main')
  },
  methods: {
    ...mapActions('vacancies', ['getVacancies', 'getVacancyByCategory']),
    ...mapActions('categories', ['getCategories']),
    ...mapActions('cities', ['getCities']),
    ...mapActions({ getContent: 'pages/getContent' }),

    openPopUp() {
      this.isModalVisible = true
    },
    closePopUp() {
      this.isModalVisible = !this.isModalVisible
    },

    getCategoryCount(name) {
      if (name === 'all_category') {
        return this.Vacancies.length
      }
      const categoryCount = this.Vacancies.filter(
        (vacancy) => vacancy.category_title === name
      )
      return categoryCount.length
    },
  },
}
</script>

<style lang="scss" scoped>
.vacancies {
  padding: 50px 0;
  background-color: #fff;
  width: 100%;
  @media (max-width: $sm) {
    padding: 32px 0;
  }

  .inner-container {
    padding-left: 95px;
    padding-right: 95px;
    @media (max-width: $xxlg) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .vacancy_list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin-top: 40px;
    margin-bottom: 50px;

    @media (max-width: $slg) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
    }
    @media (max-width: $sm) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .filters {
    display: flex;
    margin-top: 40px;
    background: #f5f5f5;
    width: fit-content;
    border-radius: 4px;
    padding: 4px;

    @include wide-tablet() {
      padding: 0;
    }

    @include tablet() {
      overflow: scroll;
      margin-bottom: 52px;
      max-width: 100%;
      background: transparent;
    }

    input[type='radio'] {
      display: none;
    }

    a,
    label {
      font-size: 16px;
      margin-right: 8px;
      color: #2d2d2d;
      cursor: pointer;
      transition: 0.2s;
      line-height: 18px;
      display: flex;
      flex-shrink: 0;
      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: $c-secondary;

        .label-count {
          color: $c-secondary;
        }
      }

      @include wide-tablet() {
        border-radius: 0;
        margin-right: 0;
        line-height: 24px;
        .custom__label {
          padding: 8px 16px;
          border-radius: 0;
        }

        &:first-of-type {
          border-radius: 4px 0 0 4px;
          overflow: hidden;
        }
        &:last-of-type {
          border-radius: 0 4px 4px 0;
          overflow: hidden;
        }
      }
      @include tablet() {
        background: #f5f5f5;
      }
    }

    .custom__label {
      padding: 8px 16px;
      border-radius: 4px;
      display: flex;
      @include wide-tablet() {
        border: 0.5px solid #d6d6d6;
      }
    }

    .label-count {
      color: #d6d6d6;
      transition: 0.2s;
      margin-left: 5px;
    }

    input[type='radio']:checked + .custom__label {
      background: #ff4e3d;
      color: white;
      @include wide-tablet() {
        border-color: #ff4e3d;
      }

      .label-count {
        color: #d6d6d6;
      }
    }

    .grey {
      color: #d6d6d6;
      margin-left: 6px;
    }
  }

  .vacancy {
    background: #f5f5f5;
    height: 160px;
    margin-bottom: 0;
    padding: 10px 50px 20px 20px;
    position: relative;
    transition: 0.3s;
    @media (max-width: $slg) {
      padding: 10px 20px;
    }

    p {
      color: #2d2d2d;
      margin: 0;
      font-size: 24px;
      line-height: 31px;
      font-style: normal;
      @media (max-width: 1024px) {
        font-size: 20px;
        line-height: 30px;
      }
    }

    .info {
      font-size: 16px;
      line-height: 24px;
      color: #2d2d2d;
      bottom: 20px;
      position: absolute;
    }

    &:hover {
      background-color: #ff4e3d;
      cursor: pointer;

      p {
        color: white;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;

    a {
      text-decoration: none;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 48px;
    line-height: 54px;
    color: #2d2d2d;
    @media (max-width: 600px) {
      font-size: 28px;
      line-height: 34px;
      svg {
        width: 31px;
        height: 22px;
        transform: translateY(3px);
      }
    }
  }

  a {
    text-decoration: none;
    color: #2d2d2d;
  }

  .form_link {
    font-size: 20px;
    line-height: 30px;

    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 24px;
    }

    .a {
      color: #ff4e3d;
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 0;
    }
  }
}

[theme='dark'] {
  .vacancies {
    background-color: #181e32;

    a,
    h2,
    label,
    p {
      color: #d8def1;
    }

    .filters {
      background: #181e32;
      border: 0.5px solid #7a8197 !important;
      padding: 0;
      @include tablet() {
        background: transparent;
      }

      label {
        border-right: 0.5px solid #7a8197;
        margin: 0;
        border-radius: 0;
        @include wide-tablet() {
          border: none;
        }
        @include tablet() {
          background: #181e32;
        }
      }

      input[type='radio']:checked + .custom__label {
        background: #2f3650;
        @include wide-tablet() {
          border-color: #7a8197;
        }
      }
    }
  }

  .vacancy {
    background: #d8def1;

    p {
      color: #1c243e;
    }
  }
}
</style>
