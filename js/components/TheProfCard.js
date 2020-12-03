export default {
        name:"TheProfCard",
        props: ["item"],



        // data needs to be a funciom inside a component
       data: function() {
           return {
               myName: this.item.name,
               Company: "Mini Cooper"
           }
       },

        template: `<li @click="logClicked">
            <img :src="'images/' + item.picture" :alt='item.name + " image"' class="carThumb">
            <h2>{{ item.name }}</h2>
    
    
    
          </li>`,
    
        created: function() {
            console.log(`Created ${this.item.name}'s card`);
        },

        methods: {
                logClicked() {
                console.log(`fired from inside ${this.item.name}'s the component!`);
                this.$emit("showmydata", this.item)
            }
        }
  
}