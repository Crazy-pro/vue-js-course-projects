<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First Name: </label>
      <input
        type="text"
        id="firstName"
        v-model.trim="firstName.value"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">First Name must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last Name: </label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.value"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Last Name must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description: </label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.value"
        @blur="clearValidity('description')">
      </textarea>
      <p v-if="!description.isValid">Description must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate: </label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.value"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">Rate must be greater than zero!</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise:</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="Front-End"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Front-End Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="Back-End"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Back-End Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="Career"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">At least one expertise must be selected!</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again!</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['saved-data'],
  data() {
    return {
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      rate: {
        value: null,
        isValid: true,
      },
      areas: {
        value: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateform() {
      this.formIsValid = true;
      if (this.firstName.value === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.value === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.value || this.rate.value < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.value.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },

    submitForm() {
      this.validateform();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        description: this.description.value,
        rate: this.rate.value,
        areas: this.areas.value,
      };

      this.$emit('saved-data', formData);

      console.log(formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
