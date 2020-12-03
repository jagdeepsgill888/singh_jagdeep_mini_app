import { fetchData } from "./components/DataMiner.js";
import ItemCard from "./components/TheItemCard.js";


(() => {


// const myVM = ( () => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        // el: "#app",

        data: {
            message: "Hello from Vue!",
            aontherMessage: "This is some sample text",
            removeAformat: true,
            showBioData: false,
            coopers: [],
            currentCarData: {}

        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        
          mounted: function() {
              console.log("Vue is mounted, trying to fetch for the initial data");

              fetchData("./includes/index.php")
              .then(data => {
                  data.forEach(item => this.coopers.push(item));
                 this.coopers = data
                })
              .catch(err => console.error(err));

          },

          //run a method when we change our view ( update the DOM with Vue)
          updated : function() {
              console.log('Vue just updated the DOM');
          },

        methods: {
            logClicked() {
                console.log("clicked on a prof name")
            },

            clickHeader() {
                console.log("clicked on header")
            },

            showItemData(target) {
                // debugger;
                //remove this item/prof from the cooper array
                console.log('clicked to view prof bio data', target, target.name);

                // the "this" keyword inside a vus instance refers tot he vue intance itself by default
                // toggle the property between true and false using a ternary statement

                this.showBioData = this.showBioData ? false : true

                // make the selected prof's data visable
                this.currentCarData = target;
                // this.currentCarData.iframe.src = currentCarData.youtubeid;
            },

            removeItem(target) {
                //remove this item/prof from the cooper array
                console.log('clicked to remove item', target, target.name);

                // make the selected prof's data visable
                // this.coopers.splice(this.coopers.indexOf(target), 1);
                this.$delete(this.coopers, target);
            }


        },

        components: {
            "item-card": ItemCard
        }

    }).$mount("#app"); // also connects Vue to your wrapper in HTML
  })();