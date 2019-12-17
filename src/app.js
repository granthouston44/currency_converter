import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: '#app',
    data: {
      currencies: [],
      enteredEuros: 0,
      selectedCurrency: null,
      enteredCurrency: 0,
      selectedCurrencyToEuros: null,
      currency1: null,
      enteredCurrency1: 0,
      currency2: null,
    },

    computed: {
      calculatedEurosConversion: function(){
        return this.calcConversion(this.enteredEuros, this.selectedCurrency)
      },
      calculatedCurrencyConversion: function(){
        return this.calcConversionToEuros(this.enteredCurrency, this.selectedCurrencyToEuros)
      },
      calculcatedCurrencyToCurrency: function(){
        let step1 = this.calcConversionToEuros(this.enteredCurrency1,this.currency1)
        return this.calcConversion(step1,this.currency2);
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

      calcConversion: function(amount, chosenCurrency){
        let result = amount * chosenCurrency
        return result.toFixed(2);
      },
      calcConversionToEuros: function(amount, chosenCurrency) {
        let result = amount / chosenCurrency
        return result.toFixed(2)
      },
      // calcCurrencyToCurrency:function(){
      //   calcconversion
      //   return result.toFixed(2);
      // }
    }





  })






});
