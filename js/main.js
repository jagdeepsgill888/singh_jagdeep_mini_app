import { fetchData } from "./components/DataMiner.js";
import ProfCard from "./components/TheProfCard.js";


(() => {

// Vue.component("prof-card", {
//     props: ["item"],
//     template: `<li>
//         <img :src="'images/' + item.avatar" :alt='item.name + " image"'>
//         <p>Prof Name: {{ item.name }}</p>

//         <a href="" class="remove-prof"> Show {{ item.name }}'s info</a>

//          <a href="" class="remove-prof">Remove {{ item.name }}</a>

//       </li>`,

//     created: function() {
//         console.log(`Created ${this.item.name}'s card`);
//     }
// });






// const myVM = ( () => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        // el: "#app",

        data: {
            message: "Hello from Vue!",
            aontherMessage: "This is some sample text",
            removeAformat: true,
            showBioData: false,
            professors: [],
            currentProfData: {}

            // professors: [
            //     { name: "Justin", role: "coordinator", nickname: "nitsuj"},
            //     { name: "John", role: "prof", nickname: "super chill"},
            //     { name: "Joe", role: "prof", nickname: "tedy bear"}
            // ]
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        
          mounted: function() {
              console.log("Vue is mounted, trying to fetch for the initial data");

              fetchData("./includes/index.php")
              .then(data => {
                  data.forEach(item => this.professors.push(item));
                 this.professors = data
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
                debugger;
                //remove this item/prof from the professors array
                console.log('clicked to view prof bio data', target, target.name);

                // the "this" keyword inside a vus instance refers tot he vue intance itself by default
                // toggle the property between true and false using a ternary statement

                this.showBioData = this.showBioData ? false : true

                // make the selected prof's data visable
                this.currentProfData = target;
                // this.currentProfData.iframe.src = currentProfData.youtubeid;
            },

            removeItem(target) {
                //remove this item/prof from the professors array
                console.log('clicked to remove prof', target, target.name);

                // make the selected prof's data visable
                // this.professors.splice(this.professors.indexOf(target), 1);
                this.$delete(this.professors, target);
            }


        },

        components: {
            "prof-card": ProfCard
        }

    }).$mount("#app"); // also connects Vue to your wrapper in HTML
  })();