<template>
<div class="container">
  <div class="image_holder">
    <img src="../assets/logo.png">
  </div>
  <h1>{{product.productCategory}}</h1>

  <div class="row">
    <div class="col">
      <div class="tabs">
        <div class="tab">
          <label class="tab-label">{{product.productName}}</label>
          <div class="tab-content">
            <table>
              <thead>
                <tr>
                  <th scope="col">Account</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Account">Visa - 3412</td>
                  <td data-label="Due Date">04/01/2016</td>
                  <td data-label="Amount">$1,190</td>
                  <td data-label="Period">03/01/2016 - 03/31/2016</td>
                </tr>
                <tr>
                  <td scope="row" data-label="Account">Visa - 6076</td>
                  <td data-label="Due Date">03/01/2016</td>
                  <td data-label="Amount">$2,443</td>
                  <td data-label="Period">02/01/2016 - 02/29/2016</td>
                </tr>
                <tr>
                  <td scope="row" data-label="Account">Corporate AMEX</td>
                  <td data-label="Due Date">03/01/2016</td>
                  <td data-label="Amount">$1,181</td>
                  <td data-label="Period">02/01/2016 - 02/29/2016</td>
                </tr>
                <tr>
                  <td scope="row" data-label="Acount">Visa - 3412</td>
                  <td data-label="Due Date">02/01/2016</td>
                  <td data-label="Amount">$842</td>
                  <td data-label="Period">01/01/2016 - 01/31/2016</td>
                </tr>
              </tbody>
            </table>
            <p>
             {{product.productDescription}}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'productoverview',
  data () {
    return {
      title: 'Welcome to ABN AMRO PORTAL',
      product : {
        productCategory: 'Mortage',
        productName: 'Interest Only',
        productCode: '2',
        productDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reicien'
    }
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
    }

    &-content {
      //  max-height: 0;
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

//table styling
table {
    border-collapse: collapse;
    margin: 40px 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    font-size: 12px;
}

table tr {
    border-bottom: 1px solid #D5D5D5;
}

table th,
table td {
    text-align: left;
    vertical-align: top;
    padding: 8px 10px;
}

table th {
    font-weight: bold;
}

@media screen and (max-width: 600px) {
    table {
        border: 0;
    }

    table caption {
        font-size: 1.3em;
    }

    table thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    table tr {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: .625em;
    }

    table td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: .8em;
        text-align: right;
    }

    table td::before {
        /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
    }

    table td:last-child {
        border-bottom: 0;
    }
}
</style>