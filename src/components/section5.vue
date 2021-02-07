<template>
  <div id="section-5">
    <form class="section-5-form" @submit.prevent="formSubmit">
      <fieldset>
        <div class="section-5-form-group">
          <label for="section-5-form-name">*Nome:</label>
          <input
            v-model="form.name"
            type="text"
            id="section-5-form-name"
            name="name"
            placeholder="Informe seu nome"
            required
          />
        </div>

        <div class="section-5-form-group section-5-form-group-mail">
          <label for="section-5-form-mail">*E-mail:</label>
          <input
            v-model="form.mail"
            type="email"
            id="section-5-form-mail"
            name="mail"
            placeholder="Informe seu e-mail"
            required
          />
        </div>

        <div class="section-5-form-group section-5-form-group-phone">
          <label for="section-5-form-phone">*Telefone:</label>
          <input
            v-model="form.phone"
            type="tel"
            id="section-5-form-phone"
            name="phone"
            placeholder="(__) ____-____"
            @input="mask($event, 'phone')"
            maxlength="16"
            pattern="\([0-9]{2}\)[\s][0-9]?[\s]?[0-9]{4}-[0-9]{4}"
            title="Digite um telefone válido"
            required
          />
        </div>

        <div class="section-5-form-group section-5-form-group-message">
          <label for="section-5-form-message">*Mensagem:</label>
          <textarea
            v-model="form.message"
            type="text"
            id="section-5-form-message"
            name="message"
            placeholder="Escreva aqui"
            required
          ></textarea>
        </div>
      </fieldset>

      <div class="section-5-form-group-button-wrapper">
        <button>ENVIAR</button>
      </div>
    </form>
  </div>
</template>

<script>
const defaultForm = {
  name: "",
  mail: "",
  phone: "",
  message: "",
};

export default {
  name: "Section-5",

  data() {
    return {
      form: { ...defaultForm },
    };
  },

  methods: {
    formSubmit() {
      alert(`
        Formulário enviado!

        Nome: 
        ${this.form.name}

        E-mail: 
        ${this.form.mail}

        Telefone: 
        ${this.form.phone}

        Mensagem: 
        ${this.form.message}
      `);

      this.form = { ...defaultForm };
    },

    mask(event, maskType) {
      this.$nextTick(() => {
        switch (maskType) {
          case "phone":
            event.target.value = this.phoneMask(event.target.value);
            break;
        }
      });
    },

    phoneMask(value) {
      let onlyNumbers = value.replace(/\D/g, "");
      let masked = "";
      for (var i = 0; i < onlyNumbers.length; i++) {
        let char = onlyNumbers.charAt(i);

        if (onlyNumbers.length < 11) {
          switch (i) {
            case 0:
              masked += "(";
              break;
            case 2:
              masked += ")";
              masked += " ";
              break;
            case 6:
              masked += "-";
              break;
          }
        } else {
          switch (i) {
            case 0:
              masked += "(";
              break;
            case 2:
              masked += ")";
              masked += " ";
              break;
            case 3:
              masked += " ";
              break;
            case 7:
              masked += "-";
              break;
          }
        }

        masked += char;
      }
      return masked;
    },
  },
};
</script>

<style lang="scss">
#section-5 {
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(50%, var(--gray-3)),
    color-stop(50%, var(--gray-2))
  );
  background: -webkit-linear-gradient(
    top left,
    var(--gray-3) 50%,
    var(--gray-2) 50%
  );
  background: -o-linear-gradient(
    top left,
    var(--gray-3) 50%,
    var(--gray-2) 50%
  );
  background: linear-gradient(
    to bottom right,
    var(--gray-3) 50%,
    var(--gray-2) 50%
  );

  padding-top: 20px;
  padding-bottom: 20px;
}
@media screen and (min-width: 900px) {
  #section-5 {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.section-5-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
}

.section-5-form fieldset {
  all: unset;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.section-5-form-group {
  background-color: var(--gray-5);
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: left;
  padding: 25px;
  box-sizing: border-box;
  width: 100%;
}

.section-5-form-group:not(:last-child) {
  margin-bottom: 5px;
}
@media screen and (min-width: 900px) {
  .section-5-form-group:not(:last-child) {
    margin-bottom: 10px;
  }
}
.section-5-form-group:not(:first-child) {
  margin-top: 5px;
}
@media screen and (min-width: 900px) {
  .section-5-form-group:not(:first-child) {
    margin-top: 10px;
  }
}

.section-5-form-group label {
  font-weight: 700;
  color: var(--black);
  font-size: 18px;
  margin-right: 15px;
  white-space: nowrap;
}

.section-5-form-group input,
.section-5-form-group textarea {
  height: 100%;
  font-weight: 400;
  color: var(--white);
  font-size: 18px;
  background-color: transparent;
  border: 0;
  flex-grow: 1;
  outline: none;
  caret-color: var(--black);
}

.section-5-form-group input::placeholder,
.section-5-form-group textarea::placeholder {
  color: var(--gray-4);
}

.section-5-form-group-mail,
.section-5-form-group-phone {
  width: 100%;
}
@media screen and (min-width: 900px) {
  .section-5-form-group-mail,
  .section-5-form-group-phone {
    width: 49%;
  }
}

.section-5-form-group-message textarea {
  height: 160px;
  resize: vertical;
  min-height: 21px;
  position: relative;
  top: -1px;
}

.section-5-form-group-button-wrapper {
  width: 100%;
}

.section-5-form-group-button-wrapper button {
  background-color: var(--white);
  color: var(--black);
  font-weight: 700;
  border-radius: 10px;
  height: 60px;
  width: 160px;
  font-size: 18px;
  margin-top: 20px;
  outline: none;
}
</style>
