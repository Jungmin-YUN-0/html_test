new Vue({

    el: "#app",
    data() {
      return {
        tabs: [],
        tabCounter: 1
      }
    },

    methods: {
      closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i] === x) {
            this.tabs.splice(i, 1)
          }
        }
      },
      newTab() {
        this.tabs.push(this.tabCounter++)
      }
    }

  });