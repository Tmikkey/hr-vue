<template>
  <div class="header">
    <a href="/">
      <template v-if="theme === 'light'">
        <picture>
          <source
            media="(max-width: 560px)"
            srcset="../../assets/images/logo/light/logo-mobile.svg"
          />
          <img src="../../assets/images/logo/light/logo.svg" />
        </picture>
      </template>

      <template v-else>
        <picture>
          <source
            media="(max-width: 560px)"
            srcset="../../assets/images/logo/dark/logo-mobile.svg"
          />
          <img src="../../assets/images/logo/dark/logo.svg" />
        </picture>
      </template>
    </a>
    <ul class="links">
      <li>
        <a href="https://rocketfirm.com/ru/agency/">Агентство</a>
      </li>
      <li>
        <a href="https://rocketfirm.com/ru/services/">Услуги</a>
      </li>
      <li>
        <a href="https://rocketfirm.com/ru/portfolio/">Портфолио</a>
      </li>
      <li>
        <a href="https://rocketfirm.com/ru/portfolio/clients/">Клиенты</a>
      </li>
      <li>
        <a href="https://rocketfirm.com/ru/contacts/">Контакты</a>
      </li>
    </ul>
    <div class="toggleWrapper">
      <input id="dn" v-model="darkMode" type="checkbox" class="dn" />
      <label for="dn" class="toggle">
        <svg
          width="60"
          height="30"
          viewBox="0 0 138 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            class="toggle-cover"
            x="1"
            y="1"
            width="136"
            height="66"
            rx="33"
            stroke="#E9E9E9"
          />
          <!--moon-->
          <circle
            ref="circle"
            class="circle"
            :class="{
              'sun-circle': !darkMode,
              'moon-circle': darkMode,
            }"
            cx="104"
            cy="34"
            r="34"
          />
          <path
            class="moon-toggle"
            d="M105.593 54.0771C114.357 54.0771 121.929 48.9743 125.501 41.5762C122.599 42.9773 119.347 43.7621 115.91 43.7621C103.708 43.7621 93.8175 33.87 93.8175 21.6699C93.8175 18.2323 94.6023 14.9785 96.0033 12.0787C88.6033 15.6465 83.5005 23.2183 83.5005 31.9849C83.5005 44.1849 93.3906 54.0771 105.593 54.0771L105.593 54.0771Z"
            fill="#BEC5E1"
          />
          <!--sun-->
          <path
            class="sun-toggle"
            d="M48.8012 34.5001C48.8012 42.3975 42.3986 48.8001 34.5012 48.8001C26.6037 48.8001 20.2012 42.3975 20.2012 34.5001C20.2012 26.6026 26.6037 20.2001 34.5012 20.2001C42.3986 20.2001 48.8012 26.6026 48.8012 34.5001Z"
            fill="#FFD600"
          />
          <path
            class="sun-toggle"
            d="M34.5004 18C35.1063 18 35.6004 17.5059 35.6004 16.9V11.95C35.6004 11.3442 35.1062 10.85 34.5004 10.85C33.8945 10.85 33.4004 11.3442 33.4004 11.95V16.9C33.4004 17.5059 33.8945 18 34.5004 18Z"
            fill="#FFD600"
          />
          <path
            class="sun-toggle"
            d="M21.1348 22.675C21.354 22.8942 21.629 23.0059 21.904 23.0059C22.1789 23.0059 22.454 22.8963 22.6731 22.675C23.1135 22.2346 23.1135 21.575 22.6731 21.1346L19.154 17.6155C18.7135 17.175 18.054 17.175 17.6135 17.6155C17.1731 18.0559 17.1731 18.7155 17.6135 19.1559L21.1348 22.675Z"
            fill="#FFD600"
          />
          <path
            class="sun-toggle"
            d="M11.9506 35.6H16.9006C17.5065 35.6 18.0006 35.1059 18.0006 34.5C18.0006 33.8942 17.5064 33.4 16.9006 33.4H11.9506C11.3447 33.4 10.8506 33.8942 10.8506 34.5C10.8506 35.1059 11.3447 35.6 11.9506 35.6Z"
            fill="#FFD600"
          />
          <path
            class="sun-toggle"
            d="M21.1356 46.3251L17.6165 49.8442C17.176 50.2846 17.176 50.9442 17.6165 51.3846C17.8356 51.6038 18.1106 51.7155 18.3856 51.7155C18.6606 51.7155 18.9356 51.6059 19.1547 51.3846L22.6738 47.8655C23.1142 47.4251 23.1142 46.7655 22.6738 46.3251C22.2355 45.8846 21.5201 45.8846 21.1355 46.3251H21.1356Z"
            fill="#FFD600"
          />
          <path
            class="sun-toggle"
            d="M34.5004 51C33.8945 51 33.4004 51.4941 33.4004 52.1V57.05C33.4004 57.6559 33.8945 58.15 34.5004 58.15C35.1062 58.15 35.6004 57.6559 35.6004 57.05V52.1C35.6004 51.4941 35.1062 51 34.5004 51Z"
            fill="#FFD600"
          />
          <path
            class="sun-toggle"
            d="M46.3254 46.3251C45.885 46.7655 45.885 47.4251 46.3254 47.8655L49.8446 51.3846C50.0637 51.6038 50.3387 51.7155 50.6137 51.7155C50.8887 51.7155 51.1637 51.6059 51.3828 51.3846C51.8232 50.9442 51.8232 50.2846 51.3828 49.8442L47.8637 46.3251C47.4254 45.8846 46.7658 45.8846 46.3254 46.3251H46.3254Z"
            fill="#FFD600"
          />
          <path
            class="sun-toggle"
            d="M51 34.5C51 35.1059 51.4941 35.6 52.1 35.6H57.05C57.6559 35.6 58.15 35.1059 58.15 34.5C58.15 33.8942 57.6559 33.4 57.05 33.4H52.1C51.4941 33.4 51 33.8942 51 34.5Z"
            fill="#FFD600"
          />
          <path
            class="sun-toggle"
            d="M47.0948 23.0061C47.3698 23.0061 47.6448 22.8966 47.8639 22.6753L51.383 19.1562C51.8235 18.7157 51.8235 18.0562 51.383 17.6157C50.9426 17.1753 50.283 17.1753 49.8426 17.6157L46.3235 21.1348C45.8831 21.5753 45.8831 22.2348 46.3235 22.6753C46.5448 22.8944 46.8198 23.0061 47.0948 23.0061H47.0948Z"
            fill="#FFD600"
          />
        </svg>
      </label>
    </div>
    <ul class="lang">
      <li v-for="locale in $i18n.locales" :key="locale.code" class="lang-item">
        <a
          href="#"
          class="link"
          :class="$i18n.locale === locale.code ? 'active' : ''"
          :data-locale="locale.code"
          @click.prevent.stop="setLocale"
        >
          {{ locale.title }}
        </a>
      </li>
    </ul>

    <button class="mobile-nav" @click="mob = !mob">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div v-show="mob" class="mobile">
      <span class="close" @click="mob = false">
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
      <div class="links-mob">
        <a href="https://rocketfirm.com/ru/agency/">Агентство</a>
        <a href="https://rocketfirm.com/ru/services/">Услуги</a>
        <a href="https://rocketfirm.com/ru/portfolio/">Портфолио</a>
        <a href="https://rocketfirm.com/ru/portfolio/clients/">Клиенты</a>
        <a href="https://rocketfirm.com/ru/contacts/">Контакты</a>
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide phone swiper-slide-active">
          <span class="phone-description">Телефон в Алматы</span>
          <a href="tel:+77273316621" title="">
            <span class="phone-body">+7 727 331-66-21</span>
          </a>
        </div>
        <div class="swiper-slide phone swiper-slide-next">
          <span class="phone-description">Телефон в Нур-Султане</span>
          <a href="tel:+77172&nbsp;552193&nbsp;" title="">
            <span class="phone-body">+7 7172&nbsp;55-21-93&nbsp;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
      mob: false,
      theme: 'light',
    }
  },
  watch: {
    darkMode() {
      // add/remove class to/from html tag
      const htmlElement = document.documentElement
      if (this.darkMode) {
        localStorage.setItem('theme', 'dark')
        htmlElement.setAttribute('theme', 'dark')
        this.theme = 'dark'
      } else {
        localStorage.setItem('theme', 'light')
        htmlElement.setAttribute('theme', 'light')
        this.theme = 'light'
      }
    },
    theme: {
      immediate: true,
      handler() {
        if (process.client) {
          this.$nextTick(() => {
            this.theme = localStorage.getItem('theme')
          })
        }
      },
    },
  },
  mounted() {
    const htmlElement = document.documentElement
    const theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark')
      this.darkMode = true
    } else {
      htmlElement.setAttribute('theme', 'light')
      this.darkMode = false
    }
  },
  methods: {
    setLocale(event) {
      this.$i18n.setLocale(event.target.dataset.locale)
    },
  },
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  border: none;
  background: transparent;
  box-shadow: none;
  display: none;
  -ms-flex-item-align: baseline;
  align-self: baseline;
  width: 21px;
  height: 16px;
  position: relative;
  margin-top: 6.5px;
  transform: rotate(0);
  transition: 0.5s ease-in-out;
  z-index: 5;
  @media (max-width: 1000px) {
    display: block;
  }
  span {
    background-color: #2d2d2d;
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    opacity: 1;
    left: 0;
    transform: rotate(0);
    transition: 0.25s ease-in-out;
    margin-bottom: 2px;
  }
  span:nth-child(2) {
    left: 25%;
    top: 7px;
    width: 75%;
  }
  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(3) {
    top: 14px;
  }
}

