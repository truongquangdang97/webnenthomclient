<template>
  <div>
     <div class="menu">
         <div class="paginate-class" v-for="(i,index) in page" :key="index">
            <a @click="choisePage(i)">{{i}}</a>
        </div>
     </div>
  </div>
</template>

<script>
export default {

    props:{
        page:Number,
        default:0,
    },
    data(){
        return{
            totalPage:5
        }
    },
    methods:{
        choisePage(page){
            this.$emit("pageNumber",page)
        }
    }

}
</script>

<style>
.menu {
  margin: auto;
    display: flex;
  justify-content: center;

}

.paginate-class {
    border: 1px solid #b1154a;
    font-size: 20px;
    padding: 10px 10px;
    margin: 10px;
    float: left;
}       
</style>