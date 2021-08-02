<template>
  <div class="modalBox">
    <div class="modalContent">
      <div class="head">
        <span class="close" @click="closePopup">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 23.9906L23.9906 24.9997L12.5 13.5092L1.00944 25L0 23.9906L11.4908 12.5L0 1.00944L1.00917 -1.90735e-06L12.5 11.4908L23.9906 -1.90735e-06L25 1.00944L13.5092 12.5L25 23.9906Z"
              fill="#2D2D2D"
            />
          </svg>
        </span>
        <div v-if="!showPopUpSeminarFormVisible" class="show">
          <h2 v-if="hideInfoOnPopup">{{ content.modal_title }}</h2>
        </div>
        <div v-if="showPopUpSeminarFormVisible" class="success">
          <h3>
            Ваш запрос направлен в&nbsp;обработку
            <!-- <span class="red"> {{ seminarTitle }} </span> -->
          </h3>
          <p>
            Наш модератор рассмотрит вашу заявку и&nbsp;скоро подтвердит ее.
            Либо свяжется с&nbsp;вами в случае возникновения вопросов
          </p>
        </div>
      </div>
      <div class="content">
        <ValidationObserver
          v-if="hideInfoOnPopup"
          ref="form"
          v-slot="{ invalid }"
          action=""
          tag="form"
          class="forms"
          @submit.prevent=""
        >
          <h3>{{ content.modal_h3_title }}</h3>
          <p>{{ content.modal_about }}</p>
          <ValidationProvider
            v-slot="{ errors, classes }"
            name="name"
            rules="required"
          >
            <fieldset>
              <label for="name">{{ content.modal_name }}</label>
              <input
                id="name"
                v-model="name"
                type="text"
                name="name"
                placeholder="Арманов Арман"
                :class="classes"
              />
              <span v-if="errors[0]" class="valid-error">{{ errors[0] }}</span>
            </fieldset>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors, classes }"
            name="email"
            rules="required|email"
          >
            <fieldset>
              <label for="email">{{ content.modal_mail }}</label>
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                placeholder="mail@example.com"
                :class="classes"
              />
              <span v-if="errors[0]" class="valid-error">{{ errors[0] }}</span>
            </fieldset>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors, classes }"
            name="phone"
            rules="required"
          >
            <fieldset>
              <label for="phone">{{ content.modal_phone }}</label>
              <input
                id="phone"
                v-model="phone"
                type="tel"
                name="phone"
                placeholder="+7 771 000 99 98"
                :class="classes"
              />
              <span v-if="errors[0]" class="valid-error">{{ errors[0] }}</span>
            </fieldset>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors, classes }"
            name="citySelected"
            rules="required"
          >
            <fieldset>
              <label for="city">{{ content.modal_city }}</label>
              <v-select
                id="city"
                v-model="citySelected"
                name="city"
                :options="cityOptions"
                :clearable="false"
                :searchable="false"
                placeholder="Выберите город"
                :class="classes"
                @search:blur="blurCitySelected"
              >
                <template #open-indicator="{ attributes }">
                  <span v-bind="attributes">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.6"
                        d="M1 1L8 8L15 1"
                        stroke="#D6D6D6"
                        stroke-width="2"
                      />
                    </svg>
                  </span>
                </template>
              </v-select>
              <span v-if="errors[0]" class="valid-error">{{ errors[0] }}</span>
            </fieldset>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors, classes }"
            name="categorySelected"
            rules="required"
          >
            <fieldset>
              <label for="category">{{ content.modal_direction }}</label>
              <v-select
                id="category"
                v-model="categorySelected"
                name="category"
                :options="categoryOptions"
                :clearable="false"
                :searchable="false"
                placeholder="Выберите свою специализацию"
                :class="classes"
                @search:blur="blurCategorySelected"
              >
                <template #open-indicator="{ attributes }">
                  <span v-bind="attributes">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.6"
                        d="M1 1L8 8L15 1"
                        stroke="#D6D6D6"
                        stroke-width="2"
                      />
                    </svg>
                  </span>
                </template>
              </v-select>
              <span v-if="errors[0]" class="valid-error">{{ errors[0] }}</span>
            </fieldset>
          </ValidationProvider>
          <fieldset>
            <label for="about">{{ content.modal_aboutme }}</label>
            <input
              id="about"
              v-model="about"
              type="about"
              name="about"
              placeholder="Расскажите о себе и своем опыте"
            />
          </fieldset>
          <fieldset class="file-wrapper">
            <label for="file" class="file">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5626 1.49955C15.6461 -0.499851 12.5382 -0.499851 10.6218 1.49955L1.07848 11.4555C-0.359493 12.9556 -0.359493 15.3864 1.07848 16.8866C2.26371 18.1231 4.05139 18.3228 5.44889 17.5202C5.59488 17.5125 5.73843 17.4549 5.85012 17.3397L15.3933 7.3838C16.3516 6.38412 16.3516 4.76361 15.3933 3.76394C14.4351 2.76426 12.8818 2.76426 11.9235 3.76394L4.11519 11.9099C3.87591 12.1595 3.87591 12.5653 4.11519 12.8149C4.35446 13.0645 4.74341 13.0645 4.98263 12.8149L12.791 4.66889C13.2707 4.1684 14.0473 4.1684 14.5259 4.66889C15.0056 5.16937 15.0056 5.9796 14.5259 6.47885L5.41578 15.9829C4.45754 16.9826 2.90421 16.9826 1.94597 15.9829C0.987738 14.9832 0.987738 13.3627 1.94597 12.363L11.4892 2.40451C12.9272 0.904344 15.2571 0.904344 16.6952 2.40451C18.1331 3.90467 18.1331 6.33541 16.6952 7.83562L8.01939 16.8866C7.78011 17.1362 7.78011 17.542 8.01939 17.7916C8.25866 18.0412 8.6476 18.0412 8.88682 17.7916L17.5626 8.74058C19.4791 6.74123 19.4791 3.49896 17.5626 1.49955Z"
                  fill="#2D2D2D"
                />
              </svg>
              {{ content.modal_attach }}
            </label>
            <input
              id="file"
              ref="file"
              type="file"
              @change="handleFileUpload()"
            />
            <span class="file-name">{{ file.name }}</span>
          </fieldset>
          <fieldset class="submitBut">
            <input
              type="submit"
              value="Отправить"
              class="button-red"
              :disabled="invalid"
              @click="
                ;(showPopUpSeminarFormVisible = true), (hideInfoOnPopup = false)
              "
            />
          </fieldset>
        </ValidationObserver>
      </div>
    </div>
    <div class="modal-pic"></div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import '../../assets/scss/components/select.scss'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ModalVacancy',
  components: {
    vSelect,
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    seminarTitle: {
      type: String,
      default: '«PPC-инструменты: реклама в партнерских сетях»',
    },
  },
  data() {
    return {
      topic: null,
      name: null,
      email: null,
      phone: null,
      city: '',
      category: '',
      picked: '',
      date: '',
      time: '',
      time1: '',
      time2: '',
      about: '',
      file: '',
      CV: '',
      showPopUpSeminarFormVisible: false,
      hideInfoOnPopup: true,
      cityOptions: ['Алматы', 'Нур-султан', 'Караганда', 'Рудный'],
      citySelected: '',
      categoryOptions: [
        'Технари',
        'Управленцы',
        'Творцы',
        'Медийщики',
        'Разное',
      ],
      categorySelected: '',
      OpenIndicator: {
        render: (createElement) => createElement('span'),
      },
    }
  },
  computed: {
    ...mapGetters({
      content: 'pages/Content',
    }),
    computedForm() {
      return this.$refs.form
    },
  },
  async mounted() {
    await this.getContent('reserve')
  },
  methods: {
    ...mapActions({
      getContent: 'pages/getContent',
    }),
    closePopup() {
      this.$emit('closePop')
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0]
    },
    blurCitySelected() {
      this.computedForm.refs.citySelected.validate()
    },
    blurCategorySelected() {
      this.computedForm.refs.categorySelected.validate()
    },
  },
}
</script>

