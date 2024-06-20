<script setup>
import { reactive } from 'vue';
import Stat from './Stat.vue';

const data = reactive({
      input: "",
      list: [],
      unlist: [],
    });

  const addNewToDo = () => {
    data.list.push({ id: Date.now(), content: data.input });
    data.input = "";
  }

  const removeToDo = (index) => {
    data.list.splice(index, 1);
  }

  const removeUnToDo = (index) =>{
    data.unlist.splice(index, 1);
  }

  const doneTodo = (input, index) =>{
    data.unlist.push({ unId: Date.now(), unContent: input.content });
    data.list.splice(index, 1);
  }
</script>


<template>
  <div class="container">
    <form @submit.prevent="addNewToDo">
      <input
        type="text"
        placeholder="✎ add new task..."
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = '✎ add new task...'"
        v-model="data.input"
      />
      <button type="submit">
        <ion-icon name="bookmarks-outline"></ion-icon> Add
      </button>
    </form>
    <div class="un-complete" v-if="data.list.length || data.unlist.length">
      <h5>
        <img src="../assets/cross.ico" />
        <span>Uncompleted</span>
      </h5>
      <ul v-for="(item, index) in data.list" :key="item.id">
        <li>
          <span>{{ item.content }}</span>
          <div class="tool">
            <ion-icon
              id="trash"
              name="trash-outline"
              @click="removeToDo(index)"
            ></ion-icon>
            <ion-icon
              id="check"
              name="checkmark-done-outline"
              @click="doneTodo(item, index)"
            ></ion-icon>
          </div>
        </li>
      </ul>
    </div>
    <div class="complete" v-if="data.list.length || data.unlist.length">
      <h5>
        <img src="../assets/tick.ico" />
        <span>Completed</span>
      </h5>
      <ul v-for="(unData, unIndex) in data.unlist" :key="unData.unId">
        <li
          :style="{
            textDecoration: 'line-through',
            background: 'rgba(0, 177, 59, 0.15)',
          }"
        >
          <span>{{ unData.unContent }}</span>
          <div class="tool">
            <ion-icon
              id="trash"
              name="trash-outline"
              @click="removeUnToDo(unIndex)"
            ></ion-icon>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <Stat :uncompleted="data.list.length" :completed="data.unlist.length" />
</template>

<style scoped>
.container {
  width: 700px;
  flex-direction: row;
  margin-top: 2rem;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

form input {
  width: 100%;
  height: 2.25rem;
  border: none;
  outline: none;
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgb(233, 233, 233);
}

form input[type="text"] {
  padding-left: 1rem;
}

form button {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.849);
  border-radius: 20px;
  width: 5rem;
  height: 2.25rem;
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(226, 226, 226, 0.726);
}

form button:hover {
  box-shadow: 1px 1px 2px rgb(80, 80, 80);
}

.un-complete {
  margin-top: 20px;
}

.complete {
  border-top: 1px solid rgb(223, 223, 223);
}

h5 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
}

h5 img {
  margin-right: 0.25rem;
  width: 1rem;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: white;
}

.tool {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tool > ion-icon:hover {
  cursor: pointer;
  transition: 0.3s;
  transform: scale(1.2) translateY(2px);
}

.tool #trash {
  color: rgb(216, 0, 0);
}

.tool #check {
  color: rgb(1, 165, 1);
  transform: scale(1.2);
}
</style>
