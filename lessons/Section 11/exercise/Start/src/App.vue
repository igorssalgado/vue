<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

            <app-full-name v-model="userData.fullName"></app-full-name>

          <div class="form-group">
            <label for="mail">Mail:</label>
            <input type="text" id="mail" class="form-control" v-model="userData.mail" />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" class="form-control" v-model="userData.password" />
          </div>
          <div class="form-group">
            <label for="storedDB">
              <input type="radio" id="yes" value="yes" v-model="userData.storedDB" /> Yes
              <input type="radio" id="no" value="no" v-model="userData.storedDB" /> No
            </label>
          </div>
          <!-- End Exercise 1 -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
          <button type="submit" class="btn btn-primary" @click.prevent="submitted">Submit!</button>
          <!-- End Exercise 2 -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName }}</p>
            <p>Mail: {{ userData.mail }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ userData.storedDB }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fullName from "./FullName.vue";

export default {
  data() {
    return {
      userData: {
        fullName: "",
        mail: "",
        password: "",
        storedDB: "no"
      },
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appFullName: fullName
  }
};
</script>

<style>
</style>