<style lang="scss" scoped>
.modalBox {
  /* display: none; */
  position: fixed; /* Stay in place */
  z-index: 9999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: unset; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  display: flex;
}

.modalContent {
  background: white;
  height: 100%;
  width: 700px;
  overflow-y: auto;
}

.modal-pic {
  background-image: url(@/assets/images/popback.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: auto;
  flex-grow: 1;
}
.valid-error {
  text-align: left;
}

.head {
  padding: 80px 70px 40px 70px;
}

h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 54px;
  color: #2d2d2d;
  font-family: 'Styrene A Web', Arial, sans-serif;
}

h3 {
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 46px;
  color: #2d2d2d;
  font-family: 'Styrene A Web', Arial, sans-serif;
  margin-bottom: 20px;
}

h3 .red {
  color: #ff4e3d;
}

p {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
  color: #2d2d2d;
  font-family: 'Styrene A Web', Arial, sans-serif;

  &:last-child {
    margin-bottom: 0;
  }
}

.content {
  padding: 40px 75px 80px 80px;
  background: white;
}

.small {
  font-size: 8px;
  line-height: 12px;
  color: #2d2d2d;
  margin-top: 10px;
}

.submitBut {
  width: 100%;
}

a {
  text-decoration: underline;
}

.close {
  position: absolute;
  left: 635px;
  top: 45px;
  cursor: pointer;
}

.seminarTitle {
  color: #ff4e3d;
}

/* .success {
      display: none;
    } */
.radio {
  float: unset;
  width: fit-content;
}

input[type='radio'] {
  opacity: 0;
  position: absolute;
}

.radio_btn label::before {
  content: ' ';
  display: inline-block;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  bottom: 1px;
  height: 24px;
  width: 24px;
  margin-right: 15px;
  margin-bottom: -8px;
}

input[type='radio']:checked + label::before {
  /* background-image: url(@/assets/images/radio2.png); */
  border: 1px solid #ff4e3d;
}

.container_radio {
  margin-right: 43px;
  color: #d6d6d6;
}

input[type='radio']:checked + .container_radio {
  color: #2d2d2d;
}

option:disabled {
  color: #9a9494;
}

select:focus {
  outline: none;
}

/* input[type="file"] {} */
input[type='file'] {
  display: none;
}

.file-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 395px;
  margin-left: auto;
}

.file {
  font-size: 12px;
  line-height: 16px;
  color: #2d2d2d;
  cursor: pointer;
}

.file-name {
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: #2d2d2d;
  margin-top: 6px;
}

[theme='dark'] {
  .head {
    background: #1c243e;
  }

  h2 {
    color: #d8def1;
  }

  h3,
  p {
    color: #d8def1;
  }

  .content {
    background: #1c243e;
  }

  .close {
    path {
      fill: #d8def1;
    }
  }

  .file {
    color: #7a8197;

    path {
      fill: #7a8197;
    }
  }

  .file-name {
    color: #7a8197;
  }
}
</style>
