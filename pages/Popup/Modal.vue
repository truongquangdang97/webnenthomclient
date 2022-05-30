<template>
  <div :id="id">
    <div class="model" :class="size">
      <div class="model-content">
         
        <div class="model-header">
          <b><slot name="orders"></slot> </b>
          <b><slot name="product"></slot> </b>
          <b><slot name="title"></slot> </b>
          <b><slot name="xxx"></slot> </b>

        </div>
        <div class="model-body">
          <slot name="Content"> </slot>
        </div>
        <div class="model-footer" :class="parent">
          <slot class="model-footer-slot" name="footer"></slot>
          <!-- <button class="btn btn-model" @click="closeModel()">Close</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Parent",
  props: {
    size: String,
    parent: String,
  },
  data() {
    return {
       id: null,
      $context: null,
    }
  },
  mounted() {

    this.$context = document.getElementById(this.id); // thẻ chứa thẻ lớn chứa toàn bộ 
    console.log(this.$context)

    var div = document.createElement("div");// tạo thẻ 
    div.classList.add("background-drop", "background-drop-" + this.id);// cái thẻ tạo ra gắn class

    div.style.zIndex = Window.modalIndex;//thẻ đc tạo ra có index 2000
    this.$context.getElementsByClassName("model")[0].style.zIndex = Window.modalIndex + 1;//thẻ này có index lớn hơn 

    this.$context.getElementsByClassName("model-content")[0] .classList.add("animatetop"); //làm cho di chuyển xuống chậm 

    document.getElementsByTagName("body")[0].appendChild(div);

    var background = document.getElementsByClassName( "background-drop-" + this.id)[0];//2 dong nay nhấn ra ngoài vẫn đóng 
    background.addEventListener("click", (event) => {
      if (!event.target.closest(".model-content")) {
        this.closeModel();
      }
    });
  },
  created() {
    //tạo ra 2 cái 1 là thẻ chính , 1 là thẻ background 
    this.id =  Math.floor(Math.random() * 100000);

    if (Window.modalIndex) {
      Window.modalIndex++;
    } else {
      Window.modalIndex = 2000;
    }
  },

  beforeDestroy() {
    var div = document.getElementsByClassName("background-drop-" + this.id)[0];
    document.getElementsByTagName("body")[0].removeChild(div);
  },
 methods: {
    closeModel() {
      const temp = this.$context.getElementsByClassName("model-content")[0];
      temp.classList.add("animatebottom");
      setTimeout(() => {
        temp.classList.remove("animatebottom");
        this.$emit("close");
      }, 300);
    },
  },
};
</script>
<style>
.animatetop {
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}
.animatebottom {
  -webkit-animation-name: animatebot;
  -webkit-animation-duration: 0.4s;
  animation-name: animatebot;
  animation-duration: 0.4s;
}
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@-webkit-keyframes animatebot {
  from {
    top: 0;
    opacity: 1;
  }
  to {
    top: -300px;
    opacity: 0;
  }
}

@keyframes animatebot {
  from {
    top: 0;
    opacity: 1;
  }
  to {
    top: -300px;
    opacity: 0;
  }
}
.background-drop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  /* z-index: 500; */
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.model {
  position: fixed;
  width: 800px;
  /* z-index: 1000; */
  left: calc(50% - 400px);
  top: 50px;
}
.model-content {
  overflow-y: initial !important;
  width: 100%;
  position: relative;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.7);
  outline: none;
  border-radius: 10px;
  overflow: hidden;
}







.model-header {
  /* width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 1rem 1rem;
  border-bottom: 1px solid #1e8cfa; */
}
.model-body {
  padding: auto;
  height: auto;
  overflow-y: auto;
}
.model-footer {
  text-align: center;
      margin-left: 25px;
  /* display: flex;
  flex-wrap: wrap;
  flex-shrink: 0; */
  /* align-items: center; */
  /* justify-content: flex-end; */

  padding: 0.75rem;
  /* border-top: 1px solid #1e8cfa; */
}
.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  -moz-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.parent {
  justify-content: space-between !important;
}
.fade {
  transition: opacity 0.15s linear;
}
</style>
