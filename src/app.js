import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: '#app',
    data: {
      currencies: [],
      enteredEuros: 0,
      selectedCurrency: null
    },

    computed: {
      calculatedConversion: function(){
        return this.calcConversion()
      }
    },

mounted(){
  this.getCurrencies()
},
    methods:{
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(currencies => this.currencies = currencies.rates)
      },

      calcConversion: function(){
        return this.enteredEuros * this.selectedCurrency
      }
    }




  })






});
