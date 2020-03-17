<template>
<div class="container">
  <div class="image_holder">
    <img src="../assets/logo.png">
  </div>
  <h1>{{title}}</h1>
  <div class="row">
    <div class="col">
      <h2>Product(s)</h2>
      <div class="tabs" >
        <div class="tab" v-for="(product, index) in allProducts">
          <input type="checkbox" :id="index">
          <label class="tab-label" :for="index"> {{product.productCategory}}</label>
          <div class="tab-content" v-for="prod in product.products">
          <span class="material-icons"> keyboard_arrow_right </span>
              <router-link :to="prod.link">{{prod.name}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  methods: {
      getList: function() {
        this.$http.get('/someUrl').then(response => {
        this.someData = response.body;
        }, response => { 
        });
      }
  },
  data () {
    return {
      title: 'Products ABN AMRO',
      allProducts: [{
        productCategory: 'Saving Mortage',
         products:[{
            name: 'Banking Saving Mortage',
            link: '/product-overview?product=banking_mortage'
            },
        {
            name:'Interest Only',
            link: '/product-overview?product=interest_only'
        }]
      },
      {
        productCategory: 'Personal Account Details',
         products:[{
            name: 'Payments Account',
            link: '/product-overview?product=payments_account'
        },
        {
            name: 'Debit Card',
            link: '/product-overview?product=debit_card'
        }]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
$orange: #009286;
$white: #fff;
$gray: #333;

.image_holder {
    img {
        max-width: 200px;
    }
    text-align: center;
    margin-bottom: 40px; 
}
.container {
    display: block;
    min-height: 100vh;
    width: 100%;
    max-width: 960px;
    overflow: hidden;
    margin: auto;
    padding: 40px 16px;
    box-sizing: border-box;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

// General
body {
    color: $orange;
    background: $white;
    padding: 0 1em 1em;
}

h1 {
    margin: 0;
    color: $orange;
    line-height: 2;
    text-align: center;
}

h2 {
    margin: 0 0 .5em;
    font-weight: normal;
    color: $orange;
    font-family: ing,
    Arial,
    Helvetica,
    sans-serif;
}

input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

// Layout
.row {
    display: flex;

    .col {
        flex: 1;

        &:last-child {
            margin-left: 1em;
        }
    }
}

/* Accordion styles */
.tabs {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}

.tab {
    width: 100%;
    color: white;
    overflow: hidden;

    &-label {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background: $orange;
        border: 1px solid transparent;
        font-weight: bold;
        cursor: pointer;

        /* Icon */
        &:hover {
            background: $white;
            color: $orange;
            border: 1px solid $orange;
        }

        &::after {
            content: "\276F";
            width: 1em;
            height: 1em;
            text-align: center;
            transition: all .35s;
        }
    }

    &-content {
        max-height: 0;
        padding: 0 1em;
        color: $gray;
        background: white;
        transition: all .35s;
        a {
            text-decoration: none;
            color: $gray;
        }
        a:hover {
            text-decoration: underline;
        }
    }

    &-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        background: $orange;
        cursor: pointer;

        &:hover {
            background: darken($orange, 10%);
        }
    }
}

// :checked
input:checked {
    +.tab-label {
        background: darken($orange, 10%);

        &::after {
            transform: rotate(90deg);
        }
    }

    ~.tab-content {
        max-height: 100vh;
        padding: 1em;
    }
}

</style>