.mobile {
  position: fixed;
  top: auto;
  // bottom: 2000px;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  background-color: #fff;
  z-index: 17;
  overflow: auto;
  transition: bottom 0.3s;
  padding-left: 35px;
  padding-top: 30px;

  .links {
    display: grid;
    a {
      font-size: 26px;
      margin-bottom: 30px;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
  .swiper-wrapper {
    z-index: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .phone-description {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  .phone {
    margin-left: 35px;
  }
  .close {
    position: absolute;
    right: 0;
    cursor: pointer;
    margin-top: 6.5px;
    margin-right: 10px;
  }
}

.header {
  padding: 33px 74px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
  @media (max-width: 1200px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 1000px) {
    padding: 15px;
  }
}

.lang {
  float: right;
  // margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 0;
  @media (max-width: 1000px) {
    display: none;
  }
}

.lang-item {
  list-style: none;
  display: inline;
  position: relative;

  a {
    // font-size: 1.5vw;
    line-height: 1.2vw;
    text-decoration: none;
    margin-left: 14px;
    color: #2d2d2d;
    opacity: 0.5;
    font-size: 14px;
    &.active {
      color: #ff4e3d !important;
      opacity: 1;
    }
  }
  a:visited {
    color: #2d2d2d;
  }
  a:hover {
    color: #ff4e3d;
  }
}

.links {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: rem(10);
  display: flex;
  padding: 0;

  li {
    list-style-type: none;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  a {
    font-size: 1.5vw;
    line-height: 1.2;
    font-weight: 400;
    text-decoration: none;
    margin-left: 16px;
    color: #2d2d2d;
  }
  a:visited {
    color: #2d2d2d;
  }
  a:hover {
    color: #ff4e3d;
  }
}
.toggleWrapper {
  //position: absolute;
  //top: 50%;
  //left: 50%;
  overflow: hidden;
  padding: 0 10px;
  //padding: 0 0 0 50px;
  position: relative;
  //opacity: 0;
  // pointer-events: none;
  transition: opacity 200ms ease;
  margin-left: auto;
  margin-top: 3px;
  margin-bottom: auto;
  //transition: .5s;
  float: left;
  transition-delay: -500ms;

  //transform: translate3d(-50%, -50%, 0);
  @media (min-width: 1000px) {
    float: right;
    margin-right: 15px;
  }
  .toggle {
    svg {
      width: 54px;
      height: 28px;
      @include phone() {
        width: 43px;
        height: 22px;
      }
    }
  }
  .dn {
    position: absolute;
    left: -99em;

    &:checked {
      + .toggle {
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
        background-color: #1c233f;

        .toggle-cover {
          -webkit-transition: all 0.4s ease;
          transition: all 0.4s ease;
          stroke: #d8def1;
          stroke-width: 2;
        }

        .sun-toggle {
          cx: 104;
          transform: translateX(70px);
          opacity: 0;
        }

        .moon-toggle {
          cx: 104;
          transform: translateX(0);
          opacity: 1;
        }

        .circle {
          -webkit-transition: all 0.4s ease;
          transition: all 0.4s ease;
          cx: 104;

          //   animation: dash 0.5;
        }

        @keyframes dash {
          to {
            fill: #1c233f;
          }
        }
      }
    }
  }

  .dn2 {
    position: absolute;
    left: -99em;

    &:checked {
      + .toggle {
        background-color: #1c233f;

        .toggle-cover {
          stroke: #353b51;
          stroke-width: 2;
        }

        .sun-toggle {
          opacity: 0;
        }

        .moon-toggle {
          opacity: 1;
        }
      }
    }
  }
}

.toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 60px;
  margin-bottom: 0;
  height: 30px;
  border-radius: 90px - 6;
  transition: background-color 200ms ease;
  background: inherit;

  .toggle-cover {
    stroke: #e9e9e9;
    stroke-width: 2;
  }

  .sun-toggle {
    opacity: 1;
    cx: 34;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    animation-delay: 0.2s;
    transform: translateX(0);
  }

  .moon-toggle {
    opacity: 0;
    cx: 34;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    animation-delay: 0.2s;
    transform: translateX(-70px);
  }
}

.toggle-disabled {
  pointer-events: none;
  // opacity: 0.5;
  background: #ccc;
}

.toggle:hover {
  .sun-circle {
    fill: #fff9db;
    stroke: #efe5af;
  }

  .moon-circle {
    fill: #474e69;
  }
}

.header--mobile .toggleWrapper {
  // margin-top: 15px;
  padding: 0 25px;
}

.header--secondary.header--main .container-fluid {
  padding-bottom: 0;
}

.circle {
  cx: 34;
  stroke: #e9e9e9;
  stroke-width: 2;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  animation: dashs 0.5;
}

@keyframes dashs {
  to {
    fill: white;
    stroke: #e9e9e9;
    stroke-width: 2;
  }
}

[theme='dark'] {
  .header {
    background: #1c243e;
    color: #abb3d6;
  }
  .links a,
  .lang-item a {
    color: #abb3d6;
  }
  path {
    fill: #abb3d6;
  }
  .mobile-nav {
    span {
      background-color: #fff;
    }
  }
}
</style>
