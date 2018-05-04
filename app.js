Vue.use(VeeValidate);

new Vue({
  el: '#app',
  components: {},
  data() {
    return {
      name: 'Vue App',
      btnState: true,
      skill: '',
      skills: [{
          "skill": 'Front-end Developer'
        },
        {
          "skill": 'VueJS'
        },
      ],
    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if(result) {
          this.skills.push({
            skill: this.skill
          })
          this.skill = '';
        } else {
          console.log("not valid");
        }
      })

    }
  }
});