const app = Vue.createApp({
  data() {
    return {
      name: 'Luka',
      age: 19,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/1969_Ford_Mustang_Mach_1_%2837901276352%29.jpg/280px-1969_Ford_Mustang_Mach_1_%2837901276352%29.jpg'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount('#assignment');