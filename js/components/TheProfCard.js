export default {
        name:"TheProfCard",
        props: ["item"],



        // data needs to be a funciom inside a component
       data: function() {
           return {
               myName: this.item.name,
               MyRole: this.item.role,
               program: "IDP"
           }
       },

        template: `<li @click="logClicked">
            <img :src="'images/' + item.avatar" :alt='item.name + " image"'>
            <p>Prof Name: {{ item.name }}</p>
    
            <a href="" class="remove-prof"> Show {{ item.name }}'s info</a>
    
             <a href="" class="remove-prof">Remove {{ item.name }}</a>
    
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